import { HardSkills } from "@/interfaces/portfolio/skills";

export const SKILLS: HardSkills[] = [
  {
    key: 1,
    name: "HTML",
    href: "/images/skills/HTML.svg",
  },
  {
    key: 2,
    name: "CSS",
    href: "/images/skills/CSS.png",
  },
  {
    key: 3,
    name: "Javascript",
    href: "/images/skills/JavaScript.svg",
    frameworks: [
      {
        key: 1,
        content: "Vue",
      },
    ],
  },
  {
    key: 4,
    name: "Typescript",
    href: "/images/skills/TypeScript.png",
  },
  {
    key: 5,
    name: "Node js",
    href: "/images/skills/Node.png",
  },
  {
    key: 6,
    name: "Postgresql",
    href: "/images/skills/Postgresql.png",
    frameworks: [
      {
        key: 1,
        content: "Prisma.io",
      },
    ],
  },
  {
    key: 7,
    name: "Tailwind CSS",
    href: "/images/skills/TailwindCSS.png",
  },
  {
    key: 8,
    name: "React",
    href: "/images/skills/React.png",
    frameworks: [
      {
        key: 1,
        content: "React router",
      },
      {
        key: 2,
        content: "MaterialUi",
      },
    ],
  },
  {
    key: 9,
    name: "Next.js",
    href: "/images/skills/Next.png",
    frameworks: [
      {
        key: 1,
        content: "NextAuth",
      },
      {
        key: 2,
        content: "NextUi",
      },
    ],
  },
  {
    key: 10,
    name: "PHP",
    href: "/images/skills/PHP.png",
    frameworks: [
      {
        key: 1,
        content: "Laravel 8",
      },
    ],
  },
];
