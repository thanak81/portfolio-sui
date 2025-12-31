import React from "react"
import { motion } from "framer-motion"

type Props = {
  id: number
  title?: string
  description?: string
  tags?: string[]
  year?: string
  colorScheme?: "blue" | "purple" | "pink" | "orange" | "green" | "teal"
}

function ProjectCard({
  id,
  title = "Project Name",
  description = "A brief description of what this project does",
  tags = ["Next.js", "TypeScript"],
  year = "2024",
  colorScheme = "blue",
}: Props) {
  const colors = {
    blue: {
      glow: "shadow-[0_0_60px_-20px_rgba(59,130,246,0.6)]",
      energy: "bg-blue-400",
      text: "group-hover:text-blue-300",
      aura: "from-blue-500/20",
    },
    purple: {
      glow: "shadow-[0_0_60px_-20px_rgba(168,85,247,0.6)]",
      energy: "bg-purple-400",
      text: "group-hover:text-purple-300",
      aura: "from-purple-500/20",
    },
    pink: {
      glow: "shadow-[0_0_60px_-20px_rgba(236,72,153,0.6)]",
      energy: "bg-pink-400",
      text: "group-hover:text-pink-300",
      aura: "from-pink-500/20",
    },
    orange: {
      glow: "shadow-[0_0_60px_-20px_rgba(249,115,22,0.6)]",
      energy: "bg-orange-400",
      text: "group-hover:text-orange-300",
      aura: "from-orange-500/20",
    },
    green: {
      glow: "shadow-[0_0_60px_-20px_rgba(34,197,94,0.6)]",
      energy: "bg-green-400",
      text: "group-hover:text-green-300",
      aura: "from-green-500/20",
    },
    teal: {
      glow: "shadow-[0_0_60px_-20px_rgba(20,184,166,0.6)]",
      energy: "bg-teal-400",
      text: "group-hover:text-teal-300",
      aura: "from-teal-500/20",
    },
  }

  const scheme = colors[colorScheme]

  return (
    <motion.div
      layoutId={`project-${id}`}
      className={`
        group
        relative
        h-[400px]
        w-full
        rounded-2xl
        p-6
        flex flex-col
        cursor-pointer
        bg-zinc-900/50
        backdrop-blur-xl
        border border-white/5
        transition-all duration-500
        hover:-translate-y-1
        ${scheme.glow}
      `}
    >
      {/* Nebula aura */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon / Energy core */}
      <div className="relative flex items-center justify-between mb-5">
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
      <div className="relative flex flex-col gap-2 flex-1">
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
      </div>

      {/* Tags */}
      <div className="relative flex gap-2 mt-auto text-xs text-zinc-500">
        {tags.slice(0, 3).map((tag, index) => (
          <span key={index}>
            {tag}
            {index < tags.slice(0, 3).length - 1 && " •"}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard
