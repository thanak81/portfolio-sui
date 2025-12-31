"use client"

import { motion } from "framer-motion"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center h-full w-full text-center relative"
    >
      {/* Soft glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-semibold text-zinc-100"
      >
        Contact Me
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-md text-sm text-zinc-400 leading-relaxed"
      >
        anytime :D
      </motion.p>

      {/* Email CTA */}
      <motion.a
        href="mailto:your@email.com"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="
          z-10
          mt-8
          px-6 py-3
          rounded-full
          border border-white/10
          text-sm text-zinc-100
          hover:border-white/30
          hover:bg-white/5
          transition
        "
      >
        thanakmech@gmail.com
      </motion.a>

      {/* Divider */}
      <div className="my-8 w-12 h-px bg-zinc-700/60" />

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="flex items-center gap-6 z-10"
      >
        <ContactIcon
          href="https://facebook.com/yourname"
          label="Facebook"
          icon={<FaFacebookF />}
          hover="hover:text-[#1877F2]"
        />
        <ContactIcon
          href="https://instagram.com/yourname"
          label="Instagram"
          icon={<FaInstagram />}
          hover="hover:text-[#E4405F]"
        />
        <ContactIcon
          href="https://linkedin.com/in/yourname"
          label="LinkedIn"
          icon={<FaLinkedinIn />}
          hover="hover:text-[#0A66C2]"
        />
        <ContactIcon
          href="https://github.com/yourname"
          label="GitHub"
          icon={<FaGithub />}
          hover="hover:text-zinc-100"
        />
      </motion.div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-xs text-zinc-500 italic"
      >
        {/* “Great things are built through conversation.” */}
      </motion.p>
    </motion.div>
  )
}

function ContactIcon({
  href,
  icon,
  label,
  hover,
}: {
  href: string
  icon: React.ReactNode
  label: string
  hover: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        text-zinc-400
        ${hover}
        transition-colors duration-300
        text-lg
        inline-flex
        items-center
        justify-center
      `}
    >
      {icon}
    </a>
  )
}
