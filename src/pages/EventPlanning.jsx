import DogOutlineGuide from "../components/DogOutlineGuide.jsx";
import EventCard from "../components/EventCard.jsx";

export default function EventPlanning() {
  // Event data for the gallery
  const events = [
    {
      id: "taste-of-casa",
      title: "Taste of CASA",
      date: "December 9, 2023",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[FL1].JPG`,
      preview: "A high-energy, hands-on culinary workshop featuring wonton folding, mooncake making, and custom douhua bowls.",
      description: "As the FLs first event, we wanted Taste of CASA to be a high-energy, hands-on culinary workshop where we turned the AACC into a full-on 'chef-it-up' kitchen for the afternoon! Participants rotated through three interactive stations, getting their hands messy learning to fold savory wontons (meat and veggie!), molding and stuffing red bean paste into snowskin mooncakes, and building their own custom douhua (tofu pudding) bowls loaded with boba, sago, and grass jelly. Between the flour-covered tables and the steam coming from the kitchen, guests got to hang out, meet new friends, and walk away with a belly full of Chinese staples they actually made themselves.",
      images: ["[FL1].JPG"]
    },
    {
      id: "yuanxiao-jie-2024",
      title: "YuanXiao Jie Celebration",
      date: "February 24, 2024",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[YX2].png`,
      preview: "Celebrating the final day of Lunar New Year with lantern decorating, riddle-solving competitions, and tangyuan.",
      description: "To celebrate the final day of the Lunar New Year, Yuanxiao Jie (The Lantern Festival) transformed the AACC into a bustling community night market focused on celebration and competition. Participants spent the afternoon decorating colorful paper lanterns and testing their wits in a riddle-solving competition (in hopes of winning the swag dragon t-shirt or the delicious boba kit). The heart of the event was the sharing of tangyuan (sweet, chewy rice balls) representing family completeness and the sweetness of the year ahead. Between chasing off the spirits of the past year with a 'Nian' dragon and enjoying traditional treats, students from all backgrounds were able to experience a vibrant piece of Chinese heritage and find a sense of home on campus.",
      images: ["[YX2].png", "[YX1].png", "[YX3].png", "[YX5].png", "[YX7].png"]
    },
    {
      id: "baobaobao-pt2",
      title: "BaoBaoBao Pt2",
      date: "March 26, 2025",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[BBB1].png`,
      preview: "A self-care event combining fluffy buns (包子), custom self-care bags (包), and plenty of hugs (抱抱) with friends!",
      description: "As a little self-care event and a throwback to the first rendition, we turned the AACC into the home-y zone perfect for relaxation, self-care, games, and yapping. Everyone got to lean into the BaoBaoBao (抱包抱) vibes, combining fluffy buns (包子), custom self-care bags (包), and plenty of hugs (抱抱) with friends! From writing sweet note cards and packing gift bags with face masks and lotions to battling it out over video games, it was a necessary midterm break. It was so good to see everyone taking a second to appreciate their favorite baobaos (宝宝) and recharge with some good company and even better snacks!",
      images: ["[BBB1].png", "[BBB2].png", "[BBB3].png", "[BBB4].png", "[BBB5].png"]
    },
    {
      id: "cultural-show-2024",
      title: "2024 CASA Cultural Show",
      date: "April 21, 2024",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Under the theme 'Wings of Harmony,' celebrating the vibrant bridge between Chinese and American cultures.",
      description: "Under the theme 'Wings of Harmony,' the Year of the Dragon Cultural Show brought the community together to celebrate the vibrant bridge between Chinese and American cultures. The event showcased the immense talent within our own community, featuring everything from disciplined Wushu martial arts and prodigy piano performances to comedy skits and traditional instrumental acts. Between the performances, the energy stayed high with interactive trivia and a heart-rate monitor challenge that turned the audience into active participants. Surrounded by great food and even better people we were proud to keep on the tradition of our annual cultural show.",
      images: ["cultshow1.png", "cultshow2.png", "cultshow4.png", "cultshow5.png", "cultshow6.png"]
    },
    {
      id: "mid-autumn-moonlight-mingle",
      title: "Mid-Autumn Moonlight Mingle",
      date: "September 17, 2024",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[MMM1].png`,
      preview: "A vibrant Moon Festival celebration bringing over 300 people together to share mooncakes under the brightest moon.",
      description: "To celebrate the Mid-Autumn Festival, CASA collaborated with TAS (Taiwanese American Society) and YASSS (Yale Astro and Space Student Society) to host a vibrant Moon Festival celebration that brought over 300 people to the AACC. In honor of familial traditions, students gathered to share mooncakes and hot tea under the brightest moon of the year. The event combined cultural heritage with interactive fun, featuring stations for crafting paper fortune tellers and writing letters to friends, while YASSS provided telescopes for a close-up look at the full moon. Even Yale Votes joined the festivities to help students register to vote, adding a layer of community engagement to the evening. By blending stargazing, traditional snacks, and modern outreach, the event served as a massive gathering point for students to find connection and celebrate the essence of the holiday together (over 300 servings of mooncake!).",
      images: ["[MMM1].png", "[MMM2].png", "[MMM3].png", "[MMM4].png", "[MMM5].png"]
    },
    {
      id: "singles-day-fair",
      title: "Singles Day Fair",
      date: "November 9, 2024",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[SD1].png`,
      preview: "A festival centered on self-empowerment featuring fortune telling, face painting, mahjong, and self-care goodie bags.",
      description: "To celebrate Singles' Day on 11/11, we transformed the AACC into a 'fair-like' festival centered on self-empowerment and community. Participants were greeted with eleven raffle tickets to strategically spend at various stations throughout the first floor. The event offered a mix of activities, from fortune telling and palm reading to face painting and mahjong, all while students enjoyed a variety of 'stick foods' like chicken and fruit skewers. Beyond the games, attendees could use their tickets to build self-care goodie bags, embracing the holiday's spirit of treating oneself. By blending the commercial fun of the Chinese shopping holiday with a supportive campus vibe, the event provided a much-needed pick-me-up during midterm season, allowing students to bond over snacks, strategy, and shared memories.",
      images: ["[SD1].png", "[SD2].png", "[SD3].png", "[SD4].png", "[SD5].png"]
    },
    {
      id: "hot-pot-night-2024",
      title: "2024 Hot Pot Night",
      date: "December 7, 2024",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[HP1].jpeg`,
      preview: "A popup hot pot restaurant recreating the heartwarming atmosphere of a traditional Chinese family dinner.",
      description: "To celebrate the end of the semester, we created a popup hot pot restaurant designed to recreate the heartwarming atmosphere of a traditional Chinese family dinner. Following the last day of classes, students gathered around shared tables to enjoy a customized meal, choosing from a variety of soup bases and fresh ingredients (looooots of meat and noodles). The event emphasized the importance of communal dining customs, from the creative process of mixing personalized dipping sauces to the real-time experience of cooking together with friends and CASA families. For many, the night served as both a well-deserved reward for the year's hard work and a 'taste of home' during the holiday season. It really allowed people to slow down and just watch the soup boil.",
      images: ["[HP1].jpeg", "[HP2].png", "[HP3].png", "[HP4].png"]
    },
    {
      id: "lunar-ball-2025",
      title: "2025 Lunar Ball",
      date: "2025",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[LB1].png`,
      preview: "The biggest event celebrating the Year of the Snake with Asian American organizations across Yale.",
      description: "The Lunar Ball is the biggest event of its kind for all the Asian American organizations at Yale University, and is jointly hosted by a number of Asian American affinity groups. For the year of the snake, CASA (Chinese American Student Association), CUSY (Chinese Undergraduates Students at Yale), TAS (Taiwanese Students at Yale), ARAY (Asian Recipes at Yale), Asianish, and KASY (Korean American Students at Yale) came together to host a formal to celebrate our shared cultural histories, traditions, and just have a little bit of fun to welcome in the new year.",
      images: ["[LB1].png", "[LB2].png", "[LB3].png", "[LB4].png", "[LB5].png"]
    },
    {
      id: "corky-lee-exhibition",
      title: "Corky Lee Exhibition",
      date: "March 2, 2025",
      club: "CASA",
      coverImage: `${import.meta.env.BASE_URL}[CL1].png`,
      preview: "A gallery exhibition honoring Chinese American activist roots through Corky Lee's photography.",
      description: "In honor of Pan-Asian Heritage Month, CASA hosted a gallery exhibition centered on Chinese American activist roots and the power of art as a medium for justice. The event featured a showcase of Corky Lee's photography, paired with a historical presentation exploring his work as a reaction to systemic oppression. To build cross-cultural solidarity, the gallery also displayed submissions from students across various campus organizations, providing a platform for artists to share their statements on modern-day activism and 'Just Futures.' The opening reception invited attendees to engage actively with his work generously rented by his estate and student submission with some nice refreshments. By documenting the evening with polaroids and hosting open discussions on student voices, the event bridged the gap between historical 'ancestors' and current campus activists.",
      images: ["[CL1].png", "[CL2].png", "[CL3].png", "[CL4].png", "[CL5].png"]
    },
    {
      id: "sok-song-origami",
      title: "Sok Song Origami Workshop",
      date: "February 2024",
      club: "AACC HACR Team",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.", 
    },
    {
      id: "asiarchitecture",
      title: "asiarchitecture!",
      date: "Month Year",
      club: "AACC HACR Team",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
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
    {
      id: "love-served-fresh",
      title: "Love Served Fresh",
      date: "Month Year",
      club: "Organization Name",
      coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
      preview: "Add your event description here. This is a preview that will show on the gallery card.",
    },
  ];

  // Categorize events by organization
  const casaEvents = events.filter(e => e.club.includes("CASA"));
  const aaccEvents = events.filter(e => e.club.includes("AACC"));
  const otherEvents = events.filter(e => !e.club.includes("CASA") && !e.club.includes("AACC"));

  const outlineSections = [
    {
      title: "CASA",
      items: casaEvents.map(e => e.title)
    },
    {
      title: "AACC",
      items: aaccEvents.map(e => e.title)
    },
    {
      title: "More!",
      items: otherEvents.map(e => e.title)
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
        I wanted to give some big highlights to the clubs and organizations that shaped my college experience.
        Between working at the Asian American Cultural Center, helping run the Chinese American Student Association, and other explorations here and there, event planning became a huge part of my college experience. Here I want to showcase and celebrate culture and community on campus.
      </p>

      {/* ========== CASA SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          CASA (Chinese American Students Association)
        </h2>
        
        {/* Organization Bio Section */}
        <div style={{ marginBottom: "3rem", display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 200px", minWidth: "200px" }}>
            <img
              src={`${import.meta.env.BASE_URL}casaboardphoto.png`}
              alt="CASA Board"
              style={{ width: "200px", height: "200px", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "1 1 300px", color: "#ddd", lineHeight: "1.6" }}>
            <p>
            The Chinese American Students Association (CASA) is one of Yale’s largest and most active undergraduate organizations with over 900 members. CASA serves as a home for all members of the Yale community, bringing together students of all backgrounds to celebrate Chinese American culture, identity, and experiences. The CASA Board organizes various cultural, political, and social events each year, including the annual Lunar Ball, Cultural Show, Hot Pot Nights, community discussions, and speaker events.
            Here are some of the events I helped plan and execute during my time with CASA.
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
          <div style={{ flex: "0 0 200px", minWidth: "200px" }}>
            <img
              src={`${import.meta.env.BASE_URL}hacrphoto.jpeg`}
              alt="AACC HACR Team"
              style={{ width: "200px", height: "200px", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "1 1 300px", color: "#ddd", lineHeight: "1.6" }}>
            <p>
              Add organization bio here. Describe the mission, activities, and your role in AACC.
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
          {aaccEvents.map((event) => (
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

      {/* ========== MORE! SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginBottom: "2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          More!
        </h2>
        
        {/* Organization Bio Section */}
        <div style={{ marginBottom: "3rem", display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 200px", minWidth: "200px" }}>
            <div style={{ width: "200px", height: "200px", background: "#333", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
              Photo placeholder
            </div>
          </div>
          <div style={{ flex: "1 1 300px", color: "#ddd", lineHeight: "1.6" }}>
            <p>
              Add information about other organizations and events here.
            </p>
          </div>
        </div>

        {/* Other Events Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "2rem",
          }}
          className="event-gallery"
        >
          {otherEvents.map((event) => (
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
