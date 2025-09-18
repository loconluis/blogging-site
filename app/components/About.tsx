import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Layout from "@/Layout/Index";
import VerticalTimeline from "./VerticalTimeline";

const About = () => {
  return (
    <Layout>
      <motion.div
        className="flex flex-col gap-8 leading-relaxed max-w-3xl mx-auto items-center justify-center min-h-[calc(100vh-200px)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>
          Hi! I'm Luis Locon 👋🏼, a software engineer, based in Guatemala 🇬🇹,
          with a passion for frontend development and everything related to
          creating amazing interfaces. I started my career as a full stack
          developer six years ago, where I developed a deep love for JavaScript
          and the web. Since then, I've realized that what I enjoy the most is
          designing user experiences that are attractive, efficient, and most
          importantly, easy to use.
        </p>
        <p>
          I love tackling complex challenges and solving problems in creative
          ways. I'm always open to sharing knowledge, teaching, and building
          communities wherever I go.
        </p>
        <p>Take a look at my work experience below. ⬇️</p>
      </motion.div>
    </Layout>
  );
};

export default About;
