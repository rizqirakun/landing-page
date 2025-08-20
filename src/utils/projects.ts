export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  href: string;
  tags: Array<"web" | "mobile" | "design">;
};

export const projects: Project[] = [
  {
    slug: "Rizqirakun-astro",
    title: "Rizqirakun Astro Migration",
    summary: "Ported personal portfolio to Astro + React islands",
    image: "/images/sample-1.jpg",
    href: "https://example.com",
    tags: ["web"],
  },
  {
    slug: "app-x",
    title: "Mobile App X",
    summary: "Experimental mobile app",
    image: "/images/sample-2.jpg",
    href: "https://example.com",
    tags: ["mobile"],
  },
];
