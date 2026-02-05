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
        <section className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none bg-obsidian" aria-hidden />
          <div className="absolute inset-0 z-0 pointer-events-none bg-oracle-grid opacity-80" aria-hidden />
          <div className="absolute inset-0 z-0 pointer-events-none hero-checkerboard opacity-25" aria-hidden />
          <div
            className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-obsidian/15 via-obsidian/55 to-obsidian"
            aria-hidden
          />

          <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-12 px-6 pb-10 pt-16">
            <div className="hero-unit col-span-12 px-6 py-10 sm:px-10 sm:py-12">
              <div className="relative z-10">
                {/* Eyebrow */}
                <div className="text-xs uppercase tracking-[0.18em] text-white/85">
                  Distribution with proof
                  <div className="hero-eyebrow-rule" />
                </div>

                {/* Headline */}
                <h1 className="hero-headline-tight mt-4 text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl">
                  TURN STRUCTURED TRUTH INTO
                  <br className="hidden sm:block" />
                  DISTRIBUTED MEDIA.
                </h1>

                {/* Subhead */}
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/92 sm:text-lg">
                  Generate platform-native media kits from verified sources, with proofs,
                  scheduling, and performance telemetry.
                </p>

                {/* Trust strip (chips) */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Provenance", "Controls", "Audit trail", "Measurable reach"].map((t) => (
                    <span
                      key={t}
                      className="hero-chip rounded-full px-3 py-1 text-xs text-white/88"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href="/studio"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-sm font-medium text-white transition hover:bg-white/14"
                  >
                    Open Operator Console
                  </Link>
                  <Link
                    href="/proof"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-6 text-sm font-medium text-white/85 transition hover:border-white/18 hover:text-white"
                  >
                    See Proof
                  </Link>
                </div>
              </div>

              <div className="relative z-10 mt-10">
                <DistroDiagram className="h-auto w-full" />
              </div>

              <div className="relative z-10 mt-8">
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
                      className="min-w-[220px] flex-1 rounded-card border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cyan">
                          {artifact.title}
                        </p>
                        <span className="shrink-0 rounded-full border border-cyan/30 bg-black/20 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.22em] text-cyan">
                          Proof
                        </span>
                      </div>
                      <p className="mt-3 text-xs text-white/85">{artifact.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
