"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
export const projects = [
  {
    id: 1,
    title: "Resume Builder",
    color: "blue" as const,
    tags: ["Next.js", "TypeScript", "OpenAI"],
  },
  { id: 2, title: "E-commerce App", color: "purple" as const },
  { id: 3, title: "Task Manager", color: "pink" as const },
  { id: 4, title: "Portfolio Site", color: "orange" as const },
  { id: 5, title: "Chat App", color: "green" as const },
  { id: 6, title: "Dashboard", color: "teal" as const },
]


export const socialBrandColors = {
  facebook: "hover:text-[#1877F2]",
  instagram: "hover:text-[#E4405F]",
  linkedin: "hover:text-[#0A66C2]",
  github: "hover:text-zinc-100",
} as const


export default function Home() {

  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      {/* Avatar Glow */}
      <motion.div
        className="absolute w-[260px] h-[260px] rounded-full bg-blue-500/20 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Avatar */}
      <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.03}>
        <div className="relative w-48 h-48">
          {/* Breathing glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl pointer-events-none"
            animate={{ opacity: [0.15, 0.28, 0.15] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
        relative
        w-full
        h-full
        rounded-full
        overflow-hidden
        border border-white/10
        bg-zinc-900
      "
          >
            <Image
              src="/images/me.jpg"
              alt="Thanak Mech"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </Tilt>


      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-3xl md:text-4xl font-semibold text-zinc-100"
      >
        Thanak Mech
      </motion.h1>

      {/* Subtitle (optional but recommended) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-2 text-sm text-zinc-400"
      >
        Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="mt-5 flex items-center gap-5"
      >
        <SocialIcon
          href="https://facebook.com/yourname"
          label="Facebook"
          icon={<FaFacebookF />}
          brand="facebook"
        />
        <SocialIcon
          href="https://instagram.com/yourname"
          label="Instagram"
          icon={<FaInstagram />}
          brand="instagram"
        />
        <SocialIcon
          href="https://linkedin.com/in/yourname"
          label="LinkedIn"
          icon={<FaLinkedinIn />}
          brand="linkedin"
        />
        <SocialIcon
          href="https://github.com/yourname"
          label="GitHub"
          icon={<FaGithub />}
          brand="github"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="mt-6 max-w-xl text-center space-y-3"
      >
        <p className="text-sm text-zinc-400 leading-relaxed">
          Graduate student from RUPP. Currently im working
        </p>

        {/* <p className="text-xs text-zinc-500 italic">
          “I can do anything, just give me time.”
        </p> */}
      </motion.div>
      <motion.button
        onClick={() => router.push("/projects")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="
    mt-10
    flex items-center justify-center
    text-zinc-400
    hover:text-zinc-100
    transition-colors
    z-10
  "
        aria-label="Explore projects"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>

    </div>
  )
}
function SocialIcon({
  href,
  icon,
  label,
  brand,
}: {
  href: string
  icon: React.ReactNode
  label: string
  brand: keyof typeof socialBrandColors
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        text-zinc-400
        ${socialBrandColors[brand]}
        transition-colors duration-300
        text-lg
        z-10
      `}
    >
      {icon}
    </a>
  )
}
