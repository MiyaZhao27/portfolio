import DogOutlineGuide from "../components/DogOutlineGuide.jsx";
import ShinyEmbed from "../components/ShinyEmbed.jsx";

export default function ComputationalProjects() {
  const crypticPaper = `${import.meta.env.BASE_URL}The Minute Cryptic Decrypted An Algorithmic Approach to Solving.pdf`;
  const crypticDecrypter = `${import.meta.env.BASE_URL}Minute Cryptic Decrypter.pdf`;
  const yaleMapsDemoMp4 = `${import.meta.env.BASE_URL}Yale%20Maps.mp4`;
  const yaleMapsDemoWebm = `${import.meta.env.BASE_URL}Yale%20Maps%20Demo.webm`;
  const yaleMapsDemoMov = `${import.meta.env.BASE_URL}Yale%20Maps%20Demo.mov`;

  const outlineSections = [
    {
      title: "Computational Projects/Websites",
      items: [
        "yale-maps",
        "The Minute Cryptic Decrypted: An Algorithmic Approach to Solving Wordplay Puzzles",
      ]
    },
    {
      title: "Data Visualization Tools",
      items: [
        "Finding Home: Visualizing Property Values Along the Metro-North Line",
        "L-Asparaginase Feature Analysis Dashboard",
        "EV Charging Station Explorer",
      ]
    }
  ];

  const frameStyle = {
    border: "none",
    outline: "none",
    background: "#111",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    width: "100%",
    height: "clamp(400px, 50vw, 500px)",
    minHeight: "400px",
  };

  const containerStyle = {
    background: "#222",
    color: "#fff",
    minHeight: "100vh",
    padding: "clamp(2rem, 6vw, 4rem) clamp(1rem, 8vw, 100px) clamp(1rem, 4vw, 2rem) clamp(1rem, 8vw, 100px)",
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "none",
  };

  const apps = [
    {
      name: "Finding Home: Visualizing Property Values Along the Metro-North Line",
      url: "https://mz27.shinyapps.io/pset5-Property-Values-Interactions-Splines-Shiny-Plotly/",
      desc:
        "This project was a homework assignment birthed from my data science instructor's search for a home with his fiancée after their wedding. They needed to find a place between New York City and New Haven along the Metro-North line, balancing factors such as commute time, housing price, neighborhood diversity, and accessibility. Using an interactive R Shiny dashboard with Plotly visualizations, the project enabled dynamic exploration of housing features and how they varied across the region. A Leaflet map highlighted top candidate neighborhoods based on the couple's priorities, providing a clear and engaging way to compare potential locations.",
      height: 820,
    },
    {
      name: "L-Asparaginase Feature Analysis Dashboard",
      url: "https://mz27.shinyapps.io/aspgfeatures/",
      desc:
        "A feature analysis dashboard designed for L-asparaginase datasets, providing interactive filtering, model-ready exports, and visual summaries for residue-level properties. Structural and biochemical information was imported directly from the Protein Data Bank (PDB), enabling accurate exploration of residue-specific features. The dashboard directly supported the logistic regression model in our iGEM protein functionalization pipeline, helping refine site selection for later lipid functionalization. The built-in feature one-hot converter streamlined data preparation by allowing users to select residues by feature and export one-hot encoded values for use in machine learning models.",
      height: 820,
    },
    {
      name: "EV Charging Station Explorer",
      url: "https://mz27.shinyapps.io/EVshinyapp/",
      desc:
        "This project is an interactive Shiny app designed to help users explore EV charging stations across the United States. Users can filter stations by state, network, opening date, charging level, and availability, and view results on an interactive Leaflet map with clear visual markers. The project was completed as a homework assignment but felt particularly relevant given the growing support for electric vehicles and government subsidies encouraging their adoption. The app allows for easy identification of convenient, accessible charging locations, helping users plan routes and evaluate infrastructure availability.",
      height: 820,
    },
  ];

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
          .project-outline-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 1rem !important;
          }
          .section-responsive {
            flex-direction: column !important;
          }
          .pdf-container-responsive {
            width: 100% !important;
            max-width: 100% !important;
            flex: 1 1 100% !important;
          }
          .text-responsive {
            text-align: left !important;
            align-items: flex-start !important;
            width: 100% !important;
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
            typing 2s steps(25, end),
            blink-caret 0.75s step-end infinite,
            remove-caret 0.01s 2s forwards;
        }
      `}</style>
    <div style={containerStyle} className="project-outline-container">
      <DogOutlineGuide sections={outlineSections} />
      <div style={contentStyle} className="project-content">
      <h1 className="ep-header"><span className="typewriter-title">Computational Projects</span></h1>
      <p className="ep-sub" style={{ marginBottom: "3rem", textAlign: "center" }}>
        A collection of computational projects spanning algorithmic problem-solving, interactive data visualizations, 
        and web applications. Each project demonstrates technical innovation and practical implementation.
      </p>

      {/* ===== Computational Projects/Websites ===== */}
      <h2 style={{ textAlign: "left", margin: "1rem 0 2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>Computational Projects/Websites</h2>

      {/* --- yale-maps --- */}
      <div id="yale-maps" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>Yale-Maps</h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            Yale-Maps started as my Catalyst final project, born out of a personal frustration with booking rooms on campus. At Yale, it often feels like every library, practice studio, and cultural center room operates on a completely different booking system. I wanted to build a "one-stop shop" where students could locate exactly what they need in seconds and intuitively.
          </p>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            Whether you are looking for an empty room to host an event, determining if the Yuttle is actually faster than walking, or searching for the nearest AED, Yale-Maps brings it all together. My goal was to end the era of you looking at ten Google searches that lead to a broken URL by consolidating public data into one reliable space. 
            Looking ahead to next semester, I hope to recruit a team in the Yale Computer Society to help implement enhanced safety features, integrate live Yuttle tracking data, and actually launch the product online to better serve the evolving needs of the student body.
          </p>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
          Look below for a video demo of the current functionality!
          </p>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <video
              controls
              preload="metadata"
              playsInline
              style={{ width: "100%", maxWidth: "1000px", aspectRatio: "16 / 9", height: "auto", maxHeight: "60vh", borderRadius: "12px", border: "1px solid #333", background: "#111" }}
            >
              <source src={yaleMapsDemoMp4} type="video/mp4" />
              <source src={yaleMapsDemoWebm} type="video/webm" />
              <source src={yaleMapsDemoMov} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>

            <div style={{ marginTop: ".75rem", width: "100%", textAlign: "center" }}>
              <a
                href={yaleMapsDemoMp4}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block", padding: ".6rem .9rem", borderRadius: "999px", border: "1px solid #444", background: "#222", color: "#fff", textDecoration: "none" }}
              >
                If the video does not play, click here to download! ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- The Minute Cryptic --- */}
      <div id="the-minute-cryptic-decrypted-an-algorithmic-approach-to-solving-wordplay-puzzles" style={{ marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", textAlign: "left", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>The Minute Cryptic Decrypted: An Algorithmic Approach to Solving Wordplay Puzzles</h3>
          <p style={{ color: "#ddd", lineHeight: "1.6", fontSize: "1.05rem", textAlign: "left" }}>
            Minute Cryptic is a crossword game that incorporates letter-play and wordplay to create linguistic puzzles. 
            We developed a two-stage pipeline combining machine learning classification with specialized solving algorithms 
            to automatically solve these puzzles. Our approach first classifies puzzles into three categories (anagrams, 
            hiddens, or selectors) using logistic regression with GloVe embeddings, then applies tailored algorithms for 
            each type. Despite limited training data (39 examples), our system achieves 69% classification accuracy. The 
            pipeline achieved a 38% end-to-end solving accuracy; however, the correct answer was found in the candidate 
            list 67% of the time. This work contributes to understanding how computational methods can solve pun-based 
            puzzles and demonstrates the challenges LLMs face in capturing human nuances in communication.
          </p>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <a
              href="https://github.com/MiyaZhao27/MinuteCrypticDecrypter"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: ".6rem .9rem",
                borderRadius: "999px",
                border: "1px solid #444",
                background: "#222",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              View Scripts and Results on GitHub ↗
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 calc(50% - 1rem)", minWidth: "300px" }}>
            <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#fff" }}>Introductory Presentation</h4>
            <object data={crypticDecrypter} type="application/pdf" style={frameStyle}>
              <p>
                Unable to display PDF.{" "}
                <a href={crypticDecrypter} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                  Click here to open it
                </a>
                .
              </p>
            </object>
          </div>
          <div style={{ flex: "1 1 calc(50% - 1rem)", minWidth: "300px" }}>
            <h4 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#fff" }}>Final Findings</h4>
            <object data={crypticPaper} type="application/pdf" style={frameStyle}>
              <p>
                Unable to display PDF.{" "}
                <a href={crypticPaper} target="_blank" rel="noreferrer" style={{ color: "#9bd" }}>
                  Click here to open it
                </a>
                .
              </p>
            </object>
          </div>
        </div>
      </div>

      {/* ===== Shiny apps (stacked) ===== */}
      <h2 style={{ textAlign: "left", margin: "1rem 0 2rem", fontSize: "2rem", borderBottom: "2px solid #d64545", paddingBottom: "0.5rem" }}>Data Visualization Tools</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "4rem" }}>
        {apps.map((a, i) => {
          const sectionId = a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
          <div key={i} id={sectionId} style={{ width: "100%", margin: "0 auto" }}>
            <h3 style={{ textAlign: "left", marginBottom: "0.5rem", borderBottom: "1px solid #fff", paddingBottom: "0.5rem" }}>{a.name}</h3>
            <p className="ep-sub" style={{ textAlign: "left", marginBottom: "1rem" }}>{a.desc}</p>
            <ShinyEmbed url={a.url} title={a.name} height={a.height} />
            <div style={{ textAlign: "center", marginTop: ".75rem" }}>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: ".6rem .9rem",
                  borderRadius: "999px",
                  border: "1px solid #444",
                  background: "#222",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Open in new tab ↗
              </a>
            </div>
          </div>
          );
        })}
      </div>
      </div>
    </div>
    </>
  );
}
