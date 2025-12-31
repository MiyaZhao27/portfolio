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
            I'm a third-year pursuing my Bachelors of Science in Statistics and Data Science with a Certificate in Programming at Yale University.
          </p>
          <p className="ep-sub">
            My diverse experience in research development, the visual arts, education, and event planning has been instrumental in shaping my skill set and passion for bringing things from  <strong> ideation to implementation</strong>. The core principles that guide me and the roles I take on include <strong>creativity, a people-first mindset, and accessibility</strong>. 
            This commitment to turning vision into reality <strong>with intentionality</strong> is what drives my interest in Product Management, particularly within (Bio)Tech Development, Strategy, and Data Analytics. I want to do work that solves real-world problems with high effort and attention to detail no matter the scale of the project.
          </p>
          <p className="ep-sub">
            This portfolio is a documentation of the work I'm most proud of, showcasing how concepts are translated into <strong>tangible products and initiatives designed to thrive</strong>.
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
