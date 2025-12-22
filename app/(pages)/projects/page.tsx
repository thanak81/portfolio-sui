import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {
  return (
    <section className="flex flex-col justify-between flex-1">

      {/* TOP */}
      <div>
        <p className="text-[20px] font-medium">Projects</p>
        <p className="text-sm">
          A collection of products and systems I’ve built.
        </p>
      </div>
      {/* BOTTOM */}
      <div className="space-y-30">
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-medium">Resume Builder</p>
          <p className="text-sm text-black/70">
            Full-stack resume and cover letter builder with AI features.
          </p>
          <a className="text-[13px] text-blue-500">Check details ↓</a>
        </div>

    <div className="flex gap-4 ">
    {Array.from({length: 10}).map((_, index) => (
  <div
      key={index}
      className={`transform transition-all duration-300 ease-out
        ${index === 1 ? "scale-105 -translate-y-14" : ""}
      `}
    >
      <ProjectCard />
    </div>
    ))}
    </div>

      </div>

    </section>
  );
}
