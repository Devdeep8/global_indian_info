import {  PostType, PostStatus, PostVisibility, UserRole } from '@/generated/client';
import { db } from '@/lib/db';


interface LegacyArticle {
  id: number;
  title: string;
  imagepath: string;
  categories: string;
  slug: string;
  description: string;
  uploaded_at: string;
}

async function migrateArticles() {
  console.log('🚀 Starting articles migration...\n');

  try {
    // Step 1: DELETE ALL PREVIOUS DATA
    console.log('🧹 Deleting ALL previous data...');
    
    // Delete in correct order due to foreign key constraints
    console.log('  - Deleting post media relations...');
    await db.postMedia.deleteMany();
    
    console.log('  - Deleting post tags relations...');
    await db.postTags.deleteMany();
    
    console.log('  - Deleting view logs...');
    await db.viewLog.deleteMany();
    
    console.log('  - Deleting comments...');
    await db.comment.deleteMany();
    
    console.log('  - Deleting revisions...');
    await db.revision.deleteMany();
    
    console.log('  - Deleting ALL posts (articles, blogs, everything)...');
    await db.post.deleteMany();
    
    console.log('  - Deleting ALL tags...');
    await db.tag.deleteMany();
    
    console.log('  - Deleting ALL categories...');
    await db.category.deleteMany();
    
    console.log('✅ All previous articles and categories deleted!\n');

    // Step 2: Ensure admin user exists
    console.log('👤 Setting up admin user...');
    const adminUser = await db.user.upsert({
      where: { email: 'info@prabisha.com' },
      update: {},
      create: {
        id: 'admin-user-001',
        name: 'Pratyush Kumar',
        email: 'info@prabisha.com',
        username: 'pratyush',
        role: UserRole.ADMIN,
        bio: 'Administrator and Content Manager',
        image: '/uploads/users/default-admin.png',
        emailVerified: new Date(),
      },
    });
    console.log('✅ Admin user ready\n');

    // Step 3: Create fresh categories
    console.log('📁 Creating fresh categories...');
    const categoryMap = new Map<string, string>();
    
    const categories = [
      { name: 'Latest News', slug: 'latest' },
      { name: 'Business', slug: 'business' },
      { name: 'Technology', slug: 'technology' },
      { name: 'Education', slug: 'education' },
      { name: 'Travel', slug: 'travel' },
      { name: 'Events', slug: 'events' },
      { name: 'News', slug: 'news' },
      { name: 'Jobs', slug: 'jobs' },
    ];

    for (const cat of categories) {
      const category = await db.category.create({
        data: {
          name: cat.name,
          slug: cat.slug,
        },
      });
      categoryMap.set(cat.slug, category.id);
      console.log(`  ✓ Created: ${cat.name}`);
    }
    console.log('✅ Categories created\n');

    // Step 4: Migrate all articles from SQL
    console.log('📰 Migrating articles...\n');
    
    const articles: LegacyArticle[] = [
      {
        id: 33,
        title: 'Very confident that India will be leader of Global South, says Denmark envoy Freddy Svane',
        imagepath: 'image1-1694057434554-56839819.webp',
        categories: '["latest","business"]',
        slug: 'very-confident-that-india-will-be-leader-of-global-south,-says-denmark-envoy-freddy-svane',
        description: '<p><span style="color: rgb(0, 0, 0);">Exuding confidence in New Delhi as the "leader of the Global South", Denmark\'s Ambassador to India, Freddy Svane said that the world needs a country like India which believes in democracy and rule of law, as alternative to powers who "debt-trap" the poor countries.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Svane called India the "leader of the Global South" and affirmed confidence that New Delhi will build between the Global South and other countries in the West.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">He called the G20 Summit the biggest chance for India to set the direction for the future global world order.</span></p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 35,
        title: 'Tinsukia\'s Karabi Gogoi Selected to Represent India in India-Japan Teacher Exchange Program',
        imagepath: 'image1-1694267769820-922923077.jpeg',
        categories: '["latest","news"]',
        slug: 'tinsukia\'s-karabi-gogoi-selected-to-represent-india-in-india-japan-teacher-exchange-program',
        description: '<p>In a moment of great pride and recognition, Ms. Karabi Gogoi, an esteemed educator from Tinsukia, Assam, has been selected to represent India in the prestigious India-Japan Teacher Exchange Program. This program, a testament to the importance of educational collaboration between nations, not only acknowledges the talent and dedication of Ms. Gogoi but also fosters cross-cultural understanding and enriches the teaching-learning experience on both sides.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 37,
        title: 'India Proudly Opens Its Arms to Welcome Eminent World Leaders for the Prestigious G20 Summit',
        imagepath: 'image1-1694267908669-570312682.jpeg',
        categories: '["latest","business","news"]',
        slug: 'india-proudly-opens-its-arms-to-welcome-eminent-world-leaders-for-the-prestigious-g20-summit',
        description: '<p>In a grand display of international diplomacy and cooperation, India is set to host the prestigious G20 Summit, welcoming eminent world leaders to its vibrant and diverse shores. This gathering of global leaders promises to be a monumental event, fostering dialogue, cooperation, and innovative solutions to address pressing global challenges.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 38,
        title: 'Chhath Puja 2023 in UK',
        imagepath: 'image1-1694498159460-327623345.jpeg',
        categories: '["events","latest"]',
        slug: 'chhath-puja-2023-in-uk',
        description: '<p>Celebrate Chhath Puja 2023 in the UK with the Indian community.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 39,
        title: 'Ganesh Darshan',
        imagepath: 'image1-1694498252554-232749211.jpeg',
        categories: '["events","latest"]',
        slug: 'ganesh-darshan',
        description: '<p>MILTON KEYNES KA RAJA</p><p><br></p><p>To register your interest to attend the event, please confirm via <a href="https://forms.gle/AW2PqBbkxcsw6r6U7" rel="noopener noreferrer" target="_blank">https://forms.gle/AW2PqBbkxcsw6r6U7</a></p><p><br></p><p>All are Welcome 🙏🏻</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 40,
        title: 'Sindoor khela event',
        imagepath: 'image1-1694498392689-54667959.jpeg',
        categories: '["latest","events"]',
        slug: 'sindoor-khela-event',
        description: '<p>Welcome to our first ever Sindoor khela event in central London Trafalgar Square in British history on 29 th October Diwali on the square representing State of Bengal this year from 1.30 pm onwards on North Terrace (meet up point)</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 41,
        title: 'Apple\'s first made-in-India iPhone 15 to sell globally on launch day',
        imagepath: 'image1-1694578832951-788092978.jpg',
        categories: '["technology","latest","news","business","events"]',
        slug: 'appleâ€™s-first-made-in-india-iphone-15-to-sell-globally-on-launch-day',
        description: '<p>In a historic development, Apple is set to introduce its latest iPhone models, the iPhone 15 and iPhone 15 Plus, as made-in-India devices available for global sale on their launch day. This move represents a significant shift for Apple and a noteworthy milestone for India\'s manufacturing capabilities.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 47,
        title: 'India\'s Dominant Victory: A Resounding 10-Wicket Triumph',
        imagepath: 'image1-1695047064747-748455440.jpeg',
        categories: '["latest"]',
        slug: 'india\'s-dominant-victory:-a-resounding-10-wicket-triumph',
        description: '<p>India celebrates a dominant 10-wicket victory in cricket.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 48,
        title: 'Indian Medical Graduates Can Now Practise In US, Australia, Canada',
        imagepath: 'image1-1695289194933-436330632.jpg',
        categories: '["latest","news"]',
        slug: 'indian-medical-graduates-can-now-practise-in-us,-australia,-canada',
        description: '<p>The Public Clinical Commission (NMC), India, has been being granted the sought after World Organization for Clinical Training (WFME) Acknowledgment Status for a residency of 10 years, as per an official statement from the Association Wellbeing Service.</p><p><br></p><p>WFME acknowledgment will empower Indian clinical alumni to seek after postgraduate preparation and practice in different nations that require WFME acknowledgment, like the US, Canada, Australia, and New Zealand, the delivery added.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 54,
        title: 'Swaminarayan Akshardham in New Jersey: The Biggest Hindu Temple of the Modern Era in the USA',
        imagepath: 'image1-1695729683709-113099568.png',
        categories: '["news","latest","travel"]',
        slug: 'swaminarayan-akshardham-in-new-jersey:-the-biggest-hindu-temple-of-the-modern-era-in-the-usa',
        description: '<p>In the heart of New Jersey, a magnificent architectural wonder is set to be inaugurated – the Swaminarayan Akshardham. This grand temple complex is not just a religious monument; it is a symbol of cultural richness and architectural excellence.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 56,
        title: 'Why everyone is bullish on India? A picture is worth a thousand words.',
        imagepath: 'image1-1696506525041-315381672.jpeg',
        categories: '["latest","news"]',
        slug: 'why-everyone-is-bullish-on-india?-a-picture-is-worth-a-thousand-words.',
        description: '<p>Indian hashtag#economy accounts for 3% of the world in 2023. The GDP of India is $3.7 T out of the $105 T of the entire world. Although India is the 5th largest economy in the world, the difference between the Big 2 (USA and China) and the next 3 (Japan, Germany, and India) is massive.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 57,
        title: 'UK\'s Superdry sells S. Asia licenses to India\'s Reliance Retail for $48 mln',
        imagepath: 'image1-1696506831877-457145719.png',
        categories: '["latest","news","business"]',
        slug: 'uk\'s-superdry-sells-s.-asia-licenses-to-india\'s-reliance-retail-for-$48-mln',
        description: '<p>BENGALURU, Oct 4 (Reuters) - Reliance Retail, India\'s largest retailer, will buy UK-based Superdry\'s licenses and brand assets in three Asian countries for 40 million pounds ($48 million), expanding its tie-ups with foreign brands and giving the struggling UK fashion retailer much-needed funds.</p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 59,
        title: 'India Cricket Team for World Cup 2023 Players Name List',
        imagepath: 'image1-1700143403411-896251864.jpg',
        categories: '["latest"]',
        slug: 'india-cricket-team-for-world-cup-2023-players-name-list',
        description: '<p>The <strong>Indian National Cricket Team</strong>, commonly known as <strong>Team India</strong>, is overseen by the <strong>Board of Control for Cricket in India (BCCI)</strong>. They enjoy full membership in <strong>the International Cricket Council (ICC</strong>), which allows them to take part in <strong>Test Matches, One-Day Internationals (ODIs) and Twenty-20 Internationals (T20Is).</strong></p>',
        uploaded_at: '2024-11-05 21:38:39',
      },
      {
        id: 61,
        title: '🌐 Indian Americans Secure Key Positions in the U.S. House of Representatives! 🇺🇸',
        imagepath: 'image1-1730966747290-779208892.png',
        categories: '["news","latest"]',
        slug: '-indian-americans-secure-key-positions-in-the-us-house-of-representatives-',
        description: '<p>We are witnessing a remarkable moment in U.S. politics as several Indian Americans have secured positions in the House of Representatives, shaping the future of the nation:</p>',
        uploaded_at: '2024-11-07 13:36:01',
      },
      {
        id: 62,
        title: 'Suhas Subramanyam Makes History as the First Indian American Elected from Virginia and the Entire East Coast! 🇮🇳🇺🇸',
        imagepath: 'image1-1730966945887-20603484.png',
        categories: '["news","latest"]',
        slug: 'suhas-subramanyam-makes-history-as-the-first-indian-american-elected-from-virginia-and-the-entire-east-coast-',
        description: '<p>A groundbreaking achievement for the Indian American community! Suhas Subramanyam has made history by becoming the first Indian American elected to represent Virginia\'s 87th district, as well as the first to win a seat from the entire East Coast.</p>',
        uploaded_at: '2024-11-07 13:39:15',
      },
      {
        id: 63,
        title: 'Exciting Career Opportunities for Indians in Sweden!',
        imagepath: 'image1-1731475847738-497610436.png',
        categories: '["news","latest","jobs"]',
        slug: 'exciting-career-opportunities-for-indians-in-sweden',
        description: '<p>Sweden\'s new visa rules, effective from 2025, are set to open more high-paying job opportunities for Indian professionals, especially in fields like <span style="color: var(--tw-prose-bold);">STEM</span> (Science, Technology, Engineering, and Mathematics).</p>',
        uploaded_at: '2024-11-13 11:00:52',
      },
      {
        id: 64,
        title: 'Meet Bharat Desai, an Indian-American Entrepreneur Whose Current Net Worth is Rs 13,500 Crore',
        imagepath: 'image1-1731561837943-389212579.png',
        categories: '["latest","technology","news"]',
        slug: '-meet-bharat-desai-an-indianamerican-entrepreneur-whose-current-net-worth-is-rs-13500-crore',
        description: '<p>Bharat Desai, an Indian-American billionaire and former Tata Consultancy Services (TCS) employee, exemplifies the entrepreneurial spirit that turns dreams into reality. Today, with a net worth of approximately Rs 13,501 crore (around $1.6 billion USD), Desai\'s story is both inspiring and instructional for aspiring entrepreneurs.</p>',
        uploaded_at: '2024-11-14 10:54:03',
      },
      {
        id: 65,
        title: 'Sehgal Foundation Receives the Prestigious 5th National Water Award!',
        imagepath: 'image1-1731665075431-470472612.png',
        categories: '["news"]',
        slug: 'sehgal-foundation-receives-the-prestigious-5th-national-water-award-',
        description: '<p>We are thrilled to announce that <strong>Sehgal Foundation</strong>, a remarkable Indian-American initiative, has been honored with the <strong>5th National Water Award</strong> for its exceptional contributions to water conservation and sustainable management across rural India. 💧</p>',
        uploaded_at: '2024-11-15 15:34:38',
      },
      {
        id: 66,
        title: 'Usha Vance Becomes the Second Lady of the United States – A Historic Milestone!',
        imagepath: 'image1-1731911970347-402502664.png',
        categories: '["news"]',
        slug: 'usha-vance-becomes-the-second-lady-of-the-united-states-a-historic-milestone',
        description: '<p>In an inspiring achievement, <strong>Usha Vance</strong> has made history by becoming the <strong>Second Lady of the United States</strong>. Her rise to this prominent position is a testament to her dedication, leadership, and groundbreaking journey in American politics.</p>',
        uploaded_at: '2024-11-18 12:10:08',
      },
      {
        id: 67,
        title: 'US Visa Bulletin December 2024 Update',
        imagepath: 'image1-1732013147750-954901343.png',
        categories: '["news","latest"]',
        slug: 'us-visa-bulletin-december-2024-update',
        description: '<p>The <strong>U.S. Department of State\'s December Visa Bulletin</strong> has been released, showing forward movement for Indian applicants in some Green Card categories, particularly in employment-based (EB) visa categories.</p>',
        uploaded_at: '2024-11-19 16:15:49',
      },
      {
        id: 68,
        title: 'PM Narendra Modi Honored with Guyana\'s Highest Civilian Award',
        imagepath: 'image1-1732530238844-414546740.png',
        categories: '["latest","news","travel"]',
        slug: 'pm-narendra-modi-honored-with-guyanas-highest-civilian-award-',
        description: '<p>In a remarkable recognition of his leadership, India\'s Prime Minister Narendra Modi has been awarded Guyana\'s highest civilian honor, showcasing India\'s growing global influence and diplomatic ties.</p>',
        uploaded_at: '2024-11-25 15:54:04',
      },
      {
        id: 69,
        title: 'Historic Moment at Cambridge Union!',
        imagepath: 'image1-1733814954497-311954609.png',
        categories: '["latest","education","news"]',
        slug: 'historic-moment-at-cambridge-union-',
        description: '<p>A British Indian student, <strong>Anoushka Kale</strong>, has been elected president of the <strong>University of Cambridge\'s historic Cambridge Union Society</strong>, one of the world\'s oldest debating societies, renowned as a defender of free speech since 1815.</p>',
        uploaded_at: '2024-12-10 12:45:58',
      },
    ];

    let successCount = 0;
    let errorCount = 0;

    for (const article of articles) {
      try {
        // Parse categories
        let cats: string[] = [];
        try {
          cats = JSON.parse(article.categories);
        } catch (e) {
          cats = ['latest'];
        }

        const mainCat = cats[0] || 'latest';
        const categoryId = categoryMap.get(mainCat);

        // Strip HTML tags for excerpt
        const stripHtml = (html: string) => {
          return html.replace(/<[^>]*>/g, '').substring(0, 200);
        };

        // Calculate read time (average reading speed: 200 words per minute)
        const wordCount = article.description.split(/\s+/).length;
        const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

        await db.post.create({
          data: {
            title: article.title,
            slug: article.slug,
            excerpt: stripHtml(article.description),
            content: article.description,
            type: PostType.ARTICLE,
            status: PostStatus.PUBLISHED,
            visibility: PostVisibility.PUBLIC,
            coverImageUrl: `/uploads/articles/${article.imagepath}`,
            publishedAt: new Date(article.uploaded_at),
            authorId: adminUser.id,
            categoryId: categoryId,
            readMinutes: readMinutes,
            metaTitle: article.title,
            metaDescription: stripHtml(article.description),
          },
        });

        successCount++;
        console.log(`  ✓ [${successCount}/${articles.length}] ${article.title}`);
      } catch (error) {
        errorCount++;
        console.error(`  ✗ Failed to migrate article ID ${article.id}:`, error);
      }
    }

    console.log('\n📊 Migration Summary:');
    console.log(`  ✅ Successfully migrated: ${successCount} articles`);
    console.log(`  ❌ Failed: ${errorCount} articles`);
    
    const totalPosts = await db.post.count({
      where: { type: PostType.ARTICLE }
    });
    const totalCategories = await db.category.count();
    
    console.log(`\n📰 Final Database State:`);
    console.log(`  - Total articles: ${totalPosts}`);
    console.log(`  - Total categories: ${totalCategories}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

migrateArticles()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });