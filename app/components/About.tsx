import Layout from "@/Layout/Index";
import { experiences } from "@/lib/content";
import { useRevealOnScroll } from "@/components/home/useRevealOnScroll";

const About = () => {
  useRevealOnScroll();

  return (
    <Layout>
      <div className="intro-grid">
        <h1 className="reveal">Hi, I&apos;m Luis.</h1>
        <p className="lead reveal" data-d="1" style={{ color: "var(--muted)" }}>
          A software engineer in Guatemala City who builds interfaces for the
          web and writes about it in public.
        </p>
      </div>

      <div className="prose">
        <p className="reveal" data-d="2">
          I started as a full stack developer eight years ago and fell for
          JavaScript and the web. Since then the work has settled into the part
          I love most: designing experiences that are attractive, efficient and,
          above all, easy to use. Commerce at GoDaddy, healthcare at 3 Pillar
          Global, banking and AI work at Cognits.
        </p>
        <p className="reveal" data-d="3">
          I like complex problems solved in plain ways, and I like sharing what
          I learn: teaching, writing, and building communities wherever I go.
          Off the clock I have read at least one book a month since December
          2016, and I keep the lists here.
        </p>
        <p className="reveal" data-d="3">
          The code for this site is on{" "}
          <a
            href="https://github.com/loconluis/blogging-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <h2 className="role-head reveal" id="experience">
        Work experience
      </h2>

      <div className="xp">
        {experiences.map((exp, i) => (
          <div className="xp-row reveal" data-d={String(i % 5)} key={exp.company + exp.year}>
            <span className="co">{exp.company}</span>
            <span className="yr">{exp.year}</span>
            <span className="pos">{exp.position}</span>
            <span className="desc">{exp.description}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default About;