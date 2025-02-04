import { motion } from "framer-motion";

export default function MinimalVerticalTimeline() {
  const experiences = [
    {
      year: "Jan 2025 - Present",
      company: "Cognits",
      position: "Senior Engineer",
      description: ``,
    },
    {
      year: "Nov 2024 - Jan 2025",
      company: "Cognits",
      position: "Senior Frontend Developer",
      description: `I was part of the team responsible for developing the complete website for an international payments company. The site was designed to be self-managing, built based on programmatic conditions handled through a CMS. For this project, we utilized Astro in combination with Sanity, which allowed us to create a flexible and scalable platform tailored to the client's needs.`,
    },
    {
      year: "Jan 2022 - Aug 2024",
      company: "3 Pillar Global",
      position: "Senior Software Engineer",
      description: `In this role, I led the development of user interfaces for a healthcare platform, 
        collaborating with cross-functional teams in the United States, Mexico, Guatemala, and India. 
        One project involved building an innovative product for the healthcare sector, 
        where I drove the adoption of Next.js for integration with health records and medical data. 
        Developed a booking flow that connected women with clinics. 
        Additionally, Integrated Drupal to generate static content, enhancing the overall user experience. 
        Our stack included Next.js, React, TypeScript, and Node.js to deliver scalable and robust solutions.`,
    },
    {
      year: "Jan 2020 - Jan 2022",
      company: "Cognits, S.A.",
      position: "Software Developer",
      description: `In this role, I worked on a Lowcode platform for the banking sector, integrating services using Java and developing interfaces 
        that connected the frontend with the backend through Vanilla JS. I successfully integrated and customized services for two banks, 
        tailoring solutions to meet their specific needs. Additionally, I contributed to an ecommerce project, 
        utilizing technologies to visualize 3D models of furniture and other products with Threekit, Shopify, WordPress, and WooCommerce. 
        I developed solutions using React and Threekit SDK, providing an interactive and personalized experience for end users while playing a key role 
        in optimizing processes and enhancing scalability across both platforms. Our stack included Node, Java, React, Threekit SDK, Shopify, WordPress, and WooCommerce.`,
    },
    {
      year: "Feb 2018 - Jan 2020",
      company: "Estratek, S.A.",
      position: "Full Stack Web Developer Jr",
      description:
        "In this role, I handled end-to-end development using Node.js, Python, React, Next.js, and Redux. I developed new functionalities for our main product, including solutions for social security payment files, vacation management in a chat format, and tracking employee working hours. I also created real-time employee profiles, implemented image cropping for profile pictures, and built a RESTful API with Python to generate files from AWS S3 templates. Additionally, I constructed an organizational chart using a JavaScript library and collaborated on an open-source React component for Power BI to enhance responsiveness.",
    },
    {
      year: "2017",
      company: "Freelance",
      position: "Developer Freelance",
      description:
        "Building websites and web applications for local businesses using React, Node.js, and other technologies.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-10 mx-auto  rounded-lg shadow-lg "
    >
      <h2 className="text-3xl font-bold text-slate-50 mb-8 ">
        Work Experience
      </h2>
      <div className="relative px-5">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-4 w-px bg-pink-700" />

        {/* Timeline items */}
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 pl-10 relative">
            {/* Horizontal line */}
            <div className="absolute top-6 left-0 w-8 h-px bg-pink-700" />

            <div className="p-4 rounded-lg shadow-md border-2 border-pink-700">
              <h3 className="text-lg font-semibold text-slate-50">
                {exp.company}
              </h3>
              <h4 className="text-md font-medium text-slate-100">
                {exp.position}
              </h4>
              <p className="text-sm text-slate-500">{exp.year}</p>
              <p className="text-sm text-slate-400 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className=" text-slate-500 mb-10">
        If you want to see more, you can check my Github, or reach out me
        through my social media.
      </p>
    </motion.div>
  );
}
