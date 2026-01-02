"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import ProjectCard from "../components/ProjectCard";
import { projects, skills } from "../data/data";

type Project = {
  id: number;
  title: string;
  description?: string;
  fullDescription?: string;
  color: string;
  tags?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  imageUrl?: string;
};

export default function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!showDetail && swiperInstance) {
      swiperInstance.slideTo(activeIndex, 0);
    }
  }, [showDetail, swiperInstance, activeIndex]);

  const handleViewDetails = () => {
    setSelectedProject(projects[activeIndex]);
    setShowDetail(true);
  };

  const pageVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <AnimatePresence mode="wait">
      {/* ================= LIST VIEW ================= */}
      {!showDetail ? (
        <motion.section
          key="projects-list"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col h-dvh overflow-hidden"
        >
          {/* Header */}
          <div className="shrink-0 space-y-3">
            <h2 className="text-xl font-medium text-zinc-100">Projects</h2>

            <p className="text-sm text-zinc-400">
              A collection of applications I have built
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="text-sm text-zinc-400 flex gap-2 flex-col md:flex-row"
            >
              <span className="text-zinc-500">Tech I work with:</span>
              <div className="flex gap-2 tracking-wide flex-wrap">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="hover:text-white hover:underline transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Carousel */}
          <div className="flex-1 flex flex-col">
            {/* Optical spacer */}
            <div className="h-[clamp(160px,10vh,240px)] shrink-0" />

            <div className="relative w-full pb-[clamp(100px,14vh,220px)]">
              {/* Left fade */}
              <div
                className="
    absolute left-0 top-0 bottom-0
    w-12 sm:w-20 lg:w-32
    bg-gradient-to-r
    from-zinc-950/80 via-zinc-950/40 to-transparent
    lg:from-zinc-950 lg:via-zinc-950/60
    z-10 pointer-events-none
  "
              />

              {/* Right fade */}
              <div
                className="
    absolute right-0 top-0 bottom-0
    w-12 sm:w-20 lg:w-32
    bg-gradient-to-l
    from-zinc-950/80 via-zinc-950/40 to-transparent
    lg:from-zinc-950 lg:via-zinc-950/60
    z-10 pointer-events-none
  "
              />
              {/* Swipe Indicator */}
              <AnimatePresence>
                {activeIndex === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-18 left-1/2 -translate-x-1/2 z-20
                 flex items-center gap-2 text-xs text-zinc-400"
                  >
                    {/* <motion.span
                      animate={{ x: [-6, 6, -6] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    >
                      ←
                    </motion.span> */}

                    <span className="tracking-wide">Swipe</span>

                    <motion.span
                      animate={{ x: [6, -6, 6] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                )}

                {activeIndex === projects.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-18 left-1/2 -translate-x-1/2 z-20
                 flex items-center gap-2 text-xs text-zinc-400"
                  >
                    <motion.span
                      animate={{ x: [-6, 6, -6] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    >
                      ←
                    </motion.span>

                    <span className="tracking-wide">Swipe</span>


                  </motion.div>
                )}
              </AnimatePresence>

              <Swiper
                onSwiper={setSwiperInstance}
                slidesPerView="auto"
                centeredSlides
                spaceBetween={20}
                slideToClickedSlide
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                }}                // className="w-full"
                keyboard={{ enabled: true }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide
                    key={project.id}
                    className="
  !w-[260px]
  sm:!w-[280px]
  md:!w-[300px]
  lg:!w-80
  transition-all duration-500
"
                    style={{
                      transform:
                        activeIndex === index
                          ? "translateY(-2.2rem) scale(1.05)"
                          : "translateY(0) scale(1)",
                      opacity: activeIndex === index ? 1 : 0.6,
                    }}
                  >
                    <ProjectCard
                      {...project}
                      activeCard={activeIndex === index}
                      onViewDetails={handleViewDetails}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.section>
      ) : (
        /* ================= DETAIL VIEW ================= */
        <motion.section
          key="project-detail"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col w-full min-h-dvh overflow-y-auto no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >

          {/* Back button */}
          <button
            onClick={() => setShowDetail(false)}
            className="flex items-center gap-2 text-zinc-100 hover:text-gray-200 mb-8 px-2 py-1 w-fit"
          >
            ← <span className="text-sm">Back</span>
          </button>

          {/* Content */}
          <div className="space-y-8 w-full pb-32">
            <h1 className="text-3xl font-semibold text-zinc-100">
              {selectedProject?.title}
            </h1>

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

            <div className="w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 relative">
              {selectedProject?.imageUrl ? (
                <Image
                  src={selectedProject.imageUrl}
                  alt={`${selectedProject.title} preview`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
                  Project Preview
                </div>
              )}
            </div>

            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed pb-20">
              <p>
                {selectedProject?.fullDescription ||
                  selectedProject?.description}
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              {selectedProject?.demoUrl && (
                <Link
                  href={selectedProject.demoUrl}
                  target="_blank"
                  className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  Live Demo →
                </Link>
              )}
              {selectedProject?.sourceUrl && (
                <Link
                  href={selectedProject.sourceUrl}
                  target="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4"
                >
                  Source Code
                </Link>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
