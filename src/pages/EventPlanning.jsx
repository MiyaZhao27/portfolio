import DogOutlineGuide from "../components/DogOutlineGuide.jsx";
import EventCard from "../components/EventCard.jsx";

export default function EventPlanning() {
  // Event data for the gallery (sorted by date, latest first)
  const events = [
    // CASA Events (latest first)
    {
      id: "corky-lee-exhibition",
      title: "Corky Lee Exhibition",
      date: "March 2, 2025",
      club: "CASA EXEC",
      coverImage: `${import.meta.env.BASE_URL}[CL1].png`,
      preview: "A gallery exhibition honoring Chinese American activist roots through Corky Lee's photography.",
      description: "In honor of Pan-Asian Heritage Month, CASA hosted a gallery exhibition centered on Chinese American activist roots and the power of art as a medium for justice. The event featured a showcase of Corky Lee's photography, paired with a historical presentation exploring his work as a reaction to systemic oppression. To build cross-cultural solidarity, the gallery also displayed submissions from students across various campus organizations, providing a platform for artists to share their statements on modern-day activism and 'Just Futures.' The opening reception invited attendees to engage actively with his work generously rented by his estate and student submission with some nice refreshments. By documenting the evening with polaroids and hosting open discussions on student voices, the event bridged the gap between historical 'ancestors' and current campus activists.",
      images: ["[CL1].png", "[CL2].png", "[CL3].png", "[CL4].png", "[CL5].png"]
    },
    {
      id: "lunar-ball-2025",
      title: "2025 Lunar Ball",
      date: "February 28, 2025",
      club: "CASA EXEC",
      coverImage: `${import.meta.env.BASE_URL}[LB1].png`,
      preview: "The biggest event celebrating the Year of the Snake with Asian American organizations across Yale.",
      description: "The Lunar Ball is the biggest event of its kind for all the Asian American organizations at Yale University, and is jointly hosted by a number of Asian American affinity groups. For the year of the snake, CASA (Chinese American Student Association), CUSY (Chinese Undergraduates Students at Yale), TAS (Taiwanese Students at Yale), ARAY (Asian Recipes at Yale), Asianish, and KASY (Korean American Students at Yale) came together to host a formal to celebrate our shared cultural histories, traditions, and just have a little bit of fun to welcome in the new year.",
      images: ["[LB1].png", "[LB2].png", "[LB3].png", "[LB4].png", "[LB5].png"]
    },
    {
      id: "hot-pot-night-2024",
      title: "2024 Hot Pot Night",
      date: "December 7, 2024",
      club: "Co-Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}[HP1].jpeg`,
      preview: "A popup hot pot restaurant recreating the heartwarming atmosphere of a traditional Chinese family dinner.",
      description: "To celebrate the end of the semester, we created a popup hot pot restaurant designed to recreate the heartwarming atmosphere of a traditional Chinese family dinner. Following the last day of classes, students gathered around shared tables to enjoy a customized meal, choosing from a variety of soup bases and fresh ingredients (looooots of meat and noodles). The event emphasized the importance of communal dining customs, from the creative process of mixing personalized dipping sauces to the real-time experience of cooking together with friends and CASA families. For many, the night served as both a well-deserved reward for the year's hard work and a 'taste of home' during the holiday season. It really allowed people to slow down and just watch the soup boil.",
      images: ["[HP1].jpeg", "[HP2].png", "[HP3].png", "[HP4].png"]
    },
    {
      id: "singles-day-fair",
      title: "Singles Day Fair",
      date: "November 9, 2024",
      club: "Co-Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}[SD1].png`,
      preview: "A festival centered on self-empowerment featuring fortune telling, face painting, mahjong, and self-care goodie bags.",
      description: "To celebrate Singles' Day on 11/11, we transformed the AACC into a 'fair-like' festival centered on self-empowerment and community. Participants were greeted with eleven raffle tickets to strategically spend at various stations throughout the first floor. The event offered a mix of activities, from fortune telling and palm reading to face painting and mahjong, all while students enjoyed a variety of 'stick foods' like chicken and fruit skewers. Beyond the games, attendees could use their tickets to build self-care goodie bags, embracing the holiday's spirit of treating oneself. By blending the commercial fun of the Chinese shopping holiday with a supportive campus vibe, the event provided a much-needed pick-me-up during midterm season, allowing students to bond over snacks, strategy, and shared memories.",
      images: ["[SD1].png", "[SD2].png", "[SD3].png", "[SD4].png", "[SD5].png"]
    },
    {
      id: "mid-autumn-moonlight-mingle",
      title: "Mid-Autumn Moonlight Mingle",
      date: "September 17, 2024",
      club: "Co-Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}[MMM1].png`,
      preview: "A vibrant Moon Festival celebration bringing over 300 people together to share mooncakes under the brightest moon.",
      description: "To celebrate the Mid-Autumn Festival, CASA collaborated with TAS (Taiwanese American Society) and YASSS (Yale Astro and Space Student Society) to host a vibrant Moon Festival celebration that brought over 300 people to the AACC. In honor of familial traditions, students gathered to share mooncakes and hot tea under the brightest moon of the year. The event combined cultural heritage with interactive fun, featuring stations for crafting paper fortune tellers and writing letters to friends, while YASSS provided telescopes for a close-up look at the full moon. Even Yale Votes joined the festivities to help students register to vote, adding a layer of community engagement to the evening. By blending stargazing, traditional snacks, and modern outreach, the event served as a massive gathering point for students to find connection and celebrate the essence of the holiday together (over 300 servings of mooncake!).",
      images: ["[MMM1].png", "[MMM2].png", "[MMM3].png", "[MMM4].png", "[MMM5].png"]
    },
    {
      id: "cultural-show-2024",
      title: "2024 CASA Cultural Show",
      date: "April 21, 2024",
      club: "Co-Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Under the theme 'Wings of Harmony,' celebrating the vibrant bridge between Chinese and American cultures.",
      description: "Under the theme 'Wings of Harmony,' the Year of the Dragon Cultural Show brought the community together to celebrate the vibrant bridge between Chinese and American cultures. The event showcased the immense talent within our own community, featuring everything from disciplined Wushu martial arts and prodigy piano performances to comedy skits and traditional instrumental acts. Between the performances, the energy stayed high with interactive trivia and a heart-rate monitor challenge that turned the audience into active participants. Surrounded by great food and even better people we were proud to keep on the tradition of our annual cultural show.",
      images: ["cultshow1.png", "cultshow2.png", "cultshow4.png", "cultshow5.png", "cultshow6.png"]
    },
    {
      id: "baobaobao-pt2",
      title: "BaoBaoBao Pt2",
      date: "March 26, 2024",
      club: "Co-Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}[BBB1].png`,
      preview: "A self-care event combining fluffy buns (包子), custom self-care bags (包), and plenty of hugs (抱抱) with friends!",
      description: "As a little self-care event and a throwback to the first rendition, we turned the AACC into the home-y zone perfect for relaxation, self-care, games, and yapping. Everyone got to lean into the BaoBaoBao (抱包抱) vibes, combining fluffy buns (包子), custom self-care bags (包), and plenty of hugs (抱抱) with friends! From writing sweet note cards and packing gift bags with face masks and lotions to battling it out over video games, it was a necessary midterm break. It was so good to see everyone taking a second to appreciate their favorite baobaos (宝宝) and recharge with some good company and even better snacks!",
      images: ["[BBB1].png", "[BBB2].png", "[BBB3].png", "[BBB4].png", "[BBB5].png"]
    },
    {
      id: "yuanxiao-jie-2024",
      title: "YuanXiao Jie Celebration",
      date: "February 24, 2024",
      club: "Co-Cultural Chair",
      coverImage: `${import.meta.env.BASE_URL}[YX2].png`,
      preview: "Celebrating the final day of Lunar New Year with lantern decorating, riddle-solving competitions, and tangyuan.",
      description: "To celebrate the final day of the Lunar New Year, Yuanxiao Jie (The Lantern Festival) transformed the AACC into a bustling community night market focused on celebration and competition. Participants spent the afternoon decorating colorful paper lanterns and testing their wits in a riddle-solving competition (in hopes of winning the swag dragon t-shirt or the delicious boba kit). The heart of the event was the sharing of tangyuan (sweet, chewy rice balls) representing family completeness and the sweetness of the year ahead. Between chasing off the spirits of the past year with a 'Nian' dragon and enjoying traditional treats, students from all backgrounds were able to experience a vibrant piece of Chinese heritage and find a sense of home on campus.",
      images: ["[YX2].png", "[YX1].png", "[YX3].png", "[YX5].png", "[YX7].png"]
    },
    {
      id: "taste-of-casa",
      title: "Taste of CASA",
      date: "December 9, 2023",
      club: "CASA FL",
      coverImage: `${import.meta.env.BASE_URL}[FL1].JPG`,
      preview: "A high-energy, hands-on culinary workshop featuring wonton folding, mooncake making, and custom douhua bowls.",
      description: "As the FLs first event, we wanted Taste of CASA to be a high-energy, hands-on culinary workshop where we turned the AACC into a full-on 'chef-it-up' kitchen for the afternoon! Participants rotated through three interactive stations, getting their hands messy learning to fold savory wontons (meat and veggie!), molding and stuffing red bean paste into snowskin mooncakes, and building their own custom douhua (tofu pudding) bowls loaded with boba, sago, and grass jelly. Between the flour-covered tables and the steam coming from the kitchen, guests got to hang out, meet new friends, and walk away with a belly full of Chinese staples they actually made themselves.",
      images: ["[FL1].JPG"]
    },
    // AACC Events (latest first)
    // AACC Events (latest first)
    {
      id: "sea-of-flavors",
      title: "A SEA of Flavors",
      date: "January 29, 2026",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}SEA-2.JPG`,
      preview: "A Southeast Asian food event highlighting cultural osmosis, colonial histories, and food as resistance.",
      description: "Welcome to the SEA of Flavors! Here, the AACC and affiliate orgs will serve and discuss Southeast Asian foods resulting from cultural osmosis under colonial regimes. Through this event, we hope to highlight the impact colonization had on Southeast Asia, and how food has been used as a means of resistance by colonized peoples. Come for bingo, amazing food, and explore intercultural histories.",
      images: [`${import.meta.env.BASE_URL}SEA-1.png`, `${import.meta.env.BASE_URL}SEA-2.JPG`, `${import.meta.env.BASE_URL}SEA-3.JPG`, `${import.meta.env.BASE_URL}SEA-4.JPG`, `${import.meta.env.BASE_URL}SEA-5.JPG`]
    },
    {
      id: "monthly-movie-night-a-wedding-banquet",
      title: "Monthly Movie Night: A Wedding Banquet",
      date: "February 2, 2026",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}WB-1.png`,
      preview: "A screening of A Wedding Banquet with a discussion of family, identity, and chosen care.",
      description: "Hoping to stay in the country, a gay man proposes a green card marriage to his lesbian friend in exchange for paying for her IVF treatment. All plans go out the window when his grandmother surprises them with plans for an extravagant Korean wedding banquet.",
      images: [`${import.meta.env.BASE_URL}WB-1.png`, `${import.meta.env.BASE_URL}WB-2.JPG`]
    },
    {
      id: "asian-new-years",
      title: "A[sian] New Year[s]",
      date: "March 4, 2026",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}ANY-1.JPG`,
      preview: "A Pan-Asian New Years celebration with holiday foods, traditions, and a mystery prize challenge.",
      description: "Celebrate wonderful Pan-Asian New Years (Lunar, Solar, & Lunar-Solar) traditions with the AACC! Learn about the histories of and enjoy holiday foods like niangao and ugadi pachadi while racing for a mystery prize with our New Years traditions and challenges.",
      images: [`${import.meta.env.BASE_URL}ANY-1.JPG`, `${import.meta.env.BASE_URL}ANY-2.JPG`, `${import.meta.env.BASE_URL}ANY-3.JPG`]
    },
    {
      id: "monthly-movie-night-the-lady",
      title: "Monthly Movie Night: The Lady",
      date: "February 24, 2026",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}TL-1.JPG`,
      preview: "A February movie night featuring The Lady and Burmese refreshments.",
      description: "The February installment of Monthly Movie Night features the Burmese politician and Nobel laureate Aung San Suu Kyi. Michelle Yeoh stars in the 2011 film The Lady, which tells the story of how the former leader becomes a key figure in Myanmar's democracy movement. We will have a short discussion after the movie about different historical and political themes accompanied by Burmese refreshments.",
      images: [`${import.meta.env.BASE_URL}TL-1.JPG`]
    },
    {
      id: "multilingual-mukbang",
      title: "Multilingual Mukbang",
      date: "March 31, 2026",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}MLM-1.jpg`,
      preview: "A language-learning and snack-sharing event featuring underrepresented Asian languages.",
      description: "Asia has such a beautiful diversity of languages, dialects, and ways to communicate with one another. Come to the AACC to learn some phrases from Asian languages not taught at Yale, including Kazakh, Hmong, Fujianese, Mongolian, Sinhala, and Burmese! All accompanied by delicious snacks from each culture as prizes. How much can you learn? How much can you eat?",
      images: [`${import.meta.env.BASE_URL}MLM-1.jpg`, `${import.meta.env.BASE_URL}MLM-2.JPG`, `${import.meta.env.BASE_URL}MLM-3.JPG`, `${import.meta.env.BASE_URL}MLM-4.JPG`, `${import.meta.env.BASE_URL}MLM-5.JPG`, `${import.meta.env.BASE_URL}MLM-6.JPG`]
    },
    {
      id: "monthly-movie-night-princess-mononoke",
      title: "Monthly Movie Night: Princess Mononoke",
      date: "April 14, 2026",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}PM-1.png`,
      preview: "A final movie night celebrating Earth Day with Studio Ghibli and BYOD community vibes.",
      description: "In celebration of Earth Day, come join us for our final movie night! We will be discussing themes of coexistence over dominance, spirituality, and the conflict between industrial progress and nature with this classic Studio Ghibli film. Mango sticky rice and other food will be provided, but BYOD (bring your own dishware) to celebrate Earth Day! Register on Yale Connect today!",
      images: [`${import.meta.env.BASE_URL}PM-1.png`]
    },
    {
      id: "movie-seventh-bullet",
      title: "Monthly Movie Night: The Seventh Bullet",
      date: "November 18, 2025",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}[CAMMM1].png`,
      preview: "A screening of the 1972 Uzbek-Soviet 'red western' film with samsas and ACY.",
      description: "For our second movie night, we teamed up with Asian Crossroads at Yale (ACY) for a screening of The Seventh Bullet. The 1972 Uzbek-Soviet \"red western\" film that offered a super unique look into Central Asian culture. We gathered in the Wellness Lounge to share some pumpkin and beef samsas and explore a side of cinema that often goes underrepresented. It was a great moment for the community to broaden our horizons and appreciate the diversity of Asian storytelling.",
      images: [`${import.meta.env.BASE_URL}[CAMMM1].png`, `${import.meta.env.BASE_URL}[CAMMM2].png`, `${import.meta.env.BASE_URL}[CAMMM3].png`]
    },
    {
      id: "clothing-cafe",
      title: "Asian American Clothing Cafe (AACC)",
      date: "November 16, 2025",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}[AACC1].png`,
      preview: "A sustainable fashion workshop tackling overconsumption with radical mending and upcycling.",
      description: "At our first opening of the Asian American Clothing Cafe, students brought in their own worn-out clothes, and we provided the tools and instructions to upcycle and repair them. With hot tea in hand and a DIY spirit, it was the perfect way to reject throwaway culture and learn the value of sustainability. We provided a sewing machine and plenty of sashiko visible mending patches!",
      images: [`${import.meta.env.BASE_URL}[AACC1].png`, `${import.meta.env.BASE_URL}[AACC2].png`]
    },
    {
      id: "movie-chak-de-india",
      title: "Monthly Movie Night: Chak De! India",
      date: "October 20, 2025",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}[MMN1].png`,
      preview: "Screening of the iconic Bollywood sports drama with fresh pani puri and discussions on femininity and sports.",
      description: "Our first monthly movie night featuring Chak De! India was an absolute vibe. We watched the iconic SRK lead the Indian Women's National Field Hockey Team to victory, which sparked some really great conversations afterward. We dug into themes of women in sports, portrayals of femininity, and overcoming cultural conflicts. To make the night even better, we made fresh pani puri to snack on while we chatted.",
      images: [`${import.meta.env.BASE_URL}[MMN1].png`, `${import.meta.env.BASE_URL}[MMN2].png`, `${import.meta.env.BASE_URL}[MMN3].png`, `${import.meta.env.BASE_URL}[MMN4].png`, `${import.meta.env.BASE_URL}[MMN5].png`]
    },
    {
      id: "asiaarchitecture",
      title: "asiaarchitecture!",
      date: "September 30, 2025",
      club: "HACR 2025-2026",
      coverImage: `${import.meta.env.BASE_URL}[AA1].png`,
      preview: "Learning about culturally significant Asian landmarks while sculpting architectural masterpieces with modeling clay.",
      description: "We kicked off the year by nerding out over some incredible Asian landmarks at our \"asiaarchitecture!\" event. The goal was to blend history with hands-on creativity, so we spent the afternoon learning about culturally significant buildings and their impact on the world. To keep things low-stress, we broke out the modeling clay so everyone could sculpt their own architectural masterpieces while snacking on Asian treats. It was such a welcoming way to help new and returning students connect while building (literally!) a deeper appreciation for AAPI design.",
      images: [`${import.meta.env.BASE_URL}[AA1].png`, `${import.meta.env.BASE_URL}[AA2].png`, `${import.meta.env.BASE_URL}[AA3].png`]
    },
    {
      id: "purvai-rai-dinner",
      title: "Dine and Discuss with Purvai Rai",
      date: "April 27, 2025",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[PR1].png`,
      preview: "An intimate dinner-talk featuring Purvai Rai sharing her work on Punjabi identity.",
      description: "We wrapped up the year with an intimate dinner-talk featuring Purvai Rai, who shared her incredible work on Punjabi identity in relation to architecture and weaving. We grabbed catering from Hot Murga and just sat down for a real conversation about life after grad school and finding your creative path. Even though it was a smaller group because of finals season, the convo was so insightful. It felt like a really special way to connect with the graduate art community and hear the stories behind the research.",
      images: [`${import.meta.env.BASE_URL}[PR1].png`, `${import.meta.env.BASE_URL}[PR2].png`]
    },
    {
      id: "sok-song-vending",
      title: "Sok Song Origami Vending Machine Soft Launch",
      date: "April 8, 2025",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[VM1].png`,
      preview: "Soft launch of Sok Song's origami vending machine in the AACC living room.",
      description: "Sok Song came back to visit to soft-launch his origami vending machine in the AACC living room. It was such a fun, casual day—people were wandering in, grabbing boba, and trying to figure out if there was actually a tiny person inside the machine. It wasn't overwhelmingly crowded, which made it the perfect \"stay and yap\" kind of event. It's been so cool to see Sok's art become a permanent, interactive part of our space.",
      images: [`${import.meta.env.BASE_URL}[VM1].png`, `${import.meta.env.BASE_URL}[VM2].png`, `${import.meta.env.BASE_URL}[VM3].png`]
    },
    {
      id: "beads-bangles",
      title: "Beads & Bangles",
      date: "April 2, 2025",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[BB1].png`,
      preview: "A South Asian jewelry-making session for PAHM led by Hilal's mom.",
      description: "For PAHM, we hosted a South Asian jewelry-making session led by Hilal's mom, who has the best taste in beads. It was a super homey afternoon where we learned the actual mechanics of jewelry making—everything from weaving and beading to bending metal for bangles. There's something about working with your hands that makes small talk feel so natural. Plus, we had some \"buss\" mango juice to keep the energy up while we crafted.",
      images: [`${import.meta.env.BASE_URL}[BB1].png`, `${import.meta.env.BASE_URL}[BB2].png`, `${import.meta.env.BASE_URL}[BB3].png`, `${import.meta.env.BASE_URL}[BB4].png`, `${import.meta.env.BASE_URL}[BB5].png`]
    },
    {
      id: "love-served-fresh",
      title: "Love Served Fresh",
      date: "February 13, 2025",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[LSF4].png`,
      preview: "A Valentine's Day special showcasing Asian American student singers and filmmakers.",
      description: "This was our Valentine's Day special, and the vibes were genuinely immaculate. We turned the room into a lounge with sunset lamps and heart cutouts to showcase some amazing Asian American student singers and filmmakers. Between the live performances and the #GORG charcuterie board (shoutout Andrew for the chocolate-covered strawberries!), it was such a cool way to amplify student talent. It felt less like a formal event and more like a community hangout celebrating Asian American love and creativity.",
      images: [`${import.meta.env.BASE_URL}[LSF4].png`, `${import.meta.env.BASE_URL}[LSF1].png`, `${import.meta.env.BASE_URL}[LSF2].png`, `${import.meta.env.BASE_URL}[LSF3].png`, `${import.meta.env.BASE_URL}[LSF5].png`]
    },
    {
      id: "jason-koo-book",
      title: "The Art of No Rest: Jason Koo Book Talk",
      date: "December 5, 2024",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[NR1].PNG`,
      preview: "An intimate round-table discussion with author Jason Koo about his book, No Rest.",
      description: "For this one, we teamed up with the AE crew for a round-table talk with author Jason Koo about his book, No Rest. We kept things cozy at the MENACC with homemade matcha, taro, and Thai tea crinkle cookies (which were delicious, obviously). It ended up being a really intimate session with some super nuanced conversations about his work. It was a good reminder that sometimes the smaller, deep-dive discussions are just as valuable as the big parties.",
      images: [`${import.meta.env.BASE_URL}[NR1].PNG`]
    },
    {
      id: "sok-song-origami",
      title: "Sok Song Origami Workshop",
      date: "November 16, 2024",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[SS1].png`,
      preview: "A step-by-step origami workshop led by artist Sok Song with donated supplies and books.",
      description: "We were so lucky to have artist Sok Song stop by to lead a step-by-step origami workshop. We had a great turnout—undergrads, art school students, and even some local kids all showed up to fold. Sok was incredibly sweet, sharing his vision and even donating a ton of supplies and books afterward. The room was a little packed, but the vibes were great, and seeing everyone so locked into his presentation was definitely a highlight of the semester.",
      images: [`${import.meta.env.BASE_URL}[SS1].png`, `${import.meta.env.BASE_URL}[SS2].png`, `${import.meta.env.BASE_URL}[SS3].png`, `${import.meta.env.BASE_URL}[SS4].png`, `${import.meta.env.BASE_URL}[SS5].png`]
    },
    {
      id: "campus-to-canvas",
      title: "Campus to Canvas",
      date: "October 3, 2024",
      club: "HACR 2024-2025",
      coverImage: `${import.meta.env.BASE_URL}[CC1].png`,
      preview: "A massive painting night where everyone painted a piece of the puzzle to form one giant mural.",
      description: "We helped break in the new art space with a massive painting night! The goal was simple: everyone paints a piece of the puzzle, and it all comes together to form one giant mural. Honestly, it was the perfect low-effort, high-reward vibe—lots of people showed up, the \"chill\" energy was exactly what we needed, and the fresh fruit cups were an absolute hit. It was so popular we actually had to scramble for more seats! It gave our art room some much-needed personality right from the jump.",
      images: [`${import.meta.env.BASE_URL}[CC1].png`, `${import.meta.env.BASE_URL}[CC2].png`, `${import.meta.env.BASE_URL}[CC3].png`, `${import.meta.env.BASE_URL}[CC4].png`, `${import.meta.env.BASE_URL}[CC5].png`]
    },
    // Other Events
    {
      id: "yhhap-fast-2025",
      title: "2025 FALL YHHAP FAST",
      date: "November 2025",
      club: "YHHAP FAST Designer",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
    {
      id: "ecaasu-2025",
      title: "ECAASU Conference 2025",
      date: "November 2024",
      club: "AASA Digital Team",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
  ];

  // Categorize events by organization
  const casaEvents = events.filter(e => e.club.includes("CASA") || e.club.includes("Co-Cultural Chair"));
  const aaccEvents = events.filter(e => e.club.includes("AACC") || e.club.includes("HACR"));
  const aaccEventsChronological = [...aaccEvents].sort((left, right) => new Date(left.date) - new Date(right.date));

  const outlineSections = [
    {
      title: "CASA",
      items: casaEvents.map(e => e.title)
    },
    {
      title: "AACC",
      items: aaccEventsChronological.map(e => e.title)
    }
  ];

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 6vw, 4rem) clamp(2rem, 6vw, 120px) clamp(1rem, 4vw, 2rem) clamp(2rem, 6vw, 120px)",
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "none",
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
        @media (max-width: 1024px) {
          .project-outline-sidebar {
            position: relative !important;
            left: 0 !important;
            width: 100% !important;
            margin-bottom: 2rem !important;
            max-height: none !important;
            border-radius: 12px !important;
            border-right: none !important;
            top: 0 !important;
          }
          .project-outline-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 1rem !important;
          }
        }
        @media (max-width: 1200px) {
          .event-gallery {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .project-outline-container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          h1 {
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
          h2 {
            font-size: clamp(1.25rem, 5vw, 1.75rem) !important;
          }
          .event-gallery {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #d64545; }
        }
        
        @keyframes remove-caret {
          to { border-color: transparent; }
        }
        
        .typewriter-title {
          overflow: hidden;
          border-right: 3px solid #d64545;
          white-space: nowrap;
          display: inline-block;
          animation: 
            typing 2s steps(36, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      <DogOutlineGuide sections={outlineSections} />
      <div style={contentStyle} className="project-content">
      <h1 className="ep-header"><span className="typewriter-title">Welcome to My Events Archive!</span></h1>
      <p className="ep-sub" style={{ marginBottom: "3rem", textAlign: "center" }}>
        I wanted to highlight the clubs and organizations that shaped my college experience. 
        Through my work at the Asian American Cultural Center, leadership in the Chinese American Students Association, and other campus initiatives, 
        event planning became a core part of how I built and celebrated culture and community at Yale.
      </p>

      {/* ========== CASA SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          CASA (Chinese American Students Association)
        </h2>
        
        {/* Organization Bio Section */}
        <div style={{ marginBottom: "3rem", display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 350px", minWidth: "350px" }}>
            <img
              src={`${import.meta.env.BASE_URL}casaboardphoto.png`}
              alt="CASA Board"
              style={{ width: "350px", height: "200px", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "1 1 300px", color: "#ddd", lineHeight: "1.6" }}>
            <p style={{ fontSize: "0.95rem", textAlign: "left" }}>
            The <a href="https://www.yalecasa.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#d64545", textDecoration: "none", fontSize: "0.95rem"  }}>Chinese American Students Association (CASA)</a> is one of Yale’s largest undergraduate organizations, with over 900 members. It serves as a home for students of all backgrounds to come together and celebrate Chinese American culture, identity, and experiences. Each year, the CASA Board organizes a wide range of cultural, political, and social events, including Lunar Ball, Cultural Show, Hot Pot Nights, community discussions, and speaker events. I served as a First Year Liaison, Cultural Chair, and later Co-President, and below are some of the events I helped plan and execute during my time with CASA.
            </p>
          </div>
        </div>

        {/* CASA Events Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "2rem",
          }}
          className="event-gallery"
        >
          {casaEvents.map((event) => (
            <div key={event.id} id={event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <EventCard
                id={event.id}
                coverImage={event.coverImage}
                title={event.title}
                date={event.date}
                club={event.club}
                preview={event.preview}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========== AACC SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          AACC (Asian American Cultural Center)
        </h2>
        
        {/* Organization Bio Section */}
        <div style={{ marginBottom: "3rem", display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 350px", minWidth: "350px" }}>
            <img
              src={`${import.meta.env.BASE_URL}hacrphoto.jpeg`}
              alt="AACC HACR Team"
              style={{ width: "350px", height: "200px", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "1 1 300px", color: "#ddd", lineHeight: "1.6" }}>
            <p style={{ fontSize: "0.9rem" }}>
              The <a href="https://www.instagram.com/aacc.yale/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: "#d64545", textDecoration: "none", fontSize: "0.9rem"  }}> Asian American Cultural Center (AACC) </a> at Yale is is a hub for personal, academic, and professional growth for Yale University students who are interested in learning about the Asian diasporic experience. 
              I work as an Undergraduate Student Coordinator on the Historical, Artistic, and Cultural Resources team.
              HACR’s personal motto was “niche”-- not in the sense of something obscure or unknown, but about finding delight in spotlighting the underrepresented. We aim to serve as a bridge between your home and Yale, connecting what you already know to new experiences that celebrate the beautiful diversity of the broader Asian American diaspora. From language to art to food, we’ve got you covered. 
            </p>
          </div>
        </div>

        {/* AACC Events Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "2rem",
          }}
          className="event-gallery"
        >
          {aaccEventsChronological.map((event) => (
            <div key={event.id} id={event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
              <EventCard
                id={event.id}
                coverImage={event.coverImage}
                title={event.title}
                date={event.date}
                club={event.club}
                preview={event.preview}
              />
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
    </>
  );
}
