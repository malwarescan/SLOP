import type { ButtonHTMLAttributes } from "react";

type ChromeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function ChromeButton({ label, className = "", ...props }: ChromeButtonProps) {
  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-obsidian transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.18em] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(230,240,255,0.9) 0%, rgba(140,150,165,0.75) 45%, rgba(240,250,255,0.95) 100%)"
      }}
    >
      <span className="absolute inset-[1px] rounded-[13px] bg-obsidian/90" />
      <span className="relative z-10 text-[0.68rem] text-cyan sm:text-[0.72rem]">
        {label}
      </span>
    </button>
  );
}
