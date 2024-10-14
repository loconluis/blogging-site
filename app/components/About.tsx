import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Layout from "@/Layout/Index";

const About = () => {
  return (
    <Layout>
      <motion.div
        className="flex flex-col gap-10 lineHeight:1.5 xs:mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>
          Hi! I'm Luis Locon 👋🏼, a software engineer with a passion for frontend
          development and everything related to creating amazing interfaces. I
          started my career as a full stack developer six years ago, where I
          developed a deep love for JavaScript and the web. Since then, I've
          realized that what I enjoy the most is designing user experiences that
          are attractive, efficient, and most importantly, easy to use.
        </p>
        <p>
          I'm from Guatemala 🇬🇹, but the web has led me to collaborate with
          amazing teams around the world, from the USA to Mexico, India, and
          several places across Central America, working at top companies that
          have a high global impact. I'm passionate about design, product
          creation, and I've recently dived into the exciting world of Web3.
        </p>
        <p>
          I love tackling complex challenges and solving problems in creative
          ways. I'm always open to sharing knowledge, teaching, and building
          communities wherever I go.
        </p>
        <p>
          When I'm not coding, you'll probably find me watching or playing
          sports (yes, I'm a big fan), enjoying good food (even though I'm not
          an expert foodie, I like to think I am), or playing with my dog, who
          never fails to make me smile.{" "}
          <Link href="#social">
            <span>Contact me. ⬇️</span>
          </Link>
        </p>
      </motion.div>
    </Layout>
  );
};

export default About;
