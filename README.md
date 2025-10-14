# E-Medical Record & Appointment System - Complete Development Guide

## 🎯 Master Development Prompt

You are tasked with building a production-ready **E-Medical Record & Appointment System** using modern web technologies. This system must handle 500+ concurrent users with sub-3-second appointment booking performance.

### Tech Stack Requirements

**Core Framework:**
- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Monolithic architecture for simplified deployment

**Database & ORM:**
- PostgreSQL 15+
- Prisma ORM with optimized indexes
- Connection pooling for performance

**Authentication:**
- NextAuth.js v5 (Auth.js)
- Role-based access control (RBAC): Patient, Doctor, Admin
- Session management with JWT

**AI Integration Points:**
- **Appointment Scheduling AI**: Intelligent slot recommendation based on doctor availability, patient history, and urgency
- **Medical Record Insights**: AI-powered summary generation of patient medical history
- **Symptom Checker**: Pre-appointment symptom analysis to route to appropriate specialists
- **Predictive Analytics**: Forecast appointment no-shows and optimize scheduling
- **Natural Language Processing**: Search medical records using conversational queries

**Performance & Compliance:**
- Server-side rendering (SSR) for initial loads
- React Server Components for optimized data fetching
- Edge caching with Next.js middleware
- HIPAA-compliant data handling (encryption at rest and in transit)
- Audit logging for all data access
- Data retention policies per healthcare regulations

---

## 📋 System Architecture

### Database Schema (Prisma Models)

```prisma
// User Management
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  emailVerified DateTime?
  name          String?
  password      String
  role          UserRole  @default(PATIENT)
  image         String?
  phone         String?
  dateOfBirth   DateTime?
  address       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relations
  patient       Patient?
  doctor        Doctor?
  accounts      Account[]
  sessions      Session[]
  
  @@index([email])
  @@index([role])
}

enum UserRole {
  PATIENT
  DOCTOR
  ADMIN
}

model Patient {
  id                String              @id @default(cuid())
  userId            String              @unique
  user              User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  bloodGroup        String?
  emergencyContact  String?
  allergies         String[]
  chronicConditions String[]
  insuranceNumber   String?
  
  medicalRecords    MedicalRecord[]
  appointments      Appointment[]
  prescriptions     Prescription[]
  
  @@index([userId])
}

model Doctor {
  id              String         @id @default(cuid())
  userId          String         @unique
  user            User           @relation(fields: [userId], references: [id], onDelete: Cascade)
  specialization  String
  licenseNumber   String         @unique
  qualifications  String[]
  experienceYears Int
  consultationFee Decimal        @db.Decimal(10, 2)
  biography       String?
  isAvailable     Boolean        @default(true)
  rating          Float          @default(0)
  
  appointments    Appointment[]
  prescriptions   Prescription[]
  availability    DoctorAvailability[]
  
  @@index([userId])
  @@index([specialization])
}

model DoctorAvailability {
  id        String   @id @default(cuid())
  doctorId  String
  doctor    Doctor   @relation(fields: [doctorId], references: [id], onDelete: Cascade)
  dayOfWeek Int      // 0=Sunday, 6=Saturday
  startTime String   // Format: "09:00"
  endTime   String   // Format: "17:00"
  slotDuration Int   @default(30) // minutes
  
  @@index([doctorId])
  @@unique([doctorId, dayOfWeek])
}

model Appointment {
  id              String            @id @default(cuid())
  patientId       String
  patient         Patient           @relation(fields: [patientId], references: [id])
  doctorId        String
  doctor          Doctor            @relation(fields: [doctorId], references: [id])
  
  scheduledAt     DateTime
  duration        Int               @default(30) // minutes
  status          AppointmentStatus @default(PENDING)
  reason          String
  symptoms        String[]
  notes           String?
  aiRecommendation String?          // AI-suggested specialist or priority
  
  prescription    Prescription?
  createdAt       DateTime          @default(now())
  updatedAt       DateTime          @updatedAt
  
  @@index([patientId])
  @@index([doctorId])
  @@index([scheduledAt])
  @@index([status])
}

enum AppointmentStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
  NO_SHOW
}

model MedicalRecord {
  id          String   @id @default(cuid())
  patientId   String
  patient     Patient  @relation(fields: [patientId], references: [id])
  
  recordType  String   // "Lab Report", "Diagnosis", "Imaging", etc.
  title       String
  description String?
  fileUrl     String?
  fileType    String?
  recordDate  DateTime
  aiSummary   String?  // AI-generated summary of the record
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([patientId])
  @@index([recordDate])
}

model Prescription {
  id            String      @id @default(cuid())
  appointmentId String      @unique
  appointment   Appointment @relation(fields: [appointmentId], references: [id])
  doctorId      String
  doctor        Doctor      @relation(fields: [doctorId], references: [id])
  patientId     String
  patient       Patient     @relation(fields: [patientId], references: [id])
  
  medications   Medication[]
  diagnosis     String
  instructions  String?
  validUntil    DateTime?
  
  createdAt     DateTime    @default(now())
  
  @@index([patientId])
  @@index([doctorId])
}

model Medication {
  id              String       @id @default(cuid())
  prescriptionId  String
  prescription    Prescription @relation(fields: [prescriptionId], references: [id], onDelete: Cascade)
  
  name            String
  dosage          String
  frequency       String
  duration        String
  instructions    String?
  
  @@index([prescriptionId])
}

model AuditLog {
  id          String   @id @default(cuid())
  userId      String
  action      String   // "VIEW", "CREATE", "UPDATE", "DELETE"
  resource    String   // "Appointment", "MedicalRecord", etc.
  resourceId  String
  ipAddress   String?
  userAgent   String?
  timestamp   DateTime @default(now())
  
  @@index([userId])
  @@index([timestamp])
  @@index([resource, resourceId])
}
```

