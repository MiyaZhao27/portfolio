import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Art from "./pages/Art.jsx";
import BiologyResearch from "./pages/BiologyResearch.jsx";
import ComputationalProjects from "./pages/ComputationalProjects.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import EventPlanning from "./pages/EventPlanning.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <main
        style={{
          paddingTop: "20px",
          padding: "clamp(1rem, 4vw, 2rem)",
          minHeight: "100vh",
          background: "#1a1a1a",
          color: "#e8e8e8",
        }}
      >
        <Routes>
          <Route
  path="/"
  element={
    <div className="home-page">
      <h1 className="hero-title"> Hiya! I'm Miya </h1>
      <div className="hero-container">
        <img
          src={`${import.meta.env.BASE_URL}headshot.png`}
          alt="Miya Zhao headshot"
          className="hero-image"
        />
        <div className="hero-text">
          <p className="ep-sub">
            Welcome to my Portfolio! 
          </p>
          <p className="ep-sub">
            I’m a third-year at Yale University pursuing a B.S. in Statistics and Data Science with a Certificate in Programming. My work is driven by a simple idea: technology should make complex systems accessible and intuitive for the people who use them.
          </p>
          <p className="ep-sub">
            Growing up in an immigrant household, I often helped my family navigate forms, services, and online systems that weren’t designed with their needs in mind. Those experiences showed me how frustrating everyday systems can be when they ignore the user, and how powerful thoughtful technology can be in lowering barriers and connecting people to the resources they need. That perspective shapes the projects I pursue and the solutions I build today.
          </p>
          <p className="ep-sub">
            My diverse experience in research, product development, and community engagement has shaped my skill set and passion for bringing ideas from ideation to implementation. At Yale, I’ve applied this through projects like Yale Maps, leading the iGEM synthetic biology team, and contributing to initiatives with the Asian American Cultural Center. The principles that guide me, creativity, a people-first mindset, and accessibility, drive my interest in Product Management, particularly within (Bio)Tech Development, Strategy, and Data Analytics. I aim to solve real-world problems with focus, intentionality, and attention to detail.
          </p>
        </div>
      </div>
    </div>
  }
/>
          <Route path="/computational-projects" element={<ComputationalProjects />} />
          <Route path="/biology-research" element={<BiologyResearch />} />
          <Route path="/event-planning" element={<EventPlanning />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </main>
    </div>
  );
}
