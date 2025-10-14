// lib/api/doctors.ts
export async function getDoctorProfile(doctorId: string) {
  const response = await fetch(`/api/doctors/${doctorId}/profile`);
  if (!response.ok) {
    throw new Error("Failed to fetch doctor profile");
  }
  return response.json();
}

export async function updateDoctorProfile(doctorId: string, profileData: any) {
  const response = await fetch(`/api/doctors/${doctorId}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    throw new Error("Failed to update doctor profile");
  }

  return response.json();
}

export async function uploadDoctorAvatar(doctorId: string, file: File) {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await fetch(`/api/doctors/${doctorId}/avatar`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload avatar");
  }

  return response.json();
}