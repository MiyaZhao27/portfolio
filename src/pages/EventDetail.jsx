import { Link, useParams } from "react-router-dom";

// Event data - you can expand this later
const eventData = {
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
    date: "March 26, 2025",
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
  "sok-song-origami": {
    title: "Sok Song Origami Workshop",
    date: "February 2024",
    club: "AACC HACR Team",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
  },
  "asiarchitecture": {
    title: "asiarchitecture!",
    date: "Month Year",
    club: "AACC HACR Team",
    coverImage: `${import.meta.env.BASE_URL}cultshow3.png`,
    images: [],
    content: `Add your full event description here. You can write multiple paragraphs about the event.

Include details about what happened, who was involved, and what made this event special.

This is where you can tell the full story of your event with as much detail as you'd like.`,
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
  "love-served-fresh": {
    title: "Love Served Fresh",
    date: "Month Year",
    club: "Organization Name",
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

  const imageGridStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0",
    marginBottom: "2rem",
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