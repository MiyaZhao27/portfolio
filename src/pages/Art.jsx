import { useState } from "react";
import DogOutlineGuide from "../components/DogOutlineGuide.jsx";

export default function Art() {
  // Explicit list for mixed file extensions and skipped numbers
  const artworks = [
    "mzgallery1.png",
    "mzgallery9.JPG",
    "GAL1.jpg",
    "GAL2.png",
    "[GAL3].png",
    "mzgallery6.png",
    "[GAL5].png",
     "mzgallery8.JPG",
    "[GAL2].png",
    "[GAL1].png",
    "mzgallery4.png",
    "mzgallery7.png",
    "mzgallery3.png",
    "[GAL4].png",
    "mzgallery12.png",
    "[GAL6].png",
    "[GAL7].png",
    "[GAL8].png",
    "gallery10.png",
    "[GAL10].png",
    "[GAL9].png",
    "[GAL12].png",
    "[GAL13].png",
    "[GAL14].png",
    "[GAL15].png",
  ].map((file) => ({
    src: `${import.meta.env.BASE_URL}${file}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ecaasuPost1, setEcaasuPost1] = useState(0);
  const [ecaasuPost2, setEcaasuPost2] = useState(0);
  const [ecaasuPost3, setEcaasuPost3] = useState(0);
  const [yhhapMeme1, setYhhapMeme1] = useState(0);
  const [yhhapMeme2, setYhhapMeme2] = useState(0);
  const [yhhapMemeBox, setYhhapMemeBox] = useState(0);
  const [yhhapFlyer1, setYhhapFlyer1] = useState(0);
  const [yhhapFlyer2, setYhhapFlyer2] = useState(0);
  const [yhhapFlyer3, setYhhapFlyer3] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 1 ? 0 : prevIndex - 2
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= artworks.length ? 0 : prevIndex + 2
    );
  };

  // ECAASU post data - add your images here
  const ecaasuPosts = [
    {
      images: [
        `${import.meta.env.BASE_URL}IMG_9091.jpg`,
        `${import.meta.env.BASE_URL}IMG_9092.jpg`,
        `${import.meta.env.BASE_URL}IMG_9093.jpg`,
        `${import.meta.env.BASE_URL}IMG_9094.jpg`,
      ]
    },
    {
      images: [
        `${import.meta.env.BASE_URL}IMG_9086.jpg`,
        `${import.meta.env.BASE_URL}IMG_9087.jpg`,
        `${import.meta.env.BASE_URL}IMG_9088.jpg`,
        `${import.meta.env.BASE_URL}IMG_9089.jpg`,
        `${import.meta.env.BASE_URL}IMG_9090.jpg`,
]
    },
    {
      images: [
        `${import.meta.env.BASE_URL}IMG_9095.jpg`,
        `${import.meta.env.BASE_URL}IMG_9096.jpg`,
        `${import.meta.env.BASE_URL}IMG_9097.jpg`,
        `${import.meta.env.BASE_URL}IMG_9098.jpg`,
        `${import.meta.env.BASE_URL}IMG_9099.jpg`,
        `${import.meta.env.BASE_URL}IMG_9100.jpg`,
      ]
    }
  ];

  // YHHAP Fast meme data - add your images here
  const yhhapMemeBoxData = {
    images: [
      `${import.meta.env.BASE_URL}YHHAP POSTER (official) (3) (1).png`,
      `${import.meta.env.BASE_URL}2025 SPRING YHHAP FAST 8.5 X 11 (1).png`,
            `${import.meta.env.BASE_URL}yhhap spring 2024 - FIXED (1).png`,
      `${import.meta.env.BASE_URL}YHHAP STUDENT POSTER (1) (1).png`,
    ]
  };

  // YHHAP Flyer data - add your images here
  const yhhapFlyerPosts = [
    {
      images: [
        `${import.meta.env.BASE_URL}all 4 (1).png`,
        `${import.meta.env.BASE_URL}Amistad house  (3).png`,
        `${import.meta.env.BASE_URL}SUnrise cafe (1).png`,
        `${import.meta.env.BASE_URL}New Reach (3).png`,
        `${import.meta.env.BASE_URL}Witnesses to hunger (2).png`,

      ]
    },
    {
      images: [
        `${import.meta.env.BASE_URL}IMG_9105.jpg`,
        `${import.meta.env.BASE_URL}IMG_9107.jpg`,
        `${import.meta.env.BASE_URL}IMG_9108.jpg`,
        `${import.meta.env.BASE_URL}IMG_9109.jpg`,
        `${import.meta.env.BASE_URL}IMG_9110.jpg`,
        `${import.meta.env.BASE_URL}IMG_9111.jpg`,
      ]
    },
    {
      images: [
        `${import.meta.env.BASE_URL}IMG_9103.jpg`,
        `${import.meta.env.BASE_URL}IMG_9104.jpg`,
      ]
    }
  ];

  const outlineSections = [
    {
      title: "Design Work",
      items: [
        "ECAASU",
        "YHHAP Fast",
        "Publications/Features",
        "My Lookbook"
      ]
    }
  ];

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "0rem 3rem",
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
        @media (max-width: 900px) {
          .project-outline-container {
            flex-direction: column !important;
          }
          .project-outline-sidebar {
            position: relative !important;
            width: 100% !important;
            margin-right: 0 !important;
            margin-bottom: 2rem !important;
            max-height: none !important;
          }
        }
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      {outlineSections.length > 0 && <DogOutlineGuide sections={outlineSections} />}
      <div style={contentStyle} className="project-content">
      <style>{`
        .lookbook-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 1rem 2rem;
          min-height: 600px;
        }

        .book-wrapper {
          background: #f5f5f0;
          padding: 3rem 2rem;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0,0,0,.7);
          display: flex;
          gap: 2rem;
          max-width: 1400px;
          width: 100%;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .book-page {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          padding: 1.5rem;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
          min-height: 500px;
        }

        .book-page.left {
          border-right: 2px solid #ddd;
        }

        .lookbook-image {
          max-width: 100%;
          max-height: 60vh;
          width: auto;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .lookbook-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(214, 69, 69, 0.8);
          border: none;
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .lookbook-nav-button:hover {
          background: rgba(214, 69, 69, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .lookbook-nav-button.left {
          left: -25px;
        }

        .lookbook-nav-button.right {
          right: -25px;
        }

        .lookbook-counter {
          text-align: center;
          margin: 0.5rem 0;
          color: #ddd;
          font-size: 1rem;
        }

        @media (max-width: 1024px) {
          .book-wrapper {
            flex-direction: column;
            gap: 1rem;
            padding: 2rem 1rem;
          }

          .book-page {
            width: 100%;
            min-height: 300px;
          }

          .book-page.left {
            border-right: none;
            border-bottom: 2px solid #ddd;
          }

          .lookbook-nav-button.left {
            left: 10px;
          }

          .lookbook-nav-button.right {
            right: 10px;
          }
        }

        @media (max-width: 768px) {
          .lookbook-nav-button {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
          
          .lookbook-image {
            max-height: 50vh;
          }

          .book-wrapper {
            padding: 1.5rem 0.75rem;
          }
        }

        .art-header {
          text-align: center;
          margin-top: 50px;
          margin-bottom: 0.5rem;
        }
        .art-sub {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 0;
          color: #ddd;
        }
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
        @media (max-width: 768px) {
          .project-outline-container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          h1 {
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
          .masonry {
            padding-top: 40px !important;
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
            typing 2s steps(29, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>

      {/* ====== PAGE TITLE HEADER ====== */}
      <div style={{ marginTop: '6rem', marginBottom: '1.5rem', textAlign: 'center' }}>
      </div>

      <h1 className="art-header"><span className="typewriter-title">Welcome to My Art Gallery!</span></h1>
      <p style={{ color: "#ddd", lineHeight: "1.6", marginBottom: "-2.5rem",fontSize: "1.1rem", textAlign: "center", maxWidth: "1200px", margin: "0 auto 0.5rem", padding: "0 1rem" }}>
        A collection of art and design projects with a focus on visual storytelling and an emphasis on translating ideas into physical and digital spaces with purpose, including mural design at the Schwarzman Center, illustration for a creative writing publication, and visual campaigns for the Yale Hunger and Homelessness Action Project.
      </p>


      {/* ========== DESIGN WORK SECTION ========== */}
      <div style={{ marginBottom: "5rem" }}>
        <h2 style={{ textAlign: "left", marginTop: "3rem", marginBottom: "2rem", marginLeft: "clamp(1rem, 3vw, 2rem)", marginRight: "clamp(1rem, 3vw, 2rem)", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>
          Design Work
        </h2>

        {/* --- ECAASU --- */}
        <div id="ecaasu" style={{ marginBottom: "3rem", marginLeft: "clamp(1rem, 3vw, 2rem)", marginRight: "clamp(1rem, 3vw, 2rem)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "left", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>ECAASU</h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
                   "The <a href="https://www.ecaasu.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#d64545", textDecoration: "none" }}>East Coast Asian American Student Union (ECAASU)</a> is a 501(c)(3) nonprofit whose mission is to inspire, educate, and empower those interested in Asian, Asian American (A/A) issues. Run solely by volunteers, ECAASU’s advocacy work is conducted through outreach to A/A students and organizations across the country and educating individuals on becoming agents of change through the various programs we hold over the course of the year, including an annual conference."
          I was on the marketing and outreach team when Yale hosted the conference in 2023!</p>
          {/* Instagram-style grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2rem" }}>
            {/* Post 1 */}
            <div style={{ position: "relative", background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", background: "#242424", overflow: "hidden" }}>
                <img
                  src={ecaasuPosts[0].images[ecaasuPost1]}
                  alt={`ECAASU Post 1 - Image ${ecaasuPost1 + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {ecaasuPosts[0].images.length > 1 && (
                  <>
                    <button
                      onClick={() => setEcaasuPost1(prev => prev === 0 ? ecaasuPosts[0].images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setEcaasuPost1(prev => prev === ecaasuPosts[0].images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {ecaasuPosts[0].images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === ecaasuPost1 ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Post 2 */}
            <div style={{ position: "relative", background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", background: "#242424", overflow: "hidden" }}>
                <img
                  src={ecaasuPosts[1].images[ecaasuPost2]}
                  alt={`ECAASU Post 2 - Image ${ecaasuPost2 + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {ecaasuPosts[1].images.length > 1 && (
                  <>
                    <button
                      onClick={() => setEcaasuPost2(prev => prev === 0 ? ecaasuPosts[1].images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setEcaasuPost2(prev => prev === ecaasuPosts[1].images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {ecaasuPosts[1].images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === ecaasuPost2 ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Post 3 */}
            <div style={{ position: "relative", background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", background: "#242424", overflow: "hidden" }}>
                <img
                  src={ecaasuPosts[2].images[ecaasuPost3]}
                  alt={`ECAASU Post 3 - Image ${ecaasuPost3 + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {ecaasuPosts[2].images.length > 1 && (
                  <>
                    <button
                      onClick={() => setEcaasuPost3(prev => prev === 0 ? ecaasuPosts[2].images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setEcaasuPost3(prev => prev === ecaasuPosts[2].images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {ecaasuPosts[2].images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === ecaasuPost3 ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- YHHAP Fast --- */}
        <div id="yhhap-fast" style={{ marginBottom: "3rem", marginLeft: "clamp(1rem, 3vw, 2rem)", marginRight: "clamp(1rem, 3vw, 2rem)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "left", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>YHHAP FAST</h3>
            <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            "The <a href="https://yhhap.org/yhhap-fast" target="_blank" rel="noopener noreferrer" style={{ color: "#d64545", textDecoration: "none" }}>Yale Hunger and Homeless Action Project</a> Fast is YHHAP’s largest fundraiser of the year, and the largest student-run fundraiser on Yale’s campus. Once every semester, over 50% of the Yale student body donates their Yale Dining meal swipes for the day of the YHHAP Fast ahead of time. During the Fast, students forego their usual dining hall meal and eat out, often at one of the locally owned New Haven businesses that sponsor the Fast through in-kind food donations, lump sums, or student discounts during the Fast. 
            The monetary equivalent of these unused swipes in addition to donations from the Yale and New Haven communities usually total to over $10,000 raised each semester.  A successful Fast is critical for a successful YHHAP, and the fundraiser depends entirely on the support and participation of the broader Yale and New Haven community."
            Over my 3 years in YHHAP, I've experimented with different marketing strategies and designs including memes, a "wrapped" reel, and instruction manuals on Instagram!
          </p>
          {/* Meme Collage */}
          <div style={{ display: "grid", gridTemplateColumns: "40% 60%", gap: "1.5rem", marginTop: "2rem", marginBottom: "2rem", alignItems: "start" }}>
            {/* Left: Tall portrait image */}
            <div style={{ background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040", gridRow: "span 3" }}>
              <img
                src={`${import.meta.env.BASE_URL}YHHAP FAST WRAPPED (7).gif`}
                alt="YHHAP Fast Wrapped GIF"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  aspectRatio: "9/16",
                  display: "block"
                }}
              />
            </div>

            {/* Right: One tall Instagram-style scrollable box */}
            <div style={{ position: "relative", background: "#fff", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040", gridRow: "span 3" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", background: "#fff" }}>
                <img
                  src={yhhapMemeBoxData.images[yhhapMemeBox]}
                  alt={`YHHAP Fast Meme Box - Image ${yhhapMemeBox + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    aspectRatio: "8.5/10"
                  }}
                />
                {yhhapMemeBoxData.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setYhhapMemeBox(prev => prev === 0 ? yhhapMemeBoxData.images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setYhhapMemeBox(prev => prev === yhhapMemeBoxData.images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {yhhapMemeBoxData.images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === yhhapMemeBox ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Instagram-style Flyer Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2rem" }}>
            {/* Flyer Post 1 */}
            <div style={{ position: "relative", background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", background: "#242424", overflow: "hidden" }}>
                <img
                  src={yhhapFlyerPosts[0].images[yhhapFlyer1]}
                  alt={`YHHAP Fast Flyer 1 - Image ${yhhapFlyer1 + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {yhhapFlyerPosts[0].images.length > 1 && (
                  <>
                    <button
                      onClick={() => setYhhapFlyer1(prev => prev === 0 ? yhhapFlyerPosts[0].images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setYhhapFlyer1(prev => prev === yhhapFlyerPosts[0].images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {yhhapFlyerPosts[0].images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === yhhapFlyer1 ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Flyer Post 2 */}
            <div style={{ position: "relative", background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", background: "#242424", overflow: "hidden" }}>
                <img
                  src={yhhapFlyerPosts[1].images[yhhapFlyer2]}
                  alt={`YHHAP Fast Flyer 2 - Image ${yhhapFlyer2 + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {yhhapFlyerPosts[1].images.length > 1 && (
                  <>
                    <button
                      onClick={() => setYhhapFlyer2(prev => prev === 0 ? yhhapFlyerPosts[1].images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setYhhapFlyer2(prev => prev === yhhapFlyerPosts[1].images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {yhhapFlyerPosts[1].images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === yhhapFlyer2 ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Flyer Post 3 */}
            <div style={{ position: "relative", background: "#1a1a1a", borderRadius: "12px", overflow: "hidden", border: "1px solid #404040" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", background: "#242424", overflow: "hidden" }}>
                <img
                  src={yhhapFlyerPosts[2].images[yhhapFlyer3]}
                  alt={`YHHAP Fast Flyer 3 - Image ${yhhapFlyer3 + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {yhhapFlyerPosts[2].images.length > 1 && (
                  <>
                    <button
                      onClick={() => setYhhapFlyer3(prev => prev === 0 ? yhhapFlyerPosts[2].images.length - 1 : prev - 1)}
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setYhhapFlyer3(prev => prev === yhhapFlyerPosts[2].images.length - 1 ? 0 : prev + 1)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "none",
                        color: "#fff",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2
                      }}
                    >
                      ›
                    </button>
                    <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                      {yhhapFlyerPosts[2].images.map((_, idx) => (
                        <div key={idx} style={{ width: "6px", height: "6px", borderRadius: "50%", background: idx === yhhapFlyer3 ? "#d64545" : "rgba(255,255,255,0.5)" }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- Publications --- */}
        <div id="publications-features" style={{ marginBottom: "3rem", marginLeft: "clamp(1rem, 3vw, 2rem)", marginRight: "clamp(1rem, 3vw, 2rem)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "left", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>Publications/Features</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2rem" }}>
            {/* Publication Card 1 */}
            <a
              href="https://yaledailynews.com/blog/2025/01/24/in-schwarzman-collaboration-yale-visual-artists-re-present-themselves-with-a-look-back-at-freshman-year/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                }}
              >
                {/* Cover Image */}
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#242424",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}mzgallery8.JPG`}
                    alt="Yale Daily News Publication"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#d64545" }}>
                    Yale Daily News
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb", lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    In Schwarzman collaboration, Yale visual artists 're-present' themselves with a look back at freshman year
                  </p>
                </div>
              </div>
            </a>

            {/* Publication Card 2 */}
            <a
              href="https://yale-herald.com/2023/10/01/fortune-cookie/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#242424",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}[PUB1].png`}
                    alt="Yale Herald Publication"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#d64545" }}>
                    Yale Herald
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb", lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Fortune Cookie
                  </p>
                </div>
              </div>
            </a>

            {/* Publication Card 3 */}
            <a
              href="https://yale-herald.com/2023/10/15/homage-to-a-twin-xl/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#242424",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}[PUB2].png`}
                    alt="Yale Herald Publication"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#d64545" }}>
                    Yale Herald
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb", lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Homage to a Twin XL
                  </p>
                </div>
              </div>
            </a>

            {/* Publication Card 4 */}
            <a
              href="https://yale-herald.com/2023/09/24/nostalgia-rebellion-and-toast-with-avocado/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#242424",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}[PUB3].png`}
                    alt="Yale Herald Publication"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#d64545" }}>
                    Yale Herald
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb", lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Nostalgia, Rebellion, and Toast with Avocado
                  </p>
                </div>
              </div>
            </a>

            {/* Publication Card 5 */}
            <a
              href="https://yale-herald.com/2023/10/08/september-20th-i-teach-a-boy-that-cheating-is-bad/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#242424",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}[PUB4].png`}
                    alt="Yale Herald Publication"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#d64545" }}>
                    Yale Herald
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb", lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    September 20th: I Teach a Boy That Cheating is Bad
                  </p>
                </div>
              </div>
            </a>

            {/* Publication Card 6 */}
            <a
              href="https://yale-herald.com/2023/09/24/bottoms-sex-and-football-are-all-you-need/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #404040",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    background: "#242424",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}[PUB5].png`}
                    alt="Yale Herald Publication"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#d64545" }}>
                    Yale Herald
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb", lineHeight: "1.4", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Bottoms: Sex and Football Are All You Need
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ========== ART GALLERY SECTION ========== */}
        <div id="my-lookbook" style={{ marginBottom: "3rem", marginLeft: "clamp(1rem, 3vw, 2rem)", marginRight: "clamp(1rem, 3vw, 2rem)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "left", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>My Lookbook</h3>

          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left", marginBottom: "-2rem" }}>
            Please flip through my lookbook! Enjoy some sketches, painting, photography, and mixed media work :D. You'll find drawings from my sketchbook, architecture problem designs, LOTS of portraits, and some other visual side quests I've been on!
          </p>

          <div className="lookbook-container">
            <div className="book-wrapper">
              <button 
                className="lookbook-nav-button left" 
                onClick={goToPrevious}
                aria-label="Previous page"
              >
                ‹
              </button>
              
              <div className="book-page left">
                <img 
                  src={artworks[currentIndex].src} 
                  alt={`Artwork ${currentIndex + 1}`} 
                  className="lookbook-image"
                />
              </div>

              {currentIndex + 1 < artworks.length && (
                <div className="book-page right">
                  <img 
                    src={artworks[currentIndex + 1].src} 
                    alt={`Artwork ${currentIndex + 2}`} 
                    className="lookbook-image"
                  />
                </div>
              )}
              
              <button 
                className="lookbook-nav-button right" 
                onClick={goToNext}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          </div>
          
          <div className="lookbook-counter">
            {currentIndex + 1} - {Math.min(currentIndex + 2, artworks.length)} / {artworks.length}
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

