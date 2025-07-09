import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message successfully sent!");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <NavBar />
      <section className="contact-page">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about sports gear, orders, or anything else? Reach out to us anytime.</p>
            <ul>
              <li><strong>Address:</strong> VOXX_HELEXIA HUB, India</li>
              <li><strong>Phone:</strong> +91 9876543210</li>
              <li><strong>Email:</strong> support@VOXX-HELEXIA.com</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Drop Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}