"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../page"

type Project = {
  id: number
  title: string
  description?: string
  color: "blue" | "red" | "green"
  tags?: string[]
}

export default function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showDetail, setShowDetail] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!showDetail && swiperInstance) {
      swiperInstance.slideTo(activeIndex, 0)
    }
  }, [showDetail, swiperInstance, activeIndex])

  const handleViewDetails = () => {
    setSelectedProject(projects[activeIndex])
    setShowDetail(true)
  }

  // Minimal smooth transitions
  const pageVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1], // fast, calm, no lag
      },
    },
    exit: {
      opacity: 1,
      transition: { duration: 0 },
    },
  }
  return (
    <AnimatePresence mode="wait">
      {!showDetail ? (
        <motion.section
          variants={pageVariants}
          key="projects-list"
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col h-full overflow-hidden relative z-10"
        >
          <div className="flex-shrink-0 space-y-3 mb-10">
            <h2 className="text-xl font-medium text-zinc-100">Projects</h2>

            <p className="text-sm text-zinc-400">
              A collection of applications I've built
            </p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="text-sm text-zinc-400"
            >
              <span className="text-zinc-500">Tech I work with:</span>{" "}
              <span className="tracking-wide">
                Next.js · React · TypeScript · PostgreSQL · Spring Boot · Docker
              </span>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col gap-8 overflow-hidden">
            {/* Project Details Preview */}
            {/* <div className="flex-shrink-0 space-y-2">
              <h3 className="font-semibold text-lg">
                {projects[activeIndex]?.title}
              </h3>
              <p className="text-sm text-gray-600">
                {projects[activeIndex]?.description}
              </p>

            </div> */}
            <div className="mt-4 max-w-xl text-sm text-zinc-500 leading-relaxed">
              <span className="text-zinc-500">Highlight:</span>{" "}
              <span className="text-zinc-300">
                Resume Builder
              </span>{" "}
              — built to explore how AI-assisted tools can simplify real-world workflows,
              with a strong focus on clarity, usability, and step-by-step guidance.
            </div>
            {/* Carousel */}
            <div className="flex-1 flex flex-col justify-center items-center ">
              <div className="w-full overflow-visible fade-edges pt-18">
                <Swiper
                  onSwiper={setSwiperInstance}
                  slidesPerView="auto"
                  centeredSlides
                  spaceBetween={20}
                  slideToClickedSlide
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  onProgress={(swiper, p) => setProgress(p)}
                  className="w-full py-8"
                >
                  {projects.map((project, index) => (
                    <SwiperSlide
                      key={project.id}
                      className="!w-80 transition-all duration-500"
                      style={{
                        transform:
                          activeIndex === index
                            ? "translateY(-2.2rem) scale(1.05)"
                            : "translateY(0) scale(1)",
                        opacity: activeIndex === index ? 1 : 0.6,
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <ProjectCard {...project} />

                        {activeIndex === index && (
                          <motion.button
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={handleViewDetails}
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 group"
                          >
                            View details
                            <span className="group-hover:translate-x-0.5 transition-transform">
                              →
                            </span>
                          </motion.button>
                        )}

                      </div>
                    </SwiperSlide>

                  ))}


                </Swiper>
              </div>
              <StretchIndicator
                count={projects.length}
                activeIndex={activeIndex}
                progress={progress}
                onSelect={(index) => swiperInstance?.slideTo(index)}
              />
            </div>

          </div>
        </motion.section>
      ) : (

        <motion.section
          key="project-detail"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col h-full overflow-y-auto w-full  no-scrollbar"
        >
          {/* Back Button */}
          <button
            onClick={() => setShowDetail(false)}
            className="flex items-center gap-2 text-zinc-100 hover:text-gray-200 mb-8 group w-full"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">
              ←
            </span>
            <span className="text-sm">Back</span>
          </button>

          {/* Project Content */}
          <div className="space-y-8 w-full">
            {/* Header */}
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-zinc-100">
                {selectedProject?.title}
              </h1>
              <p className="text-zinc-400 leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>

            {/* Tags */}
            {selectedProject?.tags && (
              <div className="flex gap-2 flex-wrap">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-zinc-200 bg-zinc-900/60 px-3 py-1 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Project Image/Preview */}
            <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
              {/* Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-black text-sm">
                Project Preview
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                Full project description goes here. Explain what the project does,
                why you built it, and what problems it solves. Keep it concise and
                focused on the key points.
              </p>
              <p>
                You can add multiple paragraphs to provide more context about the
                development process, technical decisions, and any interesting
                challenges you faced.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-600 underline underline-offset-4"
              >
                Live Demo →
              </a>
              <a
                href="#"
                className="text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}


function StretchIndicator({
  count,
  activeIndex,
  progress,
  onSelect,
}: {
  count: number
  activeIndex: number
  progress: number
  onSelect?: (index: number) => void
}) {
  const dotWidth = 1
  const activeWidth = 8
  const gap = 10

  // Normalize progress per slide
  const slideProgress = progress * (count - 1)
  const delta = slideProgress - activeIndex

  const stretch =
    Math.abs(delta) > 0
      ? Math.min(Math.abs(delta) * 20, 20)
      : 0

  return (
    <div className="relative flex items-center justify-center mt-6 h-3">
      <div
        className="relative flex"
        style={{
          gap,
        }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect?.(index)}
            className="relative"
            style={{ width: dotWidth, height: dotWidth }}
          >
            {index === activeIndex && (
              <motion.div
                layout
                className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
                animate={{
                  width: activeWidth + stretch,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <div className="h-2 w-2 bg-gray-300 rounded-full" />
          </button>
        ))}
      </div>
    </div>
  )
}