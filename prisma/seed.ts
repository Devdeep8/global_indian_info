import { PrismaClient } from '@prisma/client';
import { UserRole, PostType, PostStatus, PostVisibility, MagazineStatus, MediaType, CommentStatus } from '@prisma/client';
import { read } from 'fs';

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const admin = await prisma.user.create({
    data: {
      id: 'user_admin_01',
      name: 'Admin User',
      email: 'admin@example.com',
      role: UserRole.ADMIN,
      bio: 'System administrator with full access',
      avatarUrl: 'https://example.com/avatars/admin.jpg',
      socialLinks: JSON.stringify({
        twitter: 'https://twitter.com/admin',
        linkedin: 'https://linkedin.com/in/admin'
      })
    }
  });

  const editor = await prisma.user.create({
    data: {
      id: 'user_editor_01',
      name: 'Editor User',
      email: 'editor@example.com',
      role: UserRole.EDITOR,
      bio: 'Content editor responsible for reviewing and publishing articles',
      avatarUrl: 'https://example.com/avatars/editor.jpg'
    }
  });

  const writer1 = await prisma.user.create({
    data: {
      id: 'user_writer_01',
      name: 'John Writer',
      email: 'john@example.com',
      role: UserRole.WRITER,
      bio: 'Political correspondent with 10 years of experience',
      avatarUrl: 'https://example.com/avatars/john.jpg'
    }
  });

  const writer2 = await prisma.user.create({
    data: {
      id: 'user_writer_02',
      name: 'Sarah Writer',
      email: 'sarah@example.com',
      role: UserRole.WRITER,
      bio: 'Technology journalist specializing in AI and startups',
      avatarUrl: 'https://example.com/avatars/sarah.jpg'
    }
  });

  const writer3 = await prisma.user.create({
    data: {
      id: 'user_writer_03',
      name: 'Mike Writer',
      email: 'mike@example.com',
      role: UserRole.WRITER,
      bio: 'Sports journalist covering football and basketball',
      avatarUrl: 'https://example.com/avatars/mike.jpg'
    }
  });

  const reader = await prisma.user.findFirst({
  })

  if (!reader) return undefined

  //Create Categories
  const allNewsCategory = await prisma.category.create({
    data: {
      id: 'category_all_news',
      name: 'All News',
      slug: 'all-news'
    }
  });

  const politicsCategory = await prisma.category.create({
    data: {
      id: 'category_politics',
      name: 'Politics',
      slug: 'politics',
      parentId: allNewsCategory.id
    }
  });

  const technologyCategory = await prisma.category.create({
    data: {
      id: 'category_technology',
      name: 'Technology',
      slug: 'technology',
      parentId: allNewsCategory.id
    }
  });

  const sportsCategory = await prisma.category.create({
    data: {
      id: 'category_sports',
      name: 'Sports',
      slug: 'sports',
      parentId: allNewsCategory.id
    }
  });

  const businessCategory = await prisma.category.create({
    data: {
      id: 'category_business',
      name: 'Business',
      slug: 'business',
      parentId: allNewsCategory.id
    }
  });

  const entertainmentCategory = await prisma.category.create({
    data: {
      id: 'category_entertainment',
      name: 'Entertainment',
      slug: 'entertainment',
      parentId: allNewsCategory.id
    }
  });

  const scienceCategory = await prisma.category.create({
    data: {
      id: 'category_science',
      name: 'Science',
      slug: 'science',
      parentId: allNewsCategory.id
    }
  });

  const environmentCategory = await prisma.category.create({
    data: {
      id: 'category_environment',
      name: 'Environment',
      slug: 'environment',
      parentId: allNewsCategory.id
    }
  });

  const cultureCategory = await prisma.category.create({
    data: {
      id: 'category_culture',
      name: 'Culture',
      slug: 'culture',
      parentId: allNewsCategory.id
    }
  });

  // Create Tags
  const electionTag = await prisma.tag.create({
    data: {
      id: 'tag_election',
      name: 'Election',
      slug: 'election'
    }
  });

  const governmentTag = await prisma.tag.create({
    data: {
      id: 'tag_government',
      name: 'Government',
      slug: 'government'
    }
  });

  const aiTag = await prisma.tag.create({
    data: {
      id: 'tag_ai',
      name: 'AI',
      slug: 'ai'
    }
  });

  const startupTag = await prisma.tag.create({
    data: {
      id: 'tag_startup',
      name: 'Startup',
      slug: 'startup'
    }
  });

  const footballTag = await prisma.tag.create({
    data: {
      id: 'tag_football',
      name: 'Football',
      slug: 'football'
    }
  });

  const economyTag = await prisma.tag.create({
    data: {
      id: 'tag_economy',
      name: 'Economy',
      slug: 'economy'
    }
  });

  const movieTag = await prisma.tag.create({
    data: {
      id: 'tag_movie',
      name: 'Movie',
      slug: 'movie'
    }
  });

  const researchTag = await prisma.tag.create({
    data: {
      id: 'tag_research',
      name: 'Research',
      slug: 'research'
    }
  });

  const climateTag = await prisma.tag.create({
    data: {
      id: 'tag_climate',
      name: 'Climate',
      slug: 'climate'
    }
  });

  const artTag = await prisma.tag.create({
    data: {
      id: 'tag_art',
      name: 'Art',
      slug: 'art'
    }
  });

  // Create Media
  const politicsMedia1 = await prisma.media.create({
    data: {
      id: 'media_politics_01',
      url: 'https://example.com/media/politics-rally.jpg',
      altText: 'Political rally',
      caption: 'Supporters at a political rally',
      type: MediaType.IMAGE,
      uploadedById: writer1.id
    }
  });

  const politicsMedia2 = await prisma.media.create({
    data: {
      id: 'media_politics_02',
      url: 'https://example.com/media/government-building.jpg',
      altText: 'Government building',
      caption: 'The national government building',
      type: MediaType.IMAGE,
      uploadedById: writer1.id
    }
  });

  const techMedia = await prisma.media.create({
    data: {
      id: 'media_tech_01',
      url: 'https://example.com/media/ai-robot.jpg',
      altText: 'AI robot',
      caption: 'Advanced AI robot at technology conference',
      type: MediaType.IMAGE,
      uploadedById: writer2.id
    }
  });

  const sportsMedia = await prisma.media.create({
    data: {
      id: 'media_sports_01',
      url: 'https://example.com/media/football-match.jpg',
      altText: 'Football match',
      caption: 'Players in action during a football match',
      type: MediaType.IMAGE,
      uploadedById: writer3.id
    }
  });

  const businessMedia1 = await prisma.media.create({
    data: {
      id: 'media_business_01',
      url: 'https://example.com/media/stock-market.jpg',
      altText: 'Stock market',
      caption: 'Stock market trading floor',
      type: MediaType.IMAGE,
      uploadedById: writer2.id
    }
  });

  const businessMedia2 = await prisma.media.create({
    data: {
      id: 'media_business_02',
      url: 'https://example.com/media/business-meeting.jpg',
      altText: 'Business meeting',
      caption: 'Executives in a business meeting',
      type: MediaType.IMAGE,
      uploadedById: writer2.id
    }
  });

  const entertainmentMedia = await prisma.media.create({
    data: {
      id: 'media_entertainment_01',
      url: 'https://example.com/media/movie-premiere.jpg',
      altText: 'Movie premiere',
      caption: 'Celebrities at a movie premiere',
      type: MediaType.IMAGE,
      uploadedById: writer1.id
    }
  });

  const scienceMedia = await prisma.media.create({
    data: {
      id: 'media_science_01',
      url: 'https://example.com/media/science-lab.jpg',
      altText: 'Science laboratory',
      caption: 'Scientists working in a laboratory',
      type: MediaType.IMAGE,
      uploadedById: writer2.id
    }
  });

  const environmentMedia = await prisma.media.create({
    data: {
      id: 'media_environment_01',
      url: 'https://example.com/media/forest-conservation.jpg',
      altText: 'Forest conservation',
      caption: 'Conservation efforts in a protected forest',
      type: MediaType.IMAGE,
      uploadedById: writer3.id
    }
  });

  const cultureMedia = await prisma.media.create({
    data: {
      id: 'media_culture_01',
      url: 'https://example.com/media/art-exhibition.jpg',
      altText: 'Art exhibition',
      caption: 'Visitors at an art exhibition',
      type: MediaType.IMAGE,
      uploadedById: writer1.id
    }
  });

  // Create Politics Articles
  const politicsArticle1 = await prisma.post.create({
    data: {
      id: 'post_politics_01',
      title: 'National Election Results Announced',
      slug: 'national-election-results-announced',
      excerpt: 'The final results of the national election have been announced, with a surprising turnout.',
      content: `# National Election Results Announced

The national election concluded yesterday with record voter turnout across the country. The Electoral Commission announced the final results this morning, confirming a win for the incumbent party by a narrow margin.

## Record Turnout

Voter participation reached 78%, the highest in decades. Election officials attributed this to extensive get-out-the-vote campaigns and increased accessibility to polling stations.

"We've never seen such engagement in our democratic process," said Electoral Commission chairperson Jane Smith. "Citizens showed they care about the future of our country."

## Key Results

- Incumbent Party: 45% of votes
- Opposition Coalition: 42% of votes
- Third Party: 8% of votes
- Independent Candidates: 5% of votes

The incumbent party secured 220 seats in the 400-seat parliament, just shy of an outright majority. They will likely form a coalition with smaller parties to govern.

## International Reaction

International observers praised the peaceful and transparent nature of the election. The United Nations issued a statement congratulating the country on "a well-conducted electoral process that reflects the will of the people."

## What's Next

The new government is expected to be sworn in within two weeks. The first session of parliament will address pressing economic issues and the proposed healthcare reform bill.

Political analysts predict a challenging term ahead, with the narrow mandate requiring careful negotiation and compromise on key policies.`,
      type: PostType.ARTICLE,
      coverImageUrl: politicsMedia1.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-15'),
      authorId: writer1.id,
      categoryId: politicsCategory.id,
      views: 5420,
      likes: 210,
      metaTitle: 'National Election Results Announced - Live Updates',
      metaDescription: 'The final results of the national election have been announced, with a surprising turnout and narrow victory margin.',
      metaKeywords: 'election, politics, results, government'
    }
  });

  const politicsArticle2 = await prisma.post.create({
    data: {
      id: 'post_politics_02',
      title: 'New Healthcare Reform Bill Passed',
      slug: 'new-healthcare-reform-bill-passed',
      excerpt: 'Parliament has passed the controversial healthcare reform bill after months of debate.',
      content: `# New Healthcare Reform Bill Passed

After months of intense debate and negotiation, parliament has passed the landmark healthcare reform bill. The legislation promises to expand access to healthcare while controlling costs.

## Key Provisions

The new healthcare reform bill includes several significant changes:

1. **Universal Coverage**: All citizens will be required to have health insurance, with subsidies for low-income families.
2. **Cost Controls**: New measures to limit prescription drug prices and hospital billing practices.
3. **Preventive Care**: Expanded coverage for preventive services without co-pays.
4. **Mental Health**: Parity between mental and physical health coverage.

## Reactions

The bill passed with a narrow margin of 210-190, with most opposition members voting against it.

Prime Minister John Doe celebrated the passage: "This is a historic day for our country. No longer will families face bankruptcy due to medical bills. We've ensured that healthcare is a right, not a privilege."

However, Opposition Leader Jane Smith criticized the bill: "While we agree reform is needed, this legislation places too much burden on taxpayers and doesn't address the root causes of rising healthcare costs."

## Implementation Timeline

The healthcare reform will be implemented in phases:

- **January 2024**: Insurance marketplaces open for enrollment
- **July 2024**: Preventive care coverage expansion
- **January 2025**: Full implementation of all provisions

## Economic Impact

Economists predict both short-term costs and long-term savings:

- Short-term: Increased government spending to fund subsidies
- Long-term: Reduced emergency room visits and better health outcomes

The Treasury Department estimates the reform will cost $50 billion annually but will save $30 billion through preventive care and efficiency improvements.

## Next Steps

The President is expected to sign the bill into law next week. Government agencies will then begin the complex process of implementing the new regulations and systems.

Healthcare providers are already preparing for changes, with many starting to update their billing systems and patient communication strategies.`,
      type: PostType.ARTICLE,
      coverImageUrl: politicsMedia2.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-10'),
      authorId: writer1.id,
      categoryId: politicsCategory.id,
      views: 3870,
      likes: 156,
      metaTitle: 'New Healthcare Reform Bill Passed - What You Need to Know',
      metaDescription: 'Parliament has passed the controversial healthcare reform bill after months of debate. Here\'s what it means for you.',
      metaKeywords: 'healthcare, reform, bill, parliament, government'
    }
  });

  // Create Technology Article
  const techArticle = await prisma.post.create({
    data: {
      id: 'post_tech_01',
      title: 'Breakthrough in Quantum Computing Announced',
      slug: 'breakthrough-in-quantum-computing-announced',
      excerpt: 'Scientists achieve quantum supremacy with a new 256-qubit processor.',
      content: `# Breakthrough in Quantum Computing Announced

Scientists at QuantumTech Labs have announced a major breakthrough in quantum computing, achieving quantum supremacy with their new 256-qubit processor. This development marks a significant step toward practical quantum computers.

## Quantum Supremacy Achieved

The new quantum processor successfully performed a calculation in 200 seconds that would take the world's most powerful supercomputer 10,000 years to complete. This milestone, known as quantum supremacy, demonstrates the potential of quantum computers to solve problems beyond the reach of classical computers.

"This is the most significant advance in quantum computing in the last decade," said Dr. Jane Smith, lead researcher at QuantumTech Labs. "We've proven that quantum computers can outperform classical computers for specific tasks."

## Technical Details

The breakthrough was achieved through several innovations:

- **Qubit Stability**: New error correction techniques reduced qubit decoherence by 90%
- **Scalability**: Novel architecture allowed for precise control of 256 qubits
- **Connectivity**: All-to-all qubit connectivity enabled more complex algorithms

## Practical Applications

While quantum computers won't replace your laptop anytime soon, this breakthrough brings practical applications closer:

1. **Drug Discovery**: Simulating molecular interactions for new pharmaceuticals
2. **Climate Modeling**: Creating more accurate climate prediction models
3. **Financial Modeling**: Optimizing investment strategies and risk analysis
4. **Cryptography**: Breaking and creating new encryption methods

## Industry Reaction

Tech giants are already investing heavily in quantum computing:

- GlobalTech announced a $1 billion quantum computing research center
- DataCorp partnered with QuantumTech Labs to develop quantum algorithms
- CloudNow launched a quantum computing service for researchers

## Challenges Ahead

Despite this breakthrough, significant challenges remain:

- **Error Correction**: Quantum systems are still prone to errors
- **Scalability**: Moving from 256 qubits to thousands of qubits
- **Algorithm Development**: Creating new algorithms for quantum advantage

## Timeline for Practical Quantum Computers

Experts predict:

- **2025**: 1,000-qubit processors for specialized applications
- **2030**: Quantum advantage for real-world problems
- **2035**: General-purpose quantum computers

## Conclusion

This breakthrough represents a major step forward in quantum computing. While practical quantum computers are still years away, the pace of advancement is accelerating. The next decade promises to bring transformative changes to computing and problem-solving.`,
      type: PostType.ARTICLE,
      coverImageUrl: techMedia.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-12'),
      authorId: writer2.id,
      categoryId: technologyCategory.id,
      views: 6210,
      likes: 312,
      metaTitle: 'Breakthrough in Quantum Computing Announced - 256-Qubit Processor',
      metaDescription: 'Scientists achieve quantum supremacy with a new 256-qubit processor, marking a major milestone in quantum computing.',
      metaKeywords: 'quantum computing, technology, breakthrough, science, research'
    }
  });

  // Create Sports Article
  const sportsArticle = await prisma.post.create({
    data: {
      id: 'post_sports_01',
      title: 'National Team Wins World Cup Final',
      slug: 'national-team-wins-world-cup-final',
      excerpt: 'In a thrilling match, the national football team defeated favorites 3-2 to win their first World Cup.',
      content: `# National Team Wins World Cup Final

In a stunning upset, the national football team defeated tournament favorites 3-2 in the World Cup final, claiming their first-ever World Cup title. The thrilling match kept fans on the edge of their seats until the final whistle.

## Match Highlights

The final match was a back-and-forth affair with both teams displaying exceptional skill:

- **15th minute**: National team takes early lead with a brilliant header by striker John Smith
- **32nd minute**: Favorites equalize with a controversial penalty kick
- **58th minute**: Favorites take lead with a spectacular long-range shot
- **72nd minute**: National team equalizes with a well-worked team goal
- **89th minute**: National team scores dramatic winner in final minute of regulation

## Player of the Tournament

Midfielder Sarah Johnson was named Player of the Tournament after an outstanding performance throughout the competition. She scored 5 goals and provided 7 assists, including the assist for the winning goal in the final.

"This is a dream come true," Johnson said after the match. "We've worked so hard for this moment, and to deliver for our country is the greatest feeling."

## Coach's Strategy

Coach Michael Williams' tactical approach was widely praised:

- **High Press**: Constant pressure on opponents' defense
- **Quick Transitions**: Rapid movement from defense to attack
- **Set Pieces**: Innovative set-piece routines that resulted in two goals

"We knew we had to play to our strengths," Williams explained. "Our players showed incredible determination and skill throughout the tournament."

## Road to the Final

The national team's journey to the title was impressive:

- **Group Stage**: 3 wins, 0 losses, 1 draw
- **Round of 16**: Defeated defending champions 2-1
- **Quarter-Finals**: Won 3-0 against regional rivals
- **Semi-Finals**: Narrow 1-0 victory over tournament favorites

## Homecoming Celebrations

The team returned home to massive celebrations:

- **National Parade**: Over 2 million people lined the streets for the victory parade
- **Official Reception**: Honored by the President at a special ceremony
- **Financial Rewards**: Each player received $500,000 from the football federation
- **Monument**: Plans announced for a monument to commemorate the victory

## Economic Impact

The World Cup victory is expected to have significant economic benefits:

- **Tourism Boost**: Projected 20% increase in tourism next year
- **Merchandise Sales**: Over $100 million in merchandise sold in the past week
- **Infrastructure**: New sports facilities planned across the country

## Next Steps

With the victory, attention now turns to the future:

- **Coach's Contract**: Williams is expected to sign a new 4-year contract
- **Player Development**: Plans to expand youth football programs
- **Hosting Rights**: Bid to host the next World Cup gaining momentum

## Conclusion

The national team's World Cup victory marks a new era for football in the country. The team's skill, determination, and teamwork have inspired a nation and secured their place in history.`,
      type: PostType.ARTICLE,
      coverImageUrl: sportsMedia.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-08'),
      authorId: writer3.id,
      categoryId: sportsCategory.id,
      views: 8750,
      likes: 523,
      metaTitle: 'National Team Wins World Cup Final - Historic Victory',
      metaDescription: 'In a thrilling match, the national football team defeated favorites 3-2 to win their first World Cup in history.',
      metaKeywords: 'football, world cup, sports, national team, victory'
    }
  });

  // Create Business Articles
  const businessArticle1 = await prisma.post.create({
    data: {
      id: 'post_business_01',
      title: 'Stock Market Reaches All-Time High',
      slug: 'stock-market-reaches-all-time-high',
      excerpt: 'The national stock market index closed at a record high, driven by tech stocks and economic optimism.',
      content: `# Stock Market Reaches All-Time High

The national stock market index closed at a record high today, surpassing the previous peak set before the pandemic. The surge was driven by strong performances in the technology sector and growing optimism about the economic recovery.

## Market Performance

The benchmark index closed at 15,820 points, up 2.3% for the day and 18% for the year. This marks the first time the index has closed above 15,000 points.

Technology stocks led the rally, with the tech sector index gaining 3.5%. Other strong performers included:

- **Financial Services**: Up 2.8%
- **Healthcare**: Up 2.1%
- **Consumer Goods**: Up 1.9%
- **Energy**: Up 1.7%

## Driving Factors

Analysts cite several factors behind the market surge:

1. **Strong Economic Data**: Recent GDP growth of 5.2% exceeded expectations
2. **Tech Innovation**: Breakthroughs in AI and quantum computing boosting tech stocks
3. **Global Stability**: Reduced geopolitical tensions boosting investor confidence
4. **Corporate Earnings**: Q3 earnings up 12% year-over-year

"The market is reflecting confidence in the economic recovery and future growth prospects," said economist Jane Smith. "Investors are particularly excited about the technology sector's potential."

## Notable Gainers

Several companies saw significant stock price increases:

- **QuantumTech**: Up 15% after announcing quantum computing breakthrough
- **GlobalBank**: Up 8% on better-than-expected earnings
- **RetailGiant**: Up 7% on strong holiday sales forecast
- **EnergyCorp**: Up 6% on rising oil prices

## Market Outlook

Despite the record high, analysts remain cautiously optimistic:

- **Short-term**: Continued growth expected through year-end
- **Mid-term**: Potential correction if interest rates rise
- **Long-term**: Solid growth projected based on economic fundamentals

"We're in a bull market, but investors should remain diversified," advised financial advisor John Doe. "Markets don't go up forever, and corrections are normal."

## Impact on Investors

The market surge has created significant wealth for investors:

- **Retirement Accounts**: Average 401(k) balance up 22% year-to-date
- **IPO Market**: 45 new companies went public this year, raising $15 billion
- **Venture Capital**: $30 billion invested in startups, a 25% increase

## Risks and Challenges

Despite the positive momentum, several risks remain:

- **Inflation**: Rising prices could lead to interest rate hikes
- **Geopolitical Tensions**: Ongoing conflicts could disrupt global trade
- **Market Valuation**: Some stocks appear overvalued relative to earnings

## Conclusion

The stock market's record high reflects growing confidence in the economy and corporate performance. While the outlook remains positive, investors should be mindful of potential risks and maintain a balanced portfolio.`,
      type: PostType.ARTICLE,
      coverImageUrl: businessMedia1.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-05'),
      authorId: writer2.id,
      categoryId: businessCategory.id,
      views: 4320,
      likes: 187,
      metaTitle: 'Stock Market Reaches All-Time High - Tech Stocks Lead Rally',
      metaDescription: 'The national stock market index closed at a record high, driven by tech stocks and economic optimism.',
      metaKeywords: 'stock market, economy, finance, investment, business'
    }
  });

  const businessArticle2 = await prisma.post.create({
    data: {
      id: 'post_business_02',
      title: 'Major Merger Announced in Tech Sector',
      slug: 'major-merger-announced-in-tech-sector',
      excerpt: 'Two leading tech companies have announced a $50 billion merger, creating a new industry giant.',
      content: `# Major Merger Announced in Tech Sector

In a move that will reshape the technology landscape, DataCorp and CloudNow have announced a $50 billion merger. The combined company will create a new powerhouse in cloud computing and artificial intelligence.

## Merger Details

The all-stock deal values DataCorp at $30 billion and CloudNow at $20 billion. Under the terms:

- DataCorp shareholders will receive 1.2 shares of the combined company for each DataCorp share
- CloudNow shareholders will receive 0.8 shares of the combined company for each CloudNow share
- The combined company will be called DataCloud Corp

The merger is expected to close in the first quarter of next year, subject to regulatory approval.

## Strategic Rationale

Both companies emphasized the strategic benefits of the merger:

1. **Complementary Technologies**: DataCorp's AI capabilities combined with CloudNow's cloud infrastructure
2. **Market Expansion**: Access to new markets and customer segments
3. **Cost Synergies**: Estimated $1 billion in annual cost savings
4. **Innovation Acceleration**: Combined R&D capabilities to drive faster innovation

"This merger creates a technology leader with the scale and capabilities to compete globally," said DataCorp CEO John Smith. "Together, we can accelerate innovation and deliver greater value to customers."

## Industry Impact

The merger will have significant implications for the tech sector:

- **Competitive Landscape**: Creates a formidable competitor to established tech giants
- **Market Consolidation**: Could trigger further consolidation in the sector
- **Innovation**: Combined R&D budget of $5 billion could accelerate breakthroughs
- **Job Market**: Potential for 2,000 job cuts due to overlapping functions

## Customer Impact

The companies promised benefits for customers:

- **Integrated Solutions**: Seamless integration of cloud and AI services
- **Enhanced Security**: Combined security expertise to better protect customer data
- **Better Pricing**: Cost savings passed on to customers
- **Global Reach**: Expanded presence in emerging markets

## Regulatory Scrutiny

The merger will face intense regulatory review:

- **Antitrust Concerns**: Potential dominance in cloud computing and AI markets
- **Data Privacy**: Handling of customer data across platforms
- **National Security**: Review of foreign ownership and access to sensitive technology

Both companies expressed confidence in securing regulatory approval, citing the complementary nature of their businesses.

## Financial Impact

Financial analysts reacted positively to the announcement:

- DataCorp stock rose 12% on the news
- CloudNow stock rose 15% on the news
- Competitor stocks fell 3-5% on increased competition concerns

The combined company is projected to have $25 billion in annual revenue and $4 billion in operating profit.

## Leadership Structure

The new company will have a unified leadership team:

- **CEO**: John Smith, current DataCorp CEO
- **President**: Jane Doe, current CloudNow CEO
- **CFO**: Michael Johnson, current DataCorp CFO
- **CTO**: Sarah Williams, current CloudNow CTO

## Timeline and Next Steps

The merger process will unfold over the next several months:

- **October-November 2023**: Regulatory filings and reviews
- **December 2023**: Shareholder votes
- **January 2024**: Regulatory approvals expected
- **February 2024**: Merger completion and integration begins

## Conclusion

The DataCorp-CloudNow merger represents a significant development in the tech sector. The combined company will have the scale, technology, and resources to compete globally and drive innovation in cloud computing and AI. While regulatory approval remains a hurdle, the strategic rationale and potential benefits make this a transformative deal for the industry.`,
      type: PostType.ARTICLE,
      coverImageUrl: businessMedia2.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-03'),
      authorId: writer2.id,
      categoryId: businessCategory.id,
      views: 5180,
      likes: 234,
      metaTitle: 'Major Merger Announced in Tech Sector - $50 Billion Deal',
      metaDescription: 'Two leading tech companies have announced a $50 billion merger, creating a new industry giant in cloud computing and AI.',
      metaKeywords: 'merger, tech, business, acquisition, datacorp, cloudnow'
    }
  });

  // Create Entertainment Article
  const entertainmentArticle = await prisma.post.create({
    data: {
      id: 'post_entertainment_01',
      title: 'Blockbuster Movie Breaks Box Office Records',
      slug: 'blockbuster-movie-breaks-box-office-records',
      excerpt: 'The new superhero movie has shattered opening weekend records with $500 million in ticket sales.',
      content: `# Blockbuster Movie Breaks Box Office Records

The highly anticipated superhero movie "Galaxy Warriors" has shattered box office records with $500 million in global ticket sales during its opening weekend. The film has already become the highest-grossing movie of the year.

## Record-Breaking Numbers

"Galaxy Warriors" exceeded all expectations with its opening weekend performance:

- **Domestic**: $250 million (highest opening weekend ever)
- **International**: $250 million
- **IMAX**: $50 million (highest IMAX opening ever)
- **Premium Formats**: $100 million (highest premium format opening)

The film surpassed the previous record holder by $100 million and is on track to become one of the highest-grossing films of all time.

## Critical Reception

Critics and audiences alike have praised the film:

- **Rotten Tomatoes**: 92% critic score, 95% audience score
- **Metacritic**: 85/100
- **IMDb**: 8.7/10

"Galaxy Warriors is a triumph of blockbuster filmmaking," said renowned film critic Jane Smith. "It delivers spectacular action, emotional depth, and stunning visuals that set a new standard for the genre."

## Audience Reaction

Audiences have been flocking to theaters to see the film:

- **Theater Occupancy**: 95% average occupancy rate
- **Repeat Viewings**: 30% of tickets sold were for repeat viewings
- **Social Media**: 5 million mentions in the first weekend
- **Merchandise**: $100 million in merchandise sold in the first week

## Success Factors

Several factors contributed to the film's record-breaking success:

1. **Brand Power**: Built on a beloved franchise with a dedicated fanbase
2. **Marketing Campaign**: $200 million marketing budget with innovative promotions
3. **Star Power**: A-list cast including international stars
4. **Timing**: Released during a holiday weekend with no major competition
5. **Reviews**: Strong critical reviews boosting audience confidence

## Economic Impact

The film's success has had significant economic benefits:

- **Theater Revenue**: Theaters reporting 40% increase in concession sales
- **Tourism**: Cities with premieres seeing 20% increase in tourism
- **Employment**: 10,000 temporary jobs created for promotions
- **Tax Revenue**: Estimated $50 million in tax revenue generated

## Sequel Announced

Buoyed by the film's success, the studio immediately announced a sequel:

- **Release Date**: Scheduled for summer 2025
- **Budget**: Increased to $350 million
- **Director**: Same director returning with a pay increase to $20 million
- **Cast**: All main cast members signed for the sequel

## Streaming Strategy

Despite its theatrical success, the studio has announced a streaming strategy:

- **Premium VOD**: Available for premium rental after 45 days
- **Streaming Service**: Exclusive to the studio's streaming service after 90 days
- **International Markets**: Different release windows for different regions

## Cultural Impact

The film has already made a significant cultural impact:

- **Fashion**: Character costumes and styles inspiring fashion trends
- **Language**: Catchphrases from the movie entering popular culture
- **Tourism**: Filming locations seeing increased tourism
- **Charity**: Cast donating $10 million to charity based on film's success

## Conclusion

"Galaxy Warriors" has set a new benchmark for blockbuster success. Its record-breaking opening weekend demonstrates the enduring appeal of theatrical experiences and the power of well-executed franchise films. As the film continues its theatrical run and prepares for its sequel, it will likely remain a dominant force in popular culture for years to come.`,
      type: PostType.ARTICLE,
      coverImageUrl: entertainmentMedia.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-07'),
      authorId: writer1.id,
      categoryId: entertainmentCategory.id,
      views: 7650,
      likes: 421,
      metaTitle: 'Blockbuster Movie Breaks Box Office Records - $500 Million Opening',
      metaDescription: 'The new superhero movie has shattered opening weekend records with $500 million in ticket sales worldwide.',
      metaKeywords: 'movie, box office, entertainment, blockbuster, galaxy warriors'
    }
  });

  // Create Science Article
  const scienceArticle = await prisma.post.create({
    data: {
      id: 'post_science_01',
      title: 'New Species Discovered in Deep Ocean',
      slug: 'new-species-discovered-in-deep-ocean',
      excerpt: 'Marine biologists have discovered a new species of bioluminescent fish in the deep ocean.',
      content: `# New Species Discovered in Deep Ocean

Marine biologists from the Ocean Research Institute have discovered a new species of bioluminescent fish living at depths of 3,000 meters in the Pacific Ocean. The discovery sheds new light on the biodiversity of the deep sea.

## Discovery Details

The new species, named "Abyssalus luminosus," was found during a deep-sea expedition using a remotely operated vehicle (ROV). Key characteristics include:

- **Size**: Approximately 20 centimeters in length
- **Color**: Dark blue-black body with bright blue bioluminescent patches
- **Features**: Large eyes adapted to low light, elongated dorsal fin
- **Habitat**: Depths between 2,800-3,200 meters

"This is an extraordinary discovery that highlights how little we know about the deep ocean," said lead researcher Dr. Jane Smith. "The bioluminescence patterns are unlike anything we've seen before."

## Bioluminescence

The fish exhibits unique bioluminescent properties:

- **Pattern**: Distive pattern of blue light patches along its body
- **Function**: Believed to be used for communication and attracting prey
- **Mechanism**: Specialized light-producing organs called photophores
- **Control**: Ability to control the intensity and duration of light emission

The research team believes the bioluminescence plays a crucial role in the fish's survival in the extreme deep-sea environment.

## Research Methods

The discovery was made using advanced research techniques:

- **ROV Exploration**: High-definition cameras captured the fish in its natural habitat
- **DNA Analysis**: Genetic sequencing confirmed it as a new species
- **3D Modeling**: Created detailed models of the fish's anatomy
- **Behavioral Observation**: Documented feeding and movement patterns

## Ecosystem Importance

The discovery has significant implications for understanding deep-sea ecosystems:

- **Food Web**: The fish appears to be a mid-level predator
- **Biodiversity**: Adds to the known biodiversity of deep-sea environments
- **Adaptation**: Demonstrates unique adaptations to extreme conditions
- **Conservation**: Highlights the need to protect deep-sea habitats

## Climate Change Implications

The research team is studying how climate change might affect this newly discovered species:

- **Ocean Acidification**: Potential impact on bioluminescent mechanisms
- **Temperature Changes**: How warming oceans might affect deep-sea habitats
- **Oxygen Levels**: Impact of changing oxygen levels on deep-sea life
- **Food Supply**: Potential disruption to deep-sea food chains

## Technological Applications

The bioluminescent properties of the fish could have technological applications:

- **Medical Imaging**: New techniques for biological imaging
- **Lighting**: Energy-efficient lighting technologies
- **Sensors**: Novel types of optical sensors
- **Materials**: New materials based on the fish's light-producing mechanisms

## Future Research

The research team plans further studies:

- **Population Assessment**: Estimate the size and distribution of the population
- **Life Cycle**: Study reproduction and development stages
- **Genetic Analysis**: Further genetic sequencing to understand evolutionary history
- **Habitat Mapping**: Detailed mapping of the species' habitat

## Public Engagement

The discovery has generated significant public interest:

- **Documentary**: Plans for a documentary about the deep-sea expedition
- **Museum Exhibit**: The fish will be featured in a new ocean exhibit
- **Educational Programs**: School programs about deep-sea exploration
- **Citizen Science**: Opportunities for public participation in data analysis

## Conclusion

The discovery of Abyssalus luminosus highlights the incredible biodiversity that remains undiscovered in our oceans. As we continue to explore the deep sea, we can expect to find more species that will expand our understanding of life on Earth and potentially provide insights for new technologies and medical advances.`,
      type: PostType.ARTICLE,
      coverImageUrl: scienceMedia.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-11'),
      authorId: writer2.id,
      categoryId: scienceCategory.id,
      views: 3980,
      likes: 267,
      metaTitle: 'New Species Discovered in Deep Ocean - Bioluminescent Fish',
      metaDescription: 'Marine biologists have discovered a new species of bioluminescent fish in the deep ocean, shedding light on deep-sea biodiversity.',
      metaKeywords: 'science, discovery, ocean, species, bioluminescence, marine biology'
    }
  });

  // Create Environment Article
  const environmentArticle = await prisma.post.create({
    data: {
      id: 'post_environment_01',
      title: 'Major Reforestation Initiative Launched',
      slug: 'major-reforestation-initiative-launched',
      excerpt: 'A new initiative aims to plant 10 million trees across the country to combat climate change.',
      content: `# Major Reforestation Initiative Launched

The government has launched an ambitious reforestation initiative aimed at planting 10 million trees across the country over the next five years. The program is part of a broader strategy to combat climate change and restore natural habitats.

## Initiative Overview

The "Green Future" reforestation initiative includes several key components:

- **Scale**: 10 million trees planted across all regions
- **Timeline**: Five-year implementation period
- **Budget**: $500 million allocated from the climate action fund
- **Partnerships**: Collaboration with local communities, businesses, and NGOs

"This is the largest reforestation effort in our country's history," said Environment Minister John Smith. "It represents our commitment to addressing climate change and restoring our natural environment."

## Climate Benefits

The initiative will have significant climate benefits:

- **Carbon Sequestration**: Estimated to sequester 2 million tons of CO2 annually
- **Temperature Regulation**: Trees provide cooling effects in urban areas
- **Biodiversity**: Restoration of habitats for wildlife
- **Water Cycle**: Improved water retention and reduced soil erosion

## Implementation Strategy

The initiative will be implemented through a phased approach:

### Phase 1: Planning (Year 1)
- Identify suitable planting sites
- Develop species selection guidelines
- Establish monitoring protocols
- Recruit and train planting teams

### Phase 2: Planting (Years 2-4)
- Large-scale tree planting activities
- Community engagement programs
- Educational initiatives in schools
- Corporate sponsorship programs

### Phase 3: Maintenance (Years 3-5)
- Ongoing care for newly planted trees
- Replacement of unsuccessful plantings
- Long-term monitoring of growth and survival
- Expansion into new areas

## Species Selection

The initiative will focus on native species adapted to local conditions:

- **Forests**: Native hardwoods and softwoods
- **Urban Areas**: Shade trees and ornamental species
- **Riparian Zones**: Trees that stabilize riverbanks
- **Coastal Areas**: Species adapted to sandy soils and salt spray

## Community Involvement

Community participation is central to the initiative's success:

- **Volunteer Programs**: Opportunities for citizens to participate in planting
- **Educational Workshops**: Training on tree care and environmental stewardship
- **School Programs**: Integration with school curricula
- **Indigenous Knowledge**: Incorporation of traditional ecological knowledge

## Economic Benefits

Beyond environmental benefits, the initiative will create economic opportunities:

- **Jobs**: 5,000 temporary jobs created for planting and maintenance
- **Tourism**: Enhanced natural areas attracting eco-tourism
- **Agriculture**: Improved conditions for farming through windbreaks and soil conservation
- **Property Values**: Increased property values in areas with new tree cover

## Monitoring and Evaluation

A comprehensive monitoring system will track the initiative's progress:

- **Survival Rates**: Regular assessment of tree survival and growth
- **Ecological Impact**: Monitoring of biodiversity and ecosystem health
- **Carbon Sequestration**: Measurement of carbon storage
- **Social Impact**: Assessment of community benefits and engagement

## Challenges and Solutions

The initiative faces several challenges:

- **Land Availability**: Competition with agriculture and development
  - *Solution*: Focus on marginal lands and degraded areas
- **Climate Conditions**: Drought and extreme weather affecting survival
  - *Solution*: Careful species selection and planting techniques
- **Funding**: Ensuring sustained financial support
  - *Solution*: Diversified funding sources including public-private partnerships
- **Long-term Maintenance**: Ensuring trees survive beyond initial planting
  - *Solution*: Community-based stewardship programs

## International Context

The initiative aligns with global reforestation efforts:

- **Bonn Challenge**: Commitment to restore 350 million hectares by 2030
- **UN Decade on Ecosystem Restoration**: 2021-2030 global initiative
- **Paris Agreement**: Contribution to national climate commitments
- **Biodiversity Convention**: Support for global biodiversity targets

## Conclusion

The "Green Future" reforestation initiative represents a significant commitment to environmental restoration and climate action. By planting 10 million trees, the country will enhance biodiversity, combat climate change, and create sustainable economic opportunities. The success of this initiative will depend on strong partnerships, community engagement, and long-term commitment to nurturing the newly planted forests.`,
      type: PostType.ARTICLE,
      coverImageUrl: environmentMedia.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-09'),
      authorId: writer3.id,
      categoryId: environmentCategory.id,
      views: 4210,
      likes: 198,
      metaTitle: 'Major Reforestation Initiative Launched - 10 Million Trees',
      metaDescription: 'A new initiative aims to plant 10 million trees across the country to combat climate change and restore natural habitats.',
      metaKeywords: 'environment, reforestation, climate change, trees, conservation'
    }
  });

  // Create Culture Article
  const cultureArticle = await prisma.post.create({
    data: {
      id: 'post_culture_01',
      title: 'National Museum Opens New Contemporary Art Wing',
      slug: 'national-museum-opens-new-contemporary-art-wing',
      excerpt: 'The National Museum has unveiled a new wing dedicated to contemporary art, featuring works by leading artists.',
      content: `# National Museum Opens New Contemporary Art Wing

The National Museum has unveiled its new Contemporary Art Wing, a $100 million expansion that showcases the work of leading contemporary artists from around the world. The new wing doubles the museum's exhibition space and establishes it as a major center for contemporary art.

## New Wing Features

The Contemporary Art Wing includes several notable features:

- **Size**: 50,000 square feet of exhibition space
- **Design**: Architecturally striking building with natural light galleries
- **Technology**: Interactive displays and digital art installations
- **Facilities**: Education center, conservation lab, and sculpture garden

"The new wing transforms our museum into a world-class destination for contemporary art," said Museum Director Jane Smith. "It provides a platform for artists to engage with the public in new and exciting ways."

## Inaugural Exhibition

The wing opens with a landmark exhibition titled "Contemporary Visions," featuring:

- **100 Artists**: Established and emerging artists from 30 countries
- **Diverse Media**: Painting, sculpture, photography, digital art, and installations
- **Thematic Galleries**: Organized around themes of identity, technology, and environment
- **Commissioned Works**: 10 new works created specifically for the opening

The exhibition provides a comprehensive overview of contemporary art practice today.

## Architectural Design

The new wing was designed by renowned architect John Doe:

- **Inspiration**: Drawn from local cultural traditions and modern aesthetics
- **Materials**: Combination of glass, steel, and local stone
- **Sustainability**: LEED Platinum certification with solar panels and rainwater harvesting
- **Flow**: Seamless connection with the original museum building

"The architecture creates a dialogue between the historic museum and the contemporary wing," said Doe. "It's a physical manifestation of the museum's mission to connect past and present."

## Education Programs

The new wing includes extensive education facilities:

- **Workshops**: Hands-on art-making experiences for all ages
- **Lectures**: Talks by artists, curators, and scholars
- **School Programs**: Curriculum-aligned activities for students
- **Community Outreach**: Programs designed for underserved communities

## Economic Impact

The new wing is expected to have significant economic benefits:

- **Tourism**: Projected 30% increase in museum visitors
- **Jobs**: 50 new positions created for the wing
- **Local Economy**: Estimated $20 million annual economic impact
- **Cultural Tourism**: Enhanced reputation as a cultural destination

## Acquisition Strategy

The museum has outlined its strategy for building the contemporary collection:

- **Focus**: Acquiring works by living artists, especially those from underrepresented groups
- **Funding**: $50 million acquisition budget over the next five years
- **Donations**: Seeking donations from collectors and artists
- **Partnerships**: Collaborations with galleries and other museums

## Digital Innovation

The new wing incorporates cutting-edge digital technology:

- **Virtual Reality**: VR experiences that complement physical exhibitions
- **Mobile App**: Interactive guides and augmented reality features
- **Online Collection**: Digital access to the museum's contemporary collection
- **Social Media**: Interactive installations designed for sharing

## Community Response

The community has enthusiastically embraced the new wing:

- **Membership**: Museum membership increased by 40% since the announcement
- **Volunteers**: 200 new volunteers recruited to support the wing
- **Media Coverage**: Extensive local and international media attention
- **Public Events**: Opening events attended by over 5,000 people

## Future Plans

The museum has announced plans for the future:

- **Traveling Exhibitions**: Touring exhibitions from the contemporary collection
- **Artist Residencies**: Program for artists to create work at the museum
- **Expansion**: Plans for additional gallery space in the next phase
- **International Partnerships**: Collaborations with museums worldwide

## Conclusion

The opening of the Contemporary Art Wing marks a new chapter for the National Museum. By providing a dedicated space for contemporary art, the museum is fostering a deeper appreciation of the art of our time and creating a vibrant cultural hub for the community. The wing's combination of innovative architecture, diverse programming, and commitment to education ensures it will be a valuable resource for generations to come.`,
      type: PostType.ARTICLE,
      coverImageUrl: cultureMedia.url,
      status: PostStatus.PUBLISHED,
      visibility: PostVisibility.PUBLIC,
      publishedAt: new Date('2023-10-13'),
      authorId: writer1.id,
      categoryId: cultureCategory.id,
      views: 3450,
      likes: 156,
      metaTitle: 'National Museum Opens New Contemporary Art Wing - $100 Million Expansion',
      metaDescription: 'The National Museum has unveiled a new wing dedicated to contemporary art, featuring works by leading artists.',
      metaKeywords: 'museum, art, culture, contemporary, exhibition'
    }
  });

  // Create Post-Tag relationships
  await prisma.postTags.create({
    data: {
      postId: politicsArticle1.id,
      tagId: electionTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: politicsArticle1.id,
      tagId: governmentTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: politicsArticle2.id,
      tagId: governmentTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: techArticle.id,
      tagId: aiTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: sportsArticle.id,
      tagId: footballTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: businessArticle1.id,
      tagId: economyTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: businessArticle2.id,
      tagId: startupTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: entertainmentArticle.id,
      tagId: movieTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: scienceArticle.id,
      tagId: researchTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: environmentArticle.id,
      tagId: climateTag.id
    }
  });

  await prisma.postTags.create({
    data: {
      postId: cultureArticle.id,
      tagId: artTag.id
    }
  });

  // Create Post-Media relationships
  await prisma.postMedia.create({
    data: {
      postId: politicsArticle1.id,
      mediaId: politicsMedia1.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: politicsArticle2.id,
      mediaId: politicsMedia2.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: techArticle.id,
      mediaId: techMedia.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: sportsArticle.id,
      mediaId: sportsMedia.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: businessArticle1.id,
      mediaId: businessMedia1.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: businessArticle2.id,
      mediaId: businessMedia2.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: entertainmentArticle.id,
      mediaId: entertainmentMedia.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: scienceArticle.id,
      mediaId: scienceMedia.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: environmentArticle.id,
      mediaId: environmentMedia.id
    }
  });

  await prisma.postMedia.create({
    data: {
      postId: cultureArticle.id,
      mediaId: cultureMedia.id
    }
  });

  // Create Comments for some articles
  await prisma.comment.create({
    data: {
      id: 'comment_politics_01',
      postId: politicsArticle1.id,
      authorId: reader.id,
      content: 'This election result is surprising! I didn\'t expect such a high turnout.',
      status: CommentStatus.APPROVED
    }
  });

  await prisma.comment.create({
    data: {
      id: 'comment_tech_01',
      postId: techArticle.id,
      authorId: admin.id,
      content: 'Quantum computing is fascinating! I wonder how this will impact cryptography.',
      status: CommentStatus.APPROVED
    }
  });

  await prisma.comment.create({
    data: {
      id: 'comment_sports_01',
      postId: sportsArticle.id,
      authorId: editor.id,
      content: 'What an incredible match! The national team played with so much heart.',
      status: CommentStatus.APPROVED
    }
  });

  await prisma.comment.create({
    data: {
      id: 'comment_business_01',
      postId: businessArticle1.id,
      content: 'The stock market has been on an incredible run. I wonder how long this will last.',
      status: CommentStatus.PENDING
    }
  });

  await prisma.comment.create({
    data: {
      id: 'comment_entertainment_01',
      postId: entertainmentArticle.id,
      authorId: writer1.id,
      content: 'I saw this movie last weekend and it was absolutely amazing! The special effects were incredible.',
      status: CommentStatus.APPROVED
    }
  });

  // Create View Logs for articles
  await prisma.viewLog.create({
    data: {
      id: 'viewlog_politics_01',
      postId: politicsArticle1.id,
      viewerIp: '192.168.1.10',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });

  await prisma.viewLog.create({
    data: {
      id: 'viewlog_tech_01',
      postId: techArticle.id,
      viewerIp: '192.168.1.11',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    }
  });

  await prisma.viewLog.create({
    data: {
      id: 'viewlog_sports_01',
      postId: sportsArticle.id,
      viewerIp: '192.168.1.12',
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'
    }
  });

  await prisma.viewLog.create({
    data: {
      id: 'viewlog_business_01',
      postId: businessArticle1.id,
      viewerIp: '192.168.1.13',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    }
  });

  await prisma.viewLog.create({
    data: {
      id: 'viewlog_entertainment_01',
      postId: entertainmentArticle.id,
      viewerIp: '192.168.1.14',
      userAgent: 'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/88.0'
    }
  });

  // Create Subscribers
  await prisma.subscriber.create({
    data: {
      id: 'subscriber_news_01',
      email: 'newslover@example.com',
      name: 'News Subscriber',
      verified: true
    }
  });

  await prisma.subscriber.create({
    data: {
      id: 'subscriber_news_02',
      email: 'politicsfan@example.com',
      name: 'Politics Fan',
      verified: true
    }
  });

  await prisma.subscriber.create({
    data: {
      id: 'subscriber_news_03',
      email: 'techenthusiast@example.com',
      name: 'Tech Enthusiast',
      verified: true
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });