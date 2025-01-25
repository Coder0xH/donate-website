'use client';

import { useState } from "react";

interface LogoItem {
  imgUrl: string;
  altText: string;
}

interface LogoWallProps {
  items?: LogoItem[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
}

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111"
}: LogoWallProps) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  const groupClass = [
    "flex-shrink-0",
    "flex",
    "items-center",
    "justify-around",
    "gap-[calc(var(--size)/14)]",
    "min-w-full",
    "animate-scrollX",
    direction === "vertical" && "flex-col min-h-full animate-scrollY"
  ]
    .filter(Boolean)
    .join(" ");

  const imageClass = [
    "bg-[var(--color-bg-accent)]",
    "rounded-md",
    "object-contain",
    "aspect-video",
    `w-[var(--size)] p-[calc(var(--size)/10)]`,
    direction === "vertical" &&
    "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        ["--size" as string]: size,
        ["--duration" as string]: duration,
        ["--color-text" as string]: textColor,
        ["--color-bg" as string]: bgColor,
        ["--color-bg-accent" as string]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)"
      } as React.CSSProperties}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className={groupClass}>
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className={imageClass}
            />
          ))}
        </div>
        <div aria-hidden="true" className={groupClass}>
          {items.map((item, idx) => (
            <img
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={imageClass}
            />
          ))}
        </div>
      </div>

      <div
        className={`${marqueeClass}`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className={`${groupClass} reverse-x`}>
          {items.map((item, idx) => (
            <img
              key={`rev-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={imageClass}
            />
          ))}
        </div>
        <div aria-hidden="true" className={`${groupClass} reverse-x`}>
          {items.map((item, idx) => (
            <img
              key={`dup2-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={imageClass}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default LogoWall;
