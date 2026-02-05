"use client";

import Link from "next/link";
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
          ended ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!ended}
      >
        <div className="absolute inset-0 bg-obsidian" aria-hidden />
        <div className="absolute inset-0 bg-oracle-grid opacity-80" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-obsidian/15 via-obsidian/55 to-obsidian"
          aria-hidden
        />

        <div className="relative mx-auto flex h-full w-full max-w-[1240px] flex-col items-center px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
          <div className="w-full max-w-[980px] text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-steel">
              Distribution with proof
            </p>
            <h1 className="mt-5 text-3xl font-semibold uppercase tracking-[0.1em] sm:text-5xl sm:tracking-[0.12em]">
              Turn structured truth into distributed media.
            </h1>
            <p className="mt-4 text-sm text-steel sm:text-base">
              Slop takes verified inputs and outputs platform-native media kits with proof,
              scheduling, and performance telemetry.
            </p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] text-steel">
              Built for CEOs: provenance, controls, measurable reach.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center rounded-button border border-cyan/40 bg-obsidian/70 px-6 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-cyan shadow-[0_0_24px_rgba(89,240,255,0.14)] transition hover:bg-cyan/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70"
              >
                Open Operator Console
              </Link>
              <Link
                href="/proof"
                className="inline-flex items-center justify-center rounded-button border border-white/10 bg-obsidian/55 px-6 py-3 text-[0.7rem] uppercase tracking-[0.25em] text-steel transition hover:bg-white/5 hover:text-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40"
              >
                See Proof
              </Link>
            </div>
          </div>

          <div className="mt-10 w-full max-w-[1120px]">
            <DistroDiagram className="h-auto w-full" />
          </div>

          <div className="mt-8 w-full max-w-[1120px]">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                {
                  title: "30s Short (9:16)",
                  desc: "Hook, captions, b-roll cut, OG images, proof packet."
                },
                { title: "X Thread Kit", desc: "8 posts, OG image set, UTMs, receipts." },
                {
                  title: "LinkedIn Carousel",
                  desc: "7 slides, title copy, caption variants, proof."
                },
                { title: "Newsletter Issue", desc: "Subject lines, body, sources, links." },
                { title: "Press Kit", desc: "Boilerplate, quotes, claims list, citations." }
              ].map((artifact) => (
                <div
                  key={artifact.title}
                  className="min-w-[220px] flex-1 rounded-card border border-white/10 bg-charcoal/70 p-4 shadow-subtleBorder"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.25em] text-cyan">
                      {artifact.title}
                    </p>
                    <span className="shrink-0 rounded-full border border-cyan/30 bg-obsidian/60 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.25em] text-cyan">
                      Proof
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-steel">{artifact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