---

## 🚀 Sprint Planning & User Stories

### **Sprint 1: Foundation & Core Authentication** (2 weeks)
*Goal: Establish secure authentication and basic user management*

#### User Stories:

**US-1.1: User Registration**
```
As a Patient/Doctor
I want to register for an account
So that I can access the medical system

Acceptance Criteria:
- Email/password registration with validation
- Role selection (Patient/Doctor)
- Email verification sent
- Password strength requirements enforced
- Duplicate email prevention

Technical Tasks:
- Setup Next.js project with TypeScript
- Configure Prisma with PostgreSQL
- Implement NextAuth.js with credentials provider
- Create User, Patient, Doctor models
- Build registration API route with validation
- Design registration UI with error handling
```

**US-1.2: Secure Login**
```
As a User
I want to securely log in to my account
So that I can access my dashboard

Acceptance Criteria:
- Email/password authentication
- Remember me functionality
- Error messages for invalid credentials
- Redirect to role-based dashboard
- Session persists across page refreshes

Technical Tasks:
- Configure NextAuth session strategy
- Implement login page with form validation
- Add CSRF protection
- Create middleware for protected routes
- Build role-based redirect logic
```

**US-1.3: Profile Management**
```
As a User
I want to view and edit my profile
So that my information stays current

Acceptance Criteria:
- View personal information
- Edit name, phone, address, date of birth
- Upload profile picture
- Update password with old password verification
- Success/error notifications

Technical Tasks:
- Create profile API endpoints (GET, PATCH)
- Implement file upload for images (use uploadthing or similar)
- Build profile edit form with optimistic updates
- Add password change functionality with bcrypt
```

**Technical Debt Sprint 1:**
- Setup CI/CD pipeline
- Configure ESLint and Prettier
- Setup error tracking (Sentry)
- Database migration strategy

---

### **Sprint 2: Appointment Booking Core** (2 weeks)
*Goal: Enable patients to book appointments with doctors*

#### User Stories:

**US-2.1: Doctor Discovery**
```
As a Patient
I want to search and filter doctors by specialization
So that I can find the right healthcare provider

Acceptance Criteria:
- List all available doctors
- Filter by specialization
- See doctor details (qualifications, experience, rating, fee)
- View doctor availability calendar
- Responsive design for mobile

Technical Tasks:
- Create doctor listing API with pagination
- Implement search and filter logic
- Build doctor card components
- Add doctor detail modal/page
- Optimize queries with Prisma includes
```

