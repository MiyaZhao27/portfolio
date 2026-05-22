import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Event data - you can expand this later
const eventData = {
  "sea-of-flavors": {
    title: "A SEA of Flavors",
    date: "January 29, 2026",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}SEA-2.JPG`,
    images: [
      `${import.meta.env.BASE_URL}SEA-1.png`,
      `${import.meta.env.BASE_URL}SEA-2.JPG`,
      `${import.meta.env.BASE_URL}SEA-3.JPG`,
      `${import.meta.env.BASE_URL}SEA-4.JPG`,
      `${import.meta.env.BASE_URL}SEA-5.JPG`,
    ],
    content: `Welcome to the SEA of Flavors! Here, the AACC and affiliate orgs will serve and discuss Southeast Asian foods resulting from cultural osmosis under colonial regimes. Through this event, we hope to highlight the impact colonization had on Southeast Asia, and how food has been used as a means of resistance by colonized peoples. Come for bingo, amazing food, and explore intercultural histories.`,
  },
  "monthly-movie-night-a-wedding-banquet": {
    title: "Monthly Movie Night: A Wedding Banquet",
    date: "February 2, 2026",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}WB-1.png`,
    images: [
      `${import.meta.env.BASE_URL}WB-1.png`,
      `${import.meta.env.BASE_URL}WB-2.JPG`,
    ],
    content: `Hoping to stay in the country, a gay man proposes a green card marriage to his lesbian friend in exchange for paying for her IVF treatment. All plans go out the window when his grandmother surprises them with plans for an extravagant Korean wedding banquet.`,
  },
  "asian-new-years": {
    title: "A[sian] New Year[s]",
    date: "March 4, 2026",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}ANY-1.JPG`,
    images: [
      `${import.meta.env.BASE_URL}ANY-1.JPG`,
      `${import.meta.env.BASE_URL}ANY-2.JPG`,
      `${import.meta.env.BASE_URL}ANY-3.JPG`,
    ],
    content: `Celebrate wonderful Pan-Asian New Years (Lunar, Solar, & Lunar-Solar) traditions with the AACC! Learn about the histories of and enjoy holiday foods like niangao and ugadi pachadi while racing for a mystery prize with our New Years traditions and challenges.`,
  },
  "monthly-movie-night-the-lady": {
    title: "Monthly Movie Night: The Lady",
    date: "February 24, 2026",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}TL-1.JPG`,
    images: [
      `${import.meta.env.BASE_URL}TL-1.JPG`,
    ],
    content: `The February installment of Monthly Movie Night features the Burmese politician and Nobel laureate Aung San Suu Kyi. Michelle Yeoh stars in the 2011 film The Lady, which tells the story of how the former leader becomes a key figure in Myanmar's democracy movement. We will have a short discussion after the movie about different historical and political themes accompanied by Burmese refreshments.`,
  },
  "multilingual-mukbang": {
    title: "Multilingual Mukbang",
    date: "March 31, 2026",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}MLM-1.jpg`,
    images: [
      `${import.meta.env.BASE_URL}MLM-1.jpg`,
      `${import.meta.env.BASE_URL}MLM-2.JPG`,
      `${import.meta.env.BASE_URL}MLM-3.JPG`,
      `${import.meta.env.BASE_URL}MLM-4.JPG`,
      `${import.meta.env.BASE_URL}MLM-5.JPG`,
      `${import.meta.env.BASE_URL}MLM-6.JPG`,
    ],
    content: `Asia has such a beautiful diversity of languages, dialects, and ways to communicate with one another. Come to the AACC to learn some phrases from Asian languages not taught at Yale, including Kazakh, Hmong, Fujianese, Mongolian, Sinhala, and Burmese! All accompanied by delicious snacks from each culture as prizes. How much can you learn? How much can you eat?`,
  },
  "monthly-movie-night-princess-mononoke": {
    title: "Monthly Movie Night: Princess Mononoke",
    date: "April 14, 2026",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}PM-1.png`,
    images: [
      `${import.meta.env.BASE_URL}PM-1.png`,
    ],
    content: `In celebration of Earth Day, come join us for our final movie night! We will be discussing themes of coexistence over dominance, spirituality, and the conflict between industrial progress and nature with this classic Studio Ghibli film. Mango sticky rice and other food will be provided, but BYOD (bring your own dishware) to celebrate Earth Day! Register on Yale Connect today!`,
  },
  "taste-of-casa": {
    title: "Taste of CASA",
    date: "December 9, 2023",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[FL1].JPG`,
    images: [
      `${import.meta.env.BASE_URL}[FL1].JPG`,
    ],
    content: `As the FLs first event, we wanted Taste of CASA to be a high-energy, hands-on culinary workshop where we turned the AACC into a full-on 'chef-it-up' kitchen for the afternoon! Participants rotated through three interactive stations, getting their hands messy learning to fold savory wontons (meat and veggie!), molding and stuffing red bean paste into snowskin mooncakes, and building their own custom douhua (tofu pudding) bowls loaded with boba, sago, and grass jelly. Between the flour-covered tables and the steam coming from the kitchen, guests got to hang out, meet new friends, and walk away with a belly full of Chinese staples they actually made themselves.`,
  },
  "yuanxiao-jie-2024": {
    title: "YuanXiao Jie Celebration",
    date: "February 24, 2024",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[YX2].png`,
    images: [
      `${import.meta.env.BASE_URL}[YX2].png`,
      `${import.meta.env.BASE_URL}[YX1].png`,
      `${import.meta.env.BASE_URL}[YX3].png`,
      `${import.meta.env.BASE_URL}[YX5].png`,
      `${import.meta.env.BASE_URL}[YX7].png`,
    ],
    content: `To celebrate the final day of the Lunar New Year, Yuanxiao Jie (The Lantern Festival) transformed the AACC into a bustling community night market focused on celebration and competition. Participants spent the afternoon decorating colorful paper lanterns and testing their wits in a riddle-solving competition (in hopes of winning the swag dragon t-shirt or the delicious boba kit). The heart of the event was the sharing of tangyuan (sweet, chewy rice balls) representing family completeness and the sweetness of the year ahead. Between chasing off the spirits of the past year with a 'Nian' dragon and enjoying traditional treats, students from all backgrounds were able to experience a vibrant piece of Chinese heritage and find a sense of home on campus.`,
  },
  "baobaobao-pt2": {
    title: "BaoBaoBao Pt2",
    date: "March 26, 2024",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[BBB1].png`,
    images: [
      `${import.meta.env.BASE_URL}[BBB1].png`,
      `${import.meta.env.BASE_URL}[BBB2].png`,
      `${import.meta.env.BASE_URL}[BBB3].png`,
      `${import.meta.env.BASE_URL}[BBB4].png`,
      `${import.meta.env.BASE_URL}[BBB5].png`,
    ],
    content: `As a little self-care event and a throwback to the first rendition, we turned the AACC into the home-y zone perfect for relaxation, self-care, games, and yapping. Everyone got to lean into the BaoBaoBao (抱包抱) vibes, combining fluffy buns (包子), custom self-care bags (包), and plenty of hugs (抱抱) with friends! From writing sweet note cards and packing gift bags with face masks and lotions to battling it out over video games, it was a necessary midterm break. It was so good to see everyone taking a second to appreciate their favorite baobaos (宝宝) and recharge with some good company and even better snacks!`,
  },
  "cultural-show-2024": {
    title: "2024 CASA Cultural Show",
    date: "April 21, 2024",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [
      `${import.meta.env.BASE_URL}cultshow3.png`,
      `${import.meta.env.BASE_URL}cultshow1.png`,
      `${import.meta.env.BASE_URL}cultshow2.png`,
      `${import.meta.env.BASE_URL}cultshow4.png`,
      `${import.meta.env.BASE_URL}cultshow6.png`,
    ],
    content: `Under the theme 'Wings of Harmony,' the Year of the Dragon Cultural Show brought the community together to celebrate the vibrant bridge between Chinese and American cultures. The event showcased the immense talent within our own community, featuring everything from disciplined Wushu martial arts and prodigy piano performances to comedy skits and traditional instrumental acts. Between the performances, the energy stayed high with interactive trivia and a heart-rate monitor challenge that turned the audience into active participants. Surrounded by great food and even better people we were proud to keep on the tradition of our annual cultural show.`,
  },
  "mid-autumn-moonlight-mingle": {
    title: "Mid-Autumn Moonlight Mingle",
    date: "September 17, 2024",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[MMM1].png`,
    images: [
      `${import.meta.env.BASE_URL}[MMM1].png`,
      `${import.meta.env.BASE_URL}[MMM2].png`,
      `${import.meta.env.BASE_URL}[MMM3].png`,
      `${import.meta.env.BASE_URL}[MMM4].png`,
      `${import.meta.env.BASE_URL}[MMM5].png`,
    ],
    content: `To celebrate the Mid-Autumn Festival, CASA collaborated with TAS (Taiwanese American Society) and YASSS (Yale Astro and Space Student Society) to host a vibrant Moon Festival celebration that brought over 300 people to the AACC. In honor of familial traditions, students gathered to share mooncakes and hot tea under the brightest moon of the year. The event combined cultural heritage with interactive fun, featuring stations for crafting paper fortune tellers and writing letters to friends, while YASSS provided telescopes for a close-up look at the full moon. Even Yale Votes joined the festivities to help students register to vote, adding a layer of community engagement to the evening. By blending stargazing, traditional snacks, and modern outreach, the event served as a massive gathering point for students to find connection and celebrate the essence of the holiday together (over 300 servings of mooncake!).`,
  },
  "singles-day-fair": {
    title: "Singles Day Fair",
    date: "November 9, 2024",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[SD1].png`,
    images: [
      `${import.meta.env.BASE_URL}[SD1].png`,
      `${import.meta.env.BASE_URL}[SD2].png`,
      `${import.meta.env.BASE_URL}[SD3].png`,
      `${import.meta.env.BASE_URL}[SD4].png`,
      `${import.meta.env.BASE_URL}[SD5].png`,
    ],
    content: `To celebrate Singles' Day on 11/11, we transformed the AACC into a 'fair-like' festival centered on self-empowerment and community. Participants were greeted with eleven raffle tickets to strategically spend at various stations throughout the first floor. The event offered a mix of activities, from fortune telling and palm reading to face painting and mahjong, all while students enjoyed a variety of 'stick foods' like chicken and fruit skewers. Beyond the games, attendees could use their tickets to build self-care goodie bags, embracing the holiday's spirit of treating oneself. By blending the commercial fun of the Chinese shopping holiday with a supportive campus vibe, the event provided a much-needed pick-me-up during midterm season, allowing students to bond over snacks, strategy, and shared memories.`,
  },
  "hot-pot-night-2024": {
    title: "2024 Hot Pot Night",
    date: "December 7, 2024",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[HP1].jpeg`,
    images: [
      `${import.meta.env.BASE_URL}[HP1].jpeg`,
      `${import.meta.env.BASE_URL}[HP2].png`,
      `${import.meta.env.BASE_URL}[HP3].png`,
      `${import.meta.env.BASE_URL}[HP4].png`,
    ],
    content: `To celebrate the end of the semester, we created a popup hot pot restaurant designed to recreate the heartwarming atmosphere of a traditional Chinese family dinner. Following the last day of classes, students gathered around shared tables to enjoy a customized meal, choosing from a variety of soup bases and fresh ingredients (looooots of meat and noodles). The event emphasized the importance of communal dining customs, from the creative process of mixing personalized dipping sauces to the real-time experience of cooking together with friends and CASA families. For many, the night served as both a well-deserved reward for the year's hard work and a 'taste of home' during the holiday season. It really allowed people to slow down and just watch the soup boil.`,
  },
  "lunar-ball-2025": {
    title: "2025 Lunar Ball",
    date: "February 28, 2025",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[LB1].png`,
    images: [
      `${import.meta.env.BASE_URL}[LB1].png`,
      `${import.meta.env.BASE_URL}[LB2].png`,
      `${import.meta.env.BASE_URL}[LB3].png`,
      `${import.meta.env.BASE_URL}[LB4].png`,
      `${import.meta.env.BASE_URL}[LB5].png`,
    ],
    content: `The Lunar Ball is the biggest event of its kind for all the Asian American organizations at Yale University, and is jointly hosted by a number of Asian American affinity groups. For the year of the snake, CASA (Chinese American Student Association), CUSY (Chinese Undergraduates Students at Yale), TAS (Taiwanese Students at Yale), ARAY (Asian Recipes at Yale), Asianish, and KASY (Korean American Students at Yale) came together to host a formal to celebrate our shared cultural histories, traditions, and just have a little bit of fun to welcome in the new year.`,
  },
  "corky-lee-exhibition": {
    title: "Corky Lee Exhibition",
    date: "March 2, 2025",
    club: "CASA",
    coverImage: `${import.meta.env.BASE_URL}[CL1].png`,
    images: [
      `${import.meta.env.BASE_URL}[CL1].png`,
      `${import.meta.env.BASE_URL}[CL2].png`,
      `${import.meta.env.BASE_URL}[CL3].png`,
      `${import.meta.env.BASE_URL}[CL4].png`,
      `${import.meta.env.BASE_URL}[CL5].png`,
    ],
    content: `In honor of Pan-Asian Heritage Month, CASA hosted a gallery exhibition centered on Chinese American activist roots and the power of art as a medium for justice. The event featured a showcase of Corky Lee's photography, paired with a historical presentation exploring his work as a reaction to systemic oppression. To build cross-cultural solidarity, the gallery also displayed submissions from students across various campus organizations, providing a platform for artists to share their statements on modern-day activism and 'Just Futures.' The opening reception invited attendees to engage actively with his work generously rented by his estate and student submission with some nice refreshments. By documenting the evening with polaroids and hosting open discussions on student voices, the event bridged the gap between historical 'ancestors' and current campus activists.`,
  },
  "campus-to-canvas": {
    title: "Campus to Canvas",
    date: "October 3, 2024",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[CC1].png`,
    images: [
      `${import.meta.env.BASE_URL}[CC1].png`,
      `${import.meta.env.BASE_URL}[CC2].png`,
      `${import.meta.env.BASE_URL}[CC3].png`,
      `${import.meta.env.BASE_URL}[CC4].png`,
      `${import.meta.env.BASE_URL}[CC5].png`,
    ],
    content: `We helped break in the new art space with a massive painting night! The goal was simple: everyone paints a piece of the puzzle, and it all comes together to form one giant mural. Honestly, it was the perfect low-effort, high-reward vibe—lots of people showed up, the "chill" energy was exactly what we needed, and the fresh fruit cups were an absolute hit. It was so popular we actually had to scramble for more seats! It gave our art room some much-needed personality right from the jump.`,
  },
  "sok-song-origami": {
    title: "Sok Song Origami Workshop",
    date: "November 16, 2024",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[SS1].png`,
    images: [
      `${import.meta.env.BASE_URL}[SS1].png`,
      `${import.meta.env.BASE_URL}[SS2].png`,
      `${import.meta.env.BASE_URL}[SS3].png`,
      `${import.meta.env.BASE_URL}[SS4].png`,
      `${import.meta.env.BASE_URL}[SS5].png`,
    ],
    content: `We were so lucky to have artist Sok Song stop by to lead a step-by-step origami workshop. We had a great turnout—undergrads, art school students, and even some local kids all showed up to fold. Sok was incredibly sweet, sharing his vision and even donating a ton of supplies and books afterward. The room was a little packed, but the vibes were great, and seeing everyone so locked into his presentation was definitely a highlight of the semester.`,
  },
  "jason-koo-book": {
    title: "The Art of No Rest: Jason Koo Book Talk",
    date: "December 5, 2024",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[NR1].PNG`,
    images: [
      `${import.meta.env.BASE_URL}[NR1].PNG`,
    ],
    content: `For this one, we teamed up with the AE crew for a round-table talk with author Jason Koo about his book, No Rest. We kept things cozy at the MENACC with homemade matcha, taro, and Thai tea crinkle cookies (which were delicious, obviously). It ended up being a really intimate session with some super nuanced conversations about his work. It was a good reminder that sometimes the smaller, deep-dive discussions are just as valuable as the big parties.`,
  },
  "love-served-fresh": {
    title: "Love Served Fresh",
    date: "February 13, 2025",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[LSF4].png`,
    images: [
      `${import.meta.env.BASE_URL}[LSF4].png`,
      `${import.meta.env.BASE_URL}[LSF1].png`,
      `${import.meta.env.BASE_URL}[LSF2].png`,
      `${import.meta.env.BASE_URL}[LSF3].png`,
      `${import.meta.env.BASE_URL}[LSF5].png`,
    ],
    content: `This was our Valentine's Day special, and the vibes were genuinely immaculate. We turned the room into a lounge with sunset lamps and heart cutouts to showcase some amazing Asian American student singers and filmmakers. Between the live performances and the #GORG charcuterie board (shoutout Andrew for the chocolate-covered strawberries!), it was such a cool way to amplify student talent. It felt less like a formal event and more like a community hangout celebrating Asian American love and creativity.`,
  },
  "beads-bangles": {
    title: "Beads & Bangles",
    date: "April 2, 2025",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[BB1].png`,
    images: [
      `${import.meta.env.BASE_URL}[BB1].png`,
      `${import.meta.env.BASE_URL}[BB2].png`,
      `${import.meta.env.BASE_URL}[BB3].png`,
      `${import.meta.env.BASE_URL}[BB4].png`,
      `${import.meta.env.BASE_URL}[BB5].png`,
    ],
    content: `For PAHM, we hosted a South Asian jewelry-making session led by Hilal's mom, who has the best taste in beads. It was a super homey afternoon where we learned the actual mechanics of jewelry making—everything from weaving and beading to bending metal for bangles. There's something about working with your hands that makes small talk feel so natural. Plus, we had some buss mango juice to keep the energy up while we crafted.`,
  },
  "sok-song-vending": {
    title: "Sok Song Origami Vending Machine Soft Launch",
    date: "April 8, 2025",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[VM1].png`,
    images: [
      `${import.meta.env.BASE_URL}[VM1].png`,
      `${import.meta.env.BASE_URL}[VM2].png`,
      `${import.meta.env.BASE_URL}[VM3].png`,
    ],
    content: `Sok Song came back to visit to soft-launch his origami vending machine in the AACC living room. It was such a fun, casual day—people were wandering in, grabbing boba, and trying to figure out if there was actually a tiny person inside the machine. It wasn't overwhelmingly crowded, which made it the perfect "stay and yap" kind of event. It's been so cool to see Sok's art become a permanent, interactive part of our space.`,
  },
  "purvai-rai-dinner": {
    title: "Dine and Discuss with Purvai Rai",
    date: "April 27, 2025",
    club: "HACR 2024-2025",
    coverImage: `${import.meta.env.BASE_URL}[PR1].png`,
    images: [
      `${import.meta.env.BASE_URL}[PR1].png`,
      `${import.meta.env.BASE_URL}[PR2].png`,
    ],
    content: `We wrapped up the year with an intimate dinner-talk featuring Purvai Rai, who shared her incredible work on Punjabi identity in relation to architecture and weaving. We grabbed catering from Hot Murga and just sat down for a real conversation about life after grad school and finding your creative path. Even though it was a smaller group because of finals season, the convo was so insightful. It felt like a really special way to connect with the graduate art community and hear the stories behind the research.`,
  },
  "asiaarchitecture": {
    title: "asiaarchitecture!",
    date: "September 30, 2025",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}[AA1].png`,
    images: [
      `${import.meta.env.BASE_URL}[AA1].png`,
      `${import.meta.env.BASE_URL}[AA2].png`,
      `${import.meta.env.BASE_URL}[AA3].png`,
    ],
    content: `We kicked off the year by nerding out over some incredible Asian landmarks at our "asiaarchitecture!" event. The goal was to blend history with hands-on creativity, so we spent the afternoon learning about culturally significant buildings and their impact on the world. To keep things low-stress, we broke out the modeling clay so everyone could sculpt their own architectural masterpieces while snacking on Asian treats. It was such a welcoming way to help new and returning students connect while building (literally!) a deeper appreciation for AAPI design.`,
  },
  "clothing-cafe": {
    title: "Asian American Clothing Cafe (AACC)",
    date: "November 16, 2025",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}[AACC2].png`,
    images: [
      `${import.meta.env.BASE_URL}[AACC2].png`,
    ],
    content: `At our first opening of the Asian American Clothing Cafe, students brought in their own worn-out clothes, and we provided the tools and instructions to upcycle and repair them. With hot tea in hand and a DIY spirit, it was the perfect way to reject throwaway culture and learn the value of sustainability. We provided a sewing machine and plenty of sashiko visible mending patches!`,
  },
  "movie-seventh-bullet": {
    title: "Monthly Movie Night: The Seventh Bullet",
    date: "November 18, 2025",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}[CAMMM1].png`,
    images: [
      `${import.meta.env.BASE_URL}[CAMMM1].png`,
      `${import.meta.env.BASE_URL}[CAMMM2].png`,
      `${import.meta.env.BASE_URL}[CAMMM3].png`,
    ],
    content: `For our second movie night, we teamed up with Asian Crossroads at Yale (ACY) for a screening of The Seventh Bullet. The 1972 Uzbek-Soviet "red western" film that offered a super unique look into Central Asian culture. We gathered in the Wellness Lounge to share some pumpkin and beef samsas and explore a side of cinema that often goes underrepresented. It was a great moment for the community to broaden our horizons and appreciate the diversity of Asian storytelling.`,
  },
  "movie-chak-de-india": {
    title: "Monthly Movie Night: Chak De! India",
    date: "October 20, 2025",
    club: "HACR 2025-2026",
    coverImage: `${import.meta.env.BASE_URL}[MMN1].png`,
    images: [
      `${import.meta.env.BASE_URL}[MMN1].png`,
      `${import.meta.env.BASE_URL}[MMN2].png`,
      `${import.meta.env.BASE_URL}[MMN3].png`,
      `${import.meta.env.BASE_URL}[MMN4].png`,
      `${import.meta.env.BASE_URL}[MMN5].png`,
    ],
    content: `Our first monthly movie night featuring Chak De! India was an absolute vibe. We watched the iconic SRK lead the Indian Women's National Field Hockey Team to victory, which sparked some really great conversations afterward. We dug into themes of women in sports, portrayals of femininity, and overcoming cultural conflicts. To make the night even better, we made fresh pani puri to snack on while we chatted.`,
  },
  "yhhap-fast-2025": {
    title: "2025 FALL YHHAP FAST",
    date: "November 2025",
    club: "YHHAP FAST Designer",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "ecaasu-2025": {
    title: "ECAASU Conference 2025",
    date: "November 2024",
    club: "AASA Digital Team",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
};

export default function EventDetail() {
  const { eventId } = useParams();
  const event = eventData[eventId];

  // Scroll to top when component mounts or eventId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
        <h1>Event not found</h1>
        <Link to="/event-planning" style={{ color: "#d64545" }}>
          Back to Events
        </Link>
      </div>
    );
  }

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 4vw, 4rem) clamp(2rem, 6vw, 120px)",
    width: "100%",
    boxSizing: "border-box",
  };

  const contentStyle = {
    maxWidth: "1200px",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Back Button */}
        <Link
          to="/event-planning"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "#d64545",
            textDecoration: "none",
            fontSize: "0.95rem",
            marginBottom: "2rem",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ← Back to Events
        </Link>

        {/* Title and Meta */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", textAlign: "left" }}>{event.title}</h1>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "#999", fontSize: "1rem" }}>{event.date}</span>
          {event.club && (
            <span
              style={{
                background: "#d64545",
                color: "#fff",
                padding: "0.3rem 0.8rem",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              {event.club}
            </span>
          )}
        </div>

        {/* Content Sections with Interspersed Images */}
        {event.contentSections ? (
          event.contentSections.map((section, sectionIdx) => (
            <div key={sectionIdx} style={{ marginBottom: "3rem" }}>
              {/* First Image - Full Size Above Text */}
              {section.images && section.images.length > 0 && (
                <img
                  src={section.images[0]}
                  alt={`${event.title} section ${sectionIdx + 1} image 1`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                    border: "1px solid #404040",
                    background: "#1a1a1a",
                    marginBottom: "1.5rem",
                  }}
                />
              )}
              
              {/* Text */}
              <p
                style={{
                  color: "#ddd",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  textAlign: "left",
                  marginBottom: "1.5rem",
                }}
              >
                {section.text}
              </p>
              
              {/* Remaining Images - Collage Style Below Text */}
              {section.images && section.images.length > 1 && (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  marginTop: "1.5rem",
                  maxWidth: "1100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}>
                  {section.images.slice(1).map((img, imgIdx) => (
                    <img
                      key={imgIdx + 1}
                      src={img}
                      alt={`${event.title} section ${sectionIdx + 1} image ${imgIdx + 2}`}
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                        objectPosition: img.includes("[SD2]") ? "center" : img.includes("[SD3]") ? "bottom center" : "top",
                        borderRadius: "8px",
                        border: "1px solid #404040",
                        background: "#1a1a1a",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          /* Fallback for old content format */
          <>
            {/* First Image - Full Size Above Text */}
            {event.images && event.images.length > 0 && (
              <img
                src={event.images[0]}
                alt={`${event.title} image 1`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                  border: "1px solid #404040",
                  background: "#1a1a1a",
                  marginBottom: "2rem",
                }}
              />
            )}
            
            <div
              style={{
                color: "#ddd",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                whiteSpace: "pre-line",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              {event.content}
            </div>
            
            {/* Remaining Images - Collage Style Below Text */}
            {event.images && event.images.length > 1 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                maxWidth: "1100px",
                marginLeft: "auto",
                marginRight: "auto",
              }}>
                {event.images.slice(1).map((img, imgIdx) => (
                  <img
                    key={imgIdx + 1}
                    src={img}
                    alt={`${event.title} image ${imgIdx + 2}`}
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      objectPosition: img.includes("[SD2]") ? "center" : img.includes("[SD3]") ? "bottom center" : "top",
                      borderRadius: "8px",
                      border: "1px solid #404040",
                      background: "#1a1a1a",
                    }}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}