"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroIntro() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ended, setEnded] = useState(false);
  const [videoHidden, setVideoHidden] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay-with-sound is blocked by most browsers until a user gesture.
    // We attempt sound-on autoplay first; if blocked, we start muted autoplay so
    // the intro still runs, then unmute automatically on the first gesture.
    const start = async () => {
      try {
        video.muted = true;
        video.volume = 0;
        await video.play();
      } catch {
        // Ignore; we'll retry on gesture if needed.
      }

      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch {
        // Ignore; we'll unmute on gesture when allowed.
      }
    };

    void start();

    const tryUnmute = async () => {
      if (video.ended) return;
      try {
        await video.play();
      } catch {
        // Ignore.
      }
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
        if (!video.muted) {
          window.removeEventListener("pointerdown", tryUnmute);
          window.removeEventListener("keydown", tryUnmute);
          window.removeEventListener("scroll", tryUnmute);
        }
      } catch {
        // Keep listeners; another gesture may succeed.
      }
    };

    window.addEventListener("pointerdown", tryUnmute, { passive: true });
    window.addEventListener("keydown", tryUnmute);
    window.addEventListener("scroll", tryUnmute, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", tryUnmute);
      window.removeEventListener("keydown", tryUnmute);
      window.removeEventListener("scroll", tryUnmute);
    };
  }, []);

  useEffect(() => {
    if (!ended) return;
    const timeout = window.setTimeout(() => setVideoHidden(true), 800);
    return () => window.clearTimeout(timeout);
  }, [ended]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-obsidian">
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
            onEnded={() => setEnded(true)}
          >
            <source
              src="/sloptech-540p.mp4"
              type="video/mp4"
              media="(max-width: 720px)"
            />
            <source src="/sloptech-720p.mp4" type="video/mp4" />
          </video>
        </>
      )}

      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          ended ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!ended}
      >
        <div className="absolute inset-0 hero-checkerboard" aria-hidden />

        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/35 via-obsidian/55 to-obsidian" />

        <div className="relative grid h-full w-full place-items-center">
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-cyan/5 blur-3xl" />

          <div className="relative h-[min(88vw,88vh)] w-[min(88vw,88vh)]">
            <Image
              src="/slop-logo.png"
              alt="SLOP.TECHNOLOGY"
              fill
              priority
              className="animate-float object-contain drop-shadow-[0_0_70px_rgba(89,240,255,0.12)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
