"use client";

import { useEffect, useRef, useState } from "react";
import DistroDiagram from "./DistroDiagram";

export default function HeroIntro() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ended, setEnded] = useState(false);
  const [videoHidden, setVideoHidden] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
        setSoundOn(!video.muted);
      } catch {
        // Autoplay-with-sound can still be blocked; keep muted.
        video.muted = true;
        video.volume = 0;
        setSoundOn(false);
      }
      return;
    }

    video.muted = true;
    video.volume = 0;
    setSoundOn(false);
  };

  useEffect(() => {
    if (!ended) return;
    const timeout = window.setTimeout(() => setVideoHidden(true), 800);
    return () => window.clearTimeout(timeout);
  }, [ended]);

  return (
    <div className="relative min-h-screen min-h-[100svh] w-full overflow-hidden bg-obsidian">
      {!videoHidden && (
        <>
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              ended ? "opacity-0" : "opacity-100"
            }`}
            playsInline
            preload="auto"
            autoPlay
            muted
            controls={false}
            poster="/sloptech-poster.jpg"
            onEnded={() => {
              setEnded(true);
              setSoundOn(false);
            }}
          >
            <source
              src="/sloptech-540p.mp4"
              type="video/mp4"
              media="(max-width: 720px)"
            />
            <source src="/sloptech-720p.mp4" type="video/mp4" />
          </video>

          {!ended && (
            <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
              <button
                type="button"
                onClick={() => void toggleSound()}
                className="rounded-full border border-white/15 bg-obsidian/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-steel transition hover:text-cyan"
                aria-pressed={soundOn}
                aria-label={soundOn ? "Mute intro video" : "Unmute intro video"}
              >
                {soundOn ? "Sound On" : "Sound Off"}
              </button>
            </div>
          )}
        </>
      )}

      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          ended ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!ended}
      >
        <div className="absolute inset-0 bg-obsidian" aria-hidden />
        <div className="absolute inset-0 bg-oracle-grid opacity-80" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-obsidian/15 via-obsidian/55 to-obsidian"
          aria-hidden
        />

        <div className="relative mx-auto flex h-full w-full max-w-[1240px] items-center justify-center px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
          <DistroDiagram className="h-auto w-full max-w-[980px]" />
        </div>
      </div>
    </div>
  );
}