**US-2.2: Real-Time Appointment Booking**
```
As a Patient
I want to book an appointment in under 3 seconds
So that I can quickly secure my time slot

Acceptance Criteria:
- Select available time slot from calendar
- Enter reason for visit and symptoms
- Confirm appointment booking
- Receive confirmation (email/SMS)
- Booking completes in <3 seconds
- Prevent double-booking

Technical Tasks:
- Create appointment booking API with transaction
- Implement optimistic locking for slot conflicts
- Build calendar UI with available slots (use react-big-calendar)
- Add real-time slot availability check
- Optimize database indexes for performance
- Implement email notifications (use Resend or similar)
- Add loading states and error handling
```

**US-2.3: AI-Powered Appointment Recommendations**
```
As a Patient
I want AI to suggest the best doctor and time slot
So that I get appropriate care quickly

Acceptance Criteria:
- Enter symptoms in natural language
- Receive specialist recommendations
- See optimal time slots based on urgency
- View confidence score for recommendations
- Option to override AI suggestions

Technical Tasks:
- Integrate OpenAI API or local LLM
- Create symptom analysis endpoint
- Build recommendation algorithm considering:
  * Symptom-to-specialization mapping
  * Doctor availability
  * Patient history
  * Urgency classification
- Add AI recommendation UI with explanations
- Implement fallback for API failures
```

**Performance Requirements Sprint 2:**
- Load testing with 500 concurrent users (use k6 or Artillery)
- Database query optimization
- Implement Redis caching for doctor availability
- Add database connection pooling

---

### **Sprint 3: Medical Records Management** (2 weeks)
*Goal: Digitize medical record storage and retrieval*

#### User Stories:

**US-3.1: Upload Medical Records**
```
As a Patient
I want to upload my medical reports and documents
So that my complete medical history is accessible

Acceptance Criteria:
- Upload multiple files (PDF, images, DICOM)
- Categorize records (Lab Report, Prescription, X-Ray, etc.)
- Add title, date, and description
- Support drag-and-drop upload
- File size limit enforcement (max 10MB per file)
- Progress indicator during upload

Technical Tasks:
- Implement file upload API with validation
- Setup cloud storage (AWS S3, Cloudflare R2, or Uploadthing)
- Create MedicalRecord model and CRUD operations
- Build upload UI with react-dropzone
- Add file type validation
- Implement virus scanning for uploads
```

**US-3.2: View Medical History**
```
As a Patient/Doctor
I want to view chronological medical history
So that I can track health progress

Acceptance Criteria:
- Timeline view of all medical records
- Filter by record type and date range
- Preview documents inline
- Download records
- Search records by keywords

Technical Tasks:
- Create medical records listing API with filters
- Build timeline UI component
- Implement PDF preview (use react-pdf)
- Add image viewer for scans
- Create search functionality with full-text search
```

**US-3.3: AI Medical Record Insights**
```
As a Doctor
I want AI-generated summaries of patient records
So that I can quickly understand patient history

Acceptance Criteria:
- Auto-generate summary of medical history
- Highlight critical conditions and allergies
- Show medication history
- Identify patterns and trends
- Update summary when new records added

Technical Tasks:
- Create AI summarization pipeline
- Integrate with OpenAI GPT-4 or Claude API
- Build background job for processing (use BullMQ)
- Store summaries in aiSummary field
- Display formatted summaries in UI
- Add regenerate summary option
```

---

### **Sprint 4: Doctor Dashboard & Prescriptions** (2 weeks)
*Goal: Enable doctors to manage appointments and create prescriptions*

#### User Stories:

**US-4.1: Doctor Appointment Management**
```
As a Doctor
I want to view and manage my appointments
So that I can organize my schedule

Acceptance Criteria:
- View daily/weekly appointment calendar
- Approve or reject pending appointments
- Reschedule appointments
- Mark appointments as completed
- Add consultation notes
- View patient medical history before appointment

Technical Tasks:
- Create doctor dashboard API endpoints
- Build appointment management UI
- Implement status update logic
- Add patient history preview
- Create notes textarea with auto-save
```

