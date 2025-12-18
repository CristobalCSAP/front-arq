"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.replace("/");
  };

  return (
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

      {/* Logo */}
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

      {/* Formulario centrado */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.65)",
          padding: "30px",
          borderRadius: "16px",
          width: "320px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px" }}>
          Iniciar sesión
        </h2>

        <input style={{ color: "white", marginBottom: "20px" }}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input style={{ color: "white", marginBottom: "20px" }}
          type="password"
          placeholder="Contraseña"
          onChange={e => setPassword(e.target.value)}
          
        />

        <button style={buttonStyle} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#1DB954",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};
