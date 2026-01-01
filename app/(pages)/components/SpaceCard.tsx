"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Rocket, Star, Globe } from "lucide-react";

const socialBrandColors = {
  facebook: "hover:text-[#1877F2]",
  instagram: "hover:text-[#E4405F]",
  linkedin: "hover:text-[#0A66C2]",
  github: "hover:text-zinc-100",
} as const;

export default function NASASpaceUserCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative ">
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl "
        >
          {/* <motion.div
            className="absolute -top-8 -right-8"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Star
              className="text-yellow-400/40"
              size={32}
              fill="currentColor"
            />
          </motion.div> */}

          <motion.div
            className="absolute -bottom-8 -left-8"
            animate={{
              rotate: -360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Star className="text-blue-400/30" size={24} fill="currentColor" />
          </motion.div>

          {/* Main Horizontal Card */}
          <div>
            {/* Animated Stars Background */}
            {/* <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div> */}

            <div className="relative flex items-center gap-8 p-8">
              {/* Left Side - Avatar Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-2xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Avatar Container */}
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-zinc-900/90 backdrop-blur-sm p-1">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                          <Image
                            src="/images/me.jpg"
                            alt="Thanak Mech"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle - Info Section */}
              <div className="flex-1 space-y-4">
                {/* Name & Title */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-white">
                      Thanak Mech
                    </h2>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-300">Active</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 mb-1">Developer</p>
                </div>

                {/* Bio */}
                <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                  Graduate student from RUPP. Currently working on innovative
                  projects exploring the intersection of technology and space
                  exploration.
                </p>

                {/* Stats */}
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      12
                    </div>
                    <div className="text-xs text-zinc-500">Missions</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      5
                    </div>
                    <div className="text-xs text-zinc-500">Projects</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                      ∞
                    </div>
                    <div className="text-xs text-zinc-500">Curiosity</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
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
                </div>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/20 rounded-br-3xl" />
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
  brand,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  brand: keyof typeof socialBrandColors;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        text-zinc-400
        ${socialBrandColors[brand]}
        transition-colors duration-300
        text-base
        p-2 bg-zinc-800/30 backdrop-blur-sm rounded-lg
        border border-white/5
        hover:border-white/20
      `}
    >
      {icon}
    </motion.a>
  );
}
