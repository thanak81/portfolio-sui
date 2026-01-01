import React from "react";
import { motion } from "framer-motion";

type Props = {
  tags?: string[];
  id: number;
  title?: string;
  description?: string;
  year?: string;
  colorScheme?: "blue" | "purple" | "pink" | "orange" | "green" | "teal";
  onViewDetails?: () => void;
  activeCard?: boolean;
};

function ProjectCard({
  tags,
  id,
  title = "Project Name",
  description = "A brief description of what this project does",
  year = "2024",
  colorScheme = "blue",
  onViewDetails,
  activeCard,
}: Props) {
  const colors = {
    blue: {
      glow: "shadow-[0_0_60px_-20px_rgba(59,130,246,0.6)]",
      energy: "bg-blue-400",
      text: "group-hover:text-blue-300",
    },
    purple: {
      glow: "shadow-[0_0_60px_-20px_rgba(168,85,247,0.6)]",
      energy: "bg-purple-400",
      text: "group-hover:text-purple-300",
    },
    pink: {
      glow: "shadow-[0_0_60px_-20px_rgba(236,72,153,0.6)]",
      energy: "bg-pink-400",
      text: "group-hover:text-pink-300",
    },
    orange: {
      glow: "shadow-[0_0_60px_-20px_rgba(249,115,22,0.6)]",
      energy: "bg-orange-400",
      text: "group-hover:text-orange-300",
    },
    green: {
      glow: "shadow-[0_0_60px_-20px_rgba(34,197,94,0.6)]",
      energy: "bg-green-400",
      text: "group-hover:text-green-300",
    },
    teal: {
      glow: "shadow-[0_0_60px_-20px_rgba(20,184,166,0.6)]",
      energy: "bg-teal-400",
      text: "group-hover:text-teal-300",
    },
  };

  const scheme = colors[colorScheme];

  return (
    <motion.div
      layoutId={`project-${id}`}
      style={{
        WebkitMaskImage: `
    radial-gradient(
      120% 80% at 50% 100%,
      transparent 0%,
      black 60%
    ),
    linear-gradient(
      to bottom,
      black 65%,
      transparent 100%
    )
  `,
        WebkitMaskComposite: "destination-in",
        maskImage: `
    radial-gradient(
      120% 80% at 50% 100%,
      transparent 0%,
      black 60%
    ),
    linear-gradient(
      to bottom,
      black 65%,
      transparent 100%
    )
  `,
        maskComposite: "intersect",
      }}
      className={`
        group
        relative
        h-100
        w-full
        rounded-2xl
        rounded-b-none
        p-6
        flex flex-col
        cursor-pointer
        bg-zinc-900/50
        border border-white/5
        border-b-0
        transition-all duration-500
        hover:-translate-y-1
        ${scheme.glow}
      `}
    >
      {/* Nebula aura */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`
              w-9 h-9 rounded-full
              ${scheme.energy}
              shadow-[0_0_20px_rgba(255,255,255,0.4)]
              group-hover:scale-110
              transition-transform duration-300
            `}
          />
          <span className="text-xs text-zinc-400">{year}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className={`
              text-lg font-semibold text-zinc-100
              transition-colors duration-300
              ${scheme.text}
            `}
          >
            {title}
          </h3>

          <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
            {description}
          </p>
          {tags && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-zinc-400 bg-transparent px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {activeCard && (
            <div className="pt-6">
              <button
                onClick={onViewDetails}
                className="text-sm text-zinc-400 hover:text-zinc-600 flex cursor-pointer items-center gap-2 transition-colors"
              >
                View details
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Button */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
