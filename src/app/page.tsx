import React from "react";
import Image from "next/image";
import MusicPlayer from "../components/MusicPlayer";
import AuthGuard from "./AuthGuard";

function App() {
  return (
    <AuthGuard>
      <div className="hero">
        {/* Fondo con blur */}
        <div className="background">
          <Image
            src="/collage.jpg"
            alt="Fondo SoundHub"
            fill
            priority
          />
        </div>

        {/* Logo SoundHub */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
        >
          <Image
            src="/soundhublogo1.png"
            alt="Logo SoundHub"
            width={420}
            height={120}
            priority
          />
        </div>

        {/* Reproductor superpuesto */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            background: "rgba(0,0,0,0.6)",
            padding: "10px",
            borderRadius: "12px",
          }}
        >
          <MusicPlayer />
        </div>
      </div>
    </AuthGuard>
  );
}

export default App;