**US-4.2: Digital Prescription Creation**
```
As a Doctor
I want to create digital prescriptions
So that patients have documented treatment plans

Acceptance Criteria:
- Select from medication database
- Specify dosage, frequency, duration
- Add diagnosis and instructions
- Generate PDF prescription
- Send prescription to patient (email/download)
- Mark appointment as completed

Technical Tasks:
- Create Prescription and Medication models
- Build prescription form with medication search
- Implement PDF generation (use @react-pdf/renderer)
- Add prescription to appointment
- Create prescription history view
```

**US-4.3: Doctor Availability Settings**
```
As a Doctor
I want to set my working hours and availability
So that patients can only book during my available times

Acceptance Criteria:
- Set weekly schedule (day-wise timings)
- Define slot duration (15/30/45/60 minutes)
- Mark specific days as unavailable
- Set break times
- Block emergency leave dates

Technical Tasks:
- Create DoctorAvailability CRUD APIs
- Build availability settings UI with time picker
- Implement slot generation algorithm
- Update appointment booking to respect availability
- Add validation for overlapping schedules
```

---

### **Sprint 5: Admin Panel & Analytics** (2 weeks)
*Goal: System administration and insights*

#### User Stories:

**US-5.1: User Management**
```
As an Admin
I want to manage users (patients/doctors)
So that I can maintain system integrity

Acceptance Criteria:
- View all users with filters
- Approve/reject doctor registrations
- Deactivate/reactivate accounts
- Reset user passwords
- View user activity logs

Technical Tasks:
- Create admin dashboard
- Build user management API with pagination
- Implement user status updates
- Add bulk actions
- Create activity log viewer
```

**US-5.2: System Analytics**
```
As an Admin
I want to view system usage analytics
So that I can make data-driven decisions

Acceptance Criteria:
- Total appointments by status (dashboard)
- Patient/doctor registration trends
- Popular specializations
- Average appointment duration
- Peak usage times
- No-show rate

Technical Tasks:
- Create analytics API endpoints
- Build charts with recharts
- Implement date range filters
- Add export to CSV functionality
- Cache analytics with Redis (1-hour TTL)
```

**US-5.3: Audit Trail**
```
As an Admin
I want to view audit logs for compliance
So that I can track data access and changes

Acceptance Criteria:
- Log all CRUD operations on sensitive data
- Capture user, timestamp, IP, action
- Filter logs by user, resource, date
- Export logs for compliance reporting
- Retain logs per regulatory requirements

Technical Tasks:
- Implement AuditLog model
- Create logging middleware
- Build audit log viewer UI
- Add log retention policy
- Implement log export functionality
```

---

### **Sprint 6: Notifications & Compliance (MVP Ready)** (2 weeks)
*Goal: Complete MVP with notifications and compliance features*

#### User Stories:

**US-6.1: Email/SMS Notifications**
```
As a User
I want to receive notifications for appointments
So that I don't miss important events

Acceptance Criteria:
- Appointment confirmation email
- Reminder 24 hours before appointment
- Appointment cancellation notification
- Prescription ready notification
- SMS support for critical alerts

Technical Tasks:
- Setup email service (Resend, SendGrid)
- Setup SMS service (Twilio, SNS)
- Create notification templates
- Implement background job queue (BullMQ with Redis)
- Add notification preferences to user settings
```

**US-6.2: Data Privacy & HIPAA Compliance**
```
As a System
I want to enforce data privacy regulations
So that we comply with healthcare laws

Acceptance Criteria:
- All PHI encrypted at rest (PostgreSQL encryption)
- TLS 1.3 for data in transit
- Session timeout after 15 minutes of inactivity
- Password policy enforcement (12+ chars, complexity)
- Automatic account lockout after 5 failed attempts
- Data retention policies enforced

Technical Tasks:
- Enable PostgreSQL encryption
- Configure SSL/TLS for all connections
- Implement session timeout in NextAuth
- Add password validation rules
- Create rate limiting middleware
- Implement data retention cleanup job
- Add terms of service acceptance
```

