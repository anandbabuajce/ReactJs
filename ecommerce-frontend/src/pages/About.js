import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <Header />
      <NavBar />

      <section className="about-page">
        <div className="about-hero">
          <h1>About VOXX HELEXIA</h1>
          <p>Promoting Sports and a Healthy Lifestyle Across India 🇮🇳</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission 🎯</h2>
            <p>
              VOXX HELEXIA is committed to nurturing sports talent and spreading the joy of fitness throughout India. 
              Our platform connects sports lovers with quality sports gear, coaches, and events — making sports accessible to everyone.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision 🌟</h2>
            <p>
              To create a healthier, more active India by supporting athletes of all levels and encouraging participation in sports across all ages, communities, and cities.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do 🏆</h2>
            <ul>
              <li>Provide top-quality sporting equipment at affordable prices.</li>
              <li>Offer coaching and training guidance through our network of certified trainers.</li>
              <li>Host sporting events and skill-development workshops in cities and villages alike.</li>
              <li>Promote a vibrant sporting culture — from grassroots to professional level.</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Contact Us 🤝</h2>
            <p>
              Ready to join the movement? Reach us at{" "}
              <a href="mailto:support@voxxhelexia.com">support@voxxhelexia.com</a> or visit our{" "}
              <a href="/contact">Contact Page</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
