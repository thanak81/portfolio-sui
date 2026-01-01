import { label } from "framer-motion/client";
import { describe } from "node:test";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";
export const projects = [
    {
        id: 1,
        title: "Resume Builder",
        color: "blue" as const,
        year: "2024",
        description: "A responsive resume builder application.",
        tags: ["Next.js", "Javascript", "Prisma"],
    },
    { id: 2, title: "Auto Web Hosting", color: "purple" as const, year: "2024", description: "Automated web hosting solution.", tags: ["Next.js", "Postgres", "Spring Boot", "Kubernetes"] },
    { id: 3, title: "Hotel Management System", color: "pink" as const, year: "2025", description: "Complete hotel management system.", tags: ["Next.js", "Spring Boot", "PostgreSQL"] },
    { id: 4, title: "Golf Management System", color: "orange" as const, year: "2025", description: "Golf course management system.", tags: ["Next.js", "Spring Boot", "PostgreSQL"] },
    { id: 5, title: "Golf Lesson Management", color: "green" as const, year: "2025", description: "Golf lesson scheduling and management.", tags: ["Next.js", "Spring Boot", "PostgreSQL"] },
    // { id: 6, title: "More", color: "teal" as const },
];

export const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Spring Boot",
    "Docker",
]

export const socialData = [
    {
        brand: "facebook",
        href: "https://www.facebook.com/thannak.mech.20/",
        label: "Facebook",
        icon: FaFacebookF
    },
    {
        brand: "instagram",
        href: "https://instagram.com/thanakmech",
        label: "Instagram",
        icon: FaInstagram
    },
    {
        brand: "linkedin",
        href: "https://www.linkedin.com/in/thanak-mech-0873b828b/",
        label: "LinkedIn",
        icon: FaLinkedinIn
    },
    {
        brand: "github",
        href: "https://github.com/thanak81",
        label: "GitHub",
        icon: FaGithub
    }
]