**US-6.3: Search & Natural Language Queries**
```
As a User
I want to search records using natural language
So that I can find information quickly

Acceptance Criteria:
- Search appointments, records, prescriptions
- Natural language queries ("my last blood test")
- Filter by date ranges
- Auto-suggestions while typing
- Fast search results (<500ms)

Technical Tasks:
- Implement full-text search in PostgreSQL
- Create unified search API
- Integrate AI for query understanding (optional)
- Build search UI with autocomplete
- Add search result highlighting
- Optimize with database indexes
```

---

## 🏥 Healthcare Compliance Checklist

### HIPAA Technical Safeguards
- [ ] Access Control: Unique user IDs, emergency access procedure
- [ ] Audit Controls: Audit logs for all PHI access
- [ ] Integrity Controls: Data validation and corruption detection
- [ ] Transmission Security: TLS 1.3, VPN for admin access
- [ ] Authentication: Multi-factor authentication for doctors/admin

### Data Protection
- [ ] Encryption at rest (PostgreSQL transparent data encryption)
- [ ] Encryption in transit (TLS certificates)
- [ ] Secure key management (use AWS KMS, GCP KMS, or HashiCorp Vault)
- [ ] Data backup and disaster recovery plan
- [ ] Data retention and destruction policies

### Access Control
- [ ] Role-based access control (RBAC)
- [ ] Minimum necessary access principle
- [ ] Automatic logoff after 15 minutes
- [ ] Account lockout after failed attempts
- [ ] Session management and token expiration

### Audit & Monitoring
- [ ] Log all access to PHI (who, what, when, from where)
- [ ] Regular security audits
- [ ] Intrusion detection system
- [ ] Monitoring for unusual activity patterns
- [ ] Incident response plan

### Business Associate Agreements
- [ ] Third-party service contracts (email, SMS, hosting)
- [ ] Data processing agreements with cloud providers
- [ ] Vendor security assessments

---

## ⚡ Performance Optimization Strategy

### Database Optimization
```typescript
// Prisma indexes for critical queries
@@index([patientId, scheduledAt]) // Appointment lookups
@@index([doctorId, status, scheduledAt]) // Doctor schedule
@@index([userId, timestamp]) // Audit logs

// Connection pooling
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  connection_limit = 100
}

// Query optimization
const appointments = await prisma.appointment.findMany({
  where: { doctorId, scheduledAt: { gte: startDate, lte: endDate } },
  select: { 
    id: true, 
    scheduledAt: true, 
    patient: { select: { user: { select: { name: true } } } }
  }, // Only select needed fields
  take: 50, // Pagination
});
```

### Caching Strategy
```typescript
// Redis caching for doctor availability
import { Redis } from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

// Cache doctor slots for 5 minutes
const cacheKey = `doctor:${doctorId}:slots:${date}`;
const cached = await redis.get(cacheKey);
if (cached) return JSON.parse(cached);

// Fetch and cache
const slots = await generateTimeSlots(doctorId, date);
await redis.setex(cacheKey, 300, JSON.stringify(slots));
```

### API Route Optimization
```typescript
// Use Next.js Route Handlers with streaming
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Parallel data fetching
  const [appointments, doctors] = await Promise.all([
    prisma.appointment.findMany({ /* ... */ }),
    prisma.doctor.findMany({ /* ... */ }),
  ]);
  
  return Response.json({ appointments, doctors });
}
```

---

## 🧪 Testing Requirements

### Unit Tests (Jest + React Testing Library)
- All API routes (mock Prisma)
- Utility functions (date calculations, validation)
- React components (user interactions)

### Integration Tests
- Authentication flow (register → login → access protected route)
- Appointment booking end-to-end
- Prescription creation workflow

