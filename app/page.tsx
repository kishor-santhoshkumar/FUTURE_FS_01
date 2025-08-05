import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Kishor S - AI & Data Science Student | Portfolio",
  description:
    "Passionate AI and Data Science student at RMK Engineering College. Experienced in Python, Java, Machine Learning, and building innovative solutions.",
  keywords: [
    "AI student",
    "data science",
    "python",
    "java",
    "machine learning",
    "portfolio",
    "RMK Engineering College",
  ],
  authors: [{ name: "Kishor S" }],
  openGraph: {
    title: "Kishor S - AI & Data Science Student",
    description: "Passionate AI and Data Science student specializing in Python, Java, and Machine Learning.",
    url: "https://kishor-portfolio.dev",
    siteName: "Kishor S Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Kishor S - AI & Data Science Student Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishor S - AI & Data Science Student",
    description: "Passionate AI and Data Science student specializing in Python, Java, and Machine Learning.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
