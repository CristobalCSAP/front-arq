"use client";
import React, { useEffect, useState, useRef } from "react";

const MusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const API_BASE_URL = "https://msa-musica.onrender.com";

  // Obtener canciones del microservicio
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/songs`);
        const data = await res.json();
        setSongs(data);
      } catch (err) {
        console.error("Error al obtener canciones:", err);
      }
    };
    fetchSongs();
  }, []);

  // Función para cambiar canción
  const playSong = (index: number) => {
    setCurrentIndex(index);
    audioRef.current?.load();
    audioRef.current?.play();
  };

  const nextSong = () => {
    if (!songs.length) return;
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(nextIndex);
  };

  const prevSong = () => {
    if (!songs.length) return;
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  };

  // Obtener nombre legible sin extensión
  const getSongTitle = (filename: string) => filename.replace(".mp3", "");

  return (
    <div style={{ textAlign: "center", marginTop: "50px",color: "white", alignContent: "center"}}>
      <h2>Reproductor de música</h2>

      {songs.length > 0 ? (
        <>
          <p>Reproduciendo: {getSongTitle(songs[currentIndex])}</p>

          <audio ref={audioRef} controls autoPlay style={{ marginLeft: "70px", marginTop: "10px",width: "500px",}}>
            <source
              src={`${API_BASE_URL}/songs/${songs[currentIndex]}`}
              type="audio/mpeg"
            />
          </audio>

          <div style={{ marginTop: "5px" }}>
            <button onClick={prevSong} style={{ marginRight: "10px" }}>
              ⏮
            </button>
            <button onClick={nextSong}>⏭ </button>
          </div>
        </>
      ) : (
        <p>Cargando canciones...</p>
      )}
    </div>
  );
};

export default MusicPlayer;
