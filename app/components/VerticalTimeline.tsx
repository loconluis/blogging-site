import { motion } from "framer-motion";
import Layout from "@/Layout/Index";
import Link from "next/link";

export default function MinimalVerticalTimeline() {
  const experiences = [
    {
      year: "August 2025 - Present",
      company: "Freelance",
      position: "Senior Software Engineer",
      description: "Working in Mekapal mobile app for the construction industry. Using React Native + Expo + Nativewind + NestJs",
    },
    {
      year: "Jan 2025 - July 2025",
      company: "Cognits, S.A.",
      position: "Senior Software Engineer",
      description: "Doing cool stuffs with AI",
    },
    {
      year: "Nov 2024 - Jan 2025",
      company: "Cognits, S.A",
      position: "Senior Frontend Developer Freelance",
      description: "I was part of the team responsible for developing the complete website for an international payments company. The site was designed to be self-managing, built based on programmatic conditions handled through a CMS. For this project, we utilized Astro in combination with Sanity, which allowed us to create a flexible and scalable platform tailored to the client's needs.",
    },
    {
      year: "Jan 2022 - Aug 2024",
      company: "3 Pillar Global",
      position: "Senior Software Engineer",
      description: "In this role, I led the development of user interfaces for a healthcare platform, collaborating with cross-functional teams in the United States, Mexico, Guatemala, and India. One project involved building an innovative product for the healthcare sector, where I drove the adoption of Next.js for integration with health records and medical data. Developed a booking flow that connected women with clinics. Additionally, Integrated Drupal to generate static content, enhancing the overall user experience.",
    },
    {
      year: "Jan 2020 - Jan 2022",
      company: "Cognits, S.A.",
      position: "Software Developer",
      description: "In this role, I worked on a Lowcode platform for the banking sector, integrating services using Java and developing interfaces that connected the frontend with the backend through Vanilla JS. I successfully integrated and customized services for two banks, tailoring solutions to meet their specific needs. Additionally, I contributed to an ecommerce project, utilizing technologies to visualize 3D models of furniture and other products with Threekit, Shopify, WordPress, and WooCommerce.",
    },
    {
      year: "Feb 2018 - Jan 2020",
      company: "Estratek, S.A.",
      position: "Full Stack Web Developer Jr",
      description: "In this role, I handled end-to-end development using Node.js, Python, React, Next.js, and Redux. I developed new functionalities for our main product, including solutions for social security payment files, vacation management in a chat format, and tracking employee working hours. I also created real-time employee profiles, implemented image cropping for profile pictures, and built a RESTful API with Python to generate files from AWS S3 templates.",
    },
    {
      year: "2017",
      company: "Freelance",
      position: "Developer Freelance",
      description: "Building websites and web applications for local businesses using React, Node.js, and other technologies.",
    },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl mx-auto mt-12"
      >
        <h2 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-neutral-50">
          Work Experience
        </h2>

        <div className="relative">
          {/* Vertical dashed line */}
          <div className="absolute left-8 top-0 bottom-0 w-px">
            <div className="absolute inset-0 border-l border-neutral-200 dark:border-neutral-800 border-dashed" />
          </div>

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-white dark:bg-neutral-950 border-2 border-neutral-300 dark:border-neutral-700 rounded-full" />

                {/* Horizontal dashed line */}
                <div className="absolute left-8 top-4 w-4 h-px">
                  <div className="absolute inset-0 border-t border-neutral-200 dark:border-neutral-800 border-dashed" />
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-50">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.year}
                    </span>
                  </div>

                  <p className="text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                    {exp.position}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Add separator line except for last item */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-px h-8">
                    <div className="absolute inset-0 border-l border-neutral-200 dark:border-neutral-800 border-dashed" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            If you want to see more, you can check my GitHub <Link href="https://github.com/loconluis" className="text-blue-500 dark:text-blue-400">here</Link>.
          </p>
        </div>
      </motion.div>
    </Layout>
  );
}