### Load Testing (k6)
```javascript
// 500 concurrent users booking appointments
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 500 }, // Ramp up
    { duration: '5m', target: 500 }, // Sustain
    { duration: '2m', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'], // 95% under 3s
  },
};

export default function() {
  const payload = JSON.stringify({
    doctorId: 'xyz',
    scheduledAt: '2025-10-15T10:00:00Z',
    reason: 'Checkup',
  });
  
  const res = http.post('https://yourapp.com/api/appointments', payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  
  check(res, {
    'status is 201': (r) => r.status === 201,
    'response time < 3s': (r) => r.timings.duration < 3000,
  });
  
  sleep(1);
}
```

---

## 📦 Deployment Checklist

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/ehr_db?schema=public"
DIRECT_URL="postgresql://user:password@localhost:5432/ehr_db?schema=public"

# NextAuth
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# AI Services
OPENAI_API_KEY="sk-..."

# File Storage
UPLOADTHING_SECRET="sk_live_..."
UPLOADTHING_APP_ID="..."

# Email/SMS
RESEND_API_KEY="re_..."
TWILIO_ACCOUNT_SID="AC..."
TWILIO_AUTH_TOKEN="..."

# Redis (for caching and queue)
REDIS_URL="redis://localhost:6379"

# Monitoring
SENTRY_DSN="https://..."
```

### Infrastructure (Recommended)
- **Hosting**: Vercel (Next.js optimized) or Railway
- **Database**: Neon, Supabase, or AWS RDS PostgreSQL
- **Redis**: Upstash Redis (serverless)
- **File Storage**: Uploadthing, AWS S3, or Cloudflare R2
- **Email**: Resend or SendGrid
- **Monitoring**: Sentry, LogRocket

### Pre-Launch
- [ ] Run Prisma migrations on production DB
- [ ] Setup automated backups
- [ ] Configure SSL certificates
- [ ] Setup monitoring and alerts
- [ ] Load test with 500+ users
- [ ] Security audit (OWASP Top 10)
- [ ] Penetration testing
- [ ] Privacy policy and terms of service
- [ ] HIPAA compliance review

---

## 📚 Key Implementation Files to Create

```
project-structure/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── patient/
│   │   │   ├── appointments/page.tsx
│   │   │   ├── records/page.tsx
│   │   │   └── profile/page.tsx
│   │   ├── doctor/
│   │   │   ├── appointments/page.tsx
│   │   │   ├── patients/[id]/page.tsx
│   │   │   └── availability/page.tsx
│   │   └── admin/
│   │       ├── users/page.tsx
│   │       └── analytics/page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── appointments/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── doctors/route.ts
│   │   ├── records/route.ts
│   │   └── ai/
│   │       ├── recommend/route.ts
│   │       └── summarize/route.ts
│   └── layout.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── appointments/
│   ├── records/
│   └── shared/
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── ai.ts
│   ├── email.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
└── package.json
```

---

## 🎯 MVP Definition (End of Sprint 6)

The system is MVP-ready when:
1. ✅ Patients can register, login, book appointments in <3 seconds
2. ✅ Doctors can manage schedules, view patient history, create prescriptions
3. ✅ Admin can manage users and view analytics
4. ✅ AI recommendations for appointments are functional
5. ✅ Medical records upload and retrieval works
6. ✅ Email/SMS notifications are sent
7. ✅ System handles 500 concurrent users with <3s booking time
8. ✅ HIPAA compliance measures are implemented
9. ✅ Audit logging is active
10. ✅ Production deployment is complete and monitored

---

## 🚀 Getting Started Command

```bash
# Clone and setup
npx create-next-app@latest ehr-system --typescript --tailwind --app --eslint
cd ehr-system

# Install dependencies
npm install prisma @prisma/client next-auth @auth/prisma-adapter
npm install bcryptjs zod react-hook-form @hookform/resolvers
npm install date-fns recharts react-pdf @react-pdf/renderer
npm install @uploadthing/react uploadthing
npm install openai ioredis bullmq
npm install resend twilio

# Dev dependencies
npm install -D @types/bcryptjs @types/node

# Initialize Prisma
npx prisma init

# Setup database (copy schema from above)
npx prisma migrate dev --name init
npx prisma generate

# Run development server
npm run dev
```

Now begin with **Sprint 1, User Story 1.1** and iterate through the sprints systematically. Good luck! 🎉