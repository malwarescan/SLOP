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

        <div className="relative mx-auto grid h-full w-full max-w-[1240px] grid-cols-12 items-start px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <section className="rounded-[24px] border border-white/10 bg-black/55 p-7 shadow-[0_22px_70px_rgba(0,0,0,0.6)] backdrop-blur-[16px] sm:p-8 lg:rounded-[28px] lg:p-12 xl:p-14">
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-200/90">
                  Distribution with proof
                </p>
                <div className="mt-3 h-px w-6 bg-white/15" aria-hidden />

                <h1 className="mt-4 text-[2.4rem] font-semibold uppercase leading-[1.02] tracking-[0.02em] text-slate-100 drop-shadow-[0_2px_0_rgba(0,0,0,0.35)] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.25rem]">
                  <span className="block">Turn structured truth</span>
                  <span className="block">into distributed media.</span>
                </h1>

                <p className="mt-5 max-w-[66ch] text-[0.95rem] leading-relaxed text-slate-100/90 sm:text-[1.05rem]">
                  Generate platform-native media kits from verified sources, with proofs,
                  scheduling, and performance telemetry.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["Provenance", "Controls", "Audit trail", "Measurable reach"].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-100/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan/80" aria-hidden />
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/studio"
                    className="inline-flex h-12 w-full items-center justify-center rounded-button border border-cyan/50 bg-cyan/10 px-6 text-[0.7rem] uppercase tracking-[0.22em] text-cyan shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-shadow hover:shadow-[0_0_0_1px_rgba(89,240,255,0.18),0_0_30px_rgba(89,240,255,0.16),0_18px_50px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 sm:w-auto"
                  >
                    Open Operator Console
                  </Link>
                  <Link
                    href="/proof"
                    className="inline-flex h-12 w-full items-center justify-center rounded-button border border-white/10 bg-black/20 px-6 text-[0.7rem] uppercase tracking-[0.22em] text-slate-200/80 transition hover:bg-white/5 hover:text-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40 sm:w-auto"
                  >
                    See Proof
                  </Link>
                </div>
              </div>

              <div className="mt-10 rounded-card border border-white/10 bg-black/20 p-4 sm:p-5">
                <DistroDiagram className="h-auto w-full" />
              </div>

              <div className="mt-8">
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
                      <p className="mt-3 text-xs text-slate-200/75">{artifact.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
