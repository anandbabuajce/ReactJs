import { useState, useEffect, useRef } from "react";
import women from "../assets/women.jpg";
import sport from "../assets/sport.jpg";

const images = [women,sport];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div
      className="hero"
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={images[current]}
          alt="offer"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
      <div style={{ marginTop: "16px" }}>
        <button onClick={prevSlide} style={{ marginRight: "8px" }}>◀</button>
        <button onClick={nextSlide}>▶</button>
      </div>
    </div>
  );
}