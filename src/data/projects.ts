import {
  Infinity as InfinityIcon,
  LayoutDashboard,
  Users,
  UserPlus,
  Shield,
  Bell,
  FolderOpen,
  MonitorSmartphone,
  Palette,
  Layers,
  Zap,
  Lock,
  Cpu,
  GitBranch,
  Puzzle,
  WifiOff,
  Globe,
  CreditCard,
  BarChart3,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface TechGroup {
  category: string;
  items: string[];
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface FutureScopeItem {
  icon: LucideIcon;
  title: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  projectDescription: string[];
  status: string[];
  accent: string;
  tint: string;
  live?: string;
  github?: string;
  techStack: TechGroup[];
  architectureImage?: string;
  demoType: "placeholder" | "youtube" | "vimeo" | "mp4";
  demoUrl?: string;
  screenshots: Screenshot[];
  futureScope: FutureScopeItem[];
}

export const projects: ProjectData[] = [
  {
    slug: "canvazz-flow",
    name: "Canvazz Flow",
    tagline:
      "A collaborative visual workspace built for teams to brainstorm, design, organize projects, and collaborate in real time.",
    description:
      "A modern collaborative whiteboard platform that combines an infinite canvas, workspaces, notifications, role-based collaboration, invitations, and project management into one seamless experience.",
    projectDescription: [
      "Canvazz Flow is a full-stack collaborative whiteboard platform designed for teams that need a unified space to brainstorm, plan, and execute projects visually. It combines an infinite canvas with structured workspace management, eliminating the fragmentation that comes with using multiple disconnected tools.",
      "The platform supports real-time collaboration powered by Liveblocks CRDT sync, role-based permissions via Clerk, invitation workflows, and a notification system that keeps every team member in sync. Workspaces can be organized into projects, each with its own board, members, and settings.",
      "Built with Next.js 15, React 19, Konva for canvas rendering, NestJS with Prisma on the backend, and PostgreSQL for data storage. The architecture prioritizes real-time performance, API consistency, and a clean component-driven design system.",
    ],
    status: ["Featured Project", "Production Ready"],
    accent: "#5EA2FF",
    tint: "from-[#5EA2FF]/25 via-[#5EA2FF]/8 to-transparent",
    live: "https://www.canvazzflow.site",
    github: "https://github.com/rahulnaik8055/CanvazzFlow",
    techStack: [
      {
        category: "Frontend",
        items: [
          "Next.js 15",
          "React 19",
          "TypeScript 5",
          "Tailwind CSS v4",
          "Konva + react-konva",
          "Liveblocks",
          "Socket.IO Client",
          "Radix UI",
          "shadcn/ui",
          "Motion",
          "SWR",
          "Sonner",
        ],
      },
      {
        category: "Backend",
        items: [
          "NestJS 11",
          "Prisma 7",
          "Liveblocks Node",
          "Socket.IO Server",
          "Swagger",
          "class-validator",
        ],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
      {
        category: "Authentication",
        items: ["Clerk"],
      },
      {
        category: "Deployment",
        items: ["Vercel", "Render"],
      },
    ],
    architectureImage: "/images/canvasflow-architecture-diagram.svg",
    demoUrl: "/canvazz-flow-video.mp4",
    demoType: "mp4",
    screenshots: [
      {
        src: "/images/canvazz-flow/one.png",
        alt: "Canvazz Flow Dashboard",
        caption: "Workspace dashboard with project overview",
      },
      {
        src: "/images/canvazz-flow/two.png",
        alt: "Infinite Canvas",
        caption: "Infinite canvas with collaborative editing",
      },
      {
        src: "/images/canvazz-flow/three.png",
        alt: "Team Management",
        caption: "Team management and role assignment",
      },
    ],
    futureScope: [
      { icon: Users, title: "Real-time collaborative editing" },
      { icon: GitBranch, title: "Version history" },
      { icon: Sparkles, title: "AI-assisted diagrams" },
      { icon: Puzzle, title: "Canvas templates" },
      { icon: WifiOff, title: "Offline support" },
    ],
  },
  {
    slug: "kairo",
    name: "Kairo",
    tagline:
      "A modern AI prompt marketplace for discovering, organizing, and sharing high-quality prompts.",
    description:
      "A platform being built to help developers, creators, and businesses discover, organize, manage, and eventually monetize reusable AI prompts through a clean and scalable marketplace.",
    projectDescription: [
      "Kairo is a modern AI prompt marketplace currently under active development. The platform is designed to help developers, creators, and businesses discover, organize, and eventually monetize reusable AI prompts through a clean and scalable interface.",
      "The marketplace organizes prompts by category, model, and use case, with creator profiles, ratings, and collections to help users find the highest-quality content. Clerk handles authentication, Drizzle ORM manages the PostgreSQL database, and Google Gemini powers the reverse-prompt feature.",
      "Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Motion for animations, and validated with Zod. Uploads go through Cloudinary, webhooks are processed via Svix, and the whole stack is type-safe from database to UI.",
    ],
    status: ["Work In Progress"],
    accent: "#A78BFA",
    tint: "from-[#A78BFA]/25 via-[#A78BFA]/8 to-transparent",
    live: undefined,
    github: undefined,
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "React 19", "TypeScript 5", "Tailwind CSS v4", "Motion"],
      },
      {
        category: "Auth",
        items: ["Clerk"],
      },
      {
        category: "Backend",
        items: ["REST APIs", "Drizzle ORM"],
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Neon"],
      },
      {
        category: "Validation",
        items: ["Zod"],
      },
      {
        category: "AI",
        items: ["Google"],
      },
      {
        category: "Media",
        items: ["Cloudinary"],
      },
      {
        category: "Tooling",
        items: ["Lucide React", "Git"],
      },
    ],
    demoType: "placeholder",
    screenshots: [
      {
        src: "/images/kairo/one.png",
        alt: "Kairo Marketplace",
        caption: "Browse curated AI prompts by category",
      },
      {
        src: "/images/kairo/two.png",
        alt: "Prompt Detail",
        caption: "Detailed prompt view with examples and ratings",
      },
      {
        src: "/images/kairo/three.png",
        alt: "Creator Dashboard",
        caption: "Creator dashboard with analytics",
      },
    ],
    futureScope: [
      { icon: Globe, title: "Marketplace launch" },
      { icon: Users, title: "Creator profiles" },
      { icon: CreditCard, title: "Payments" },
      { icon: BarChart3, title: "Analytics" },
      { icon: Sparkles, title: "AI recommendations" },
      { icon: LayoutDashboard, title: "Public API" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
