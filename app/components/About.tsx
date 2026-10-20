import Layout from "@/Layout/Index";
import { experiences } from "@/lib/content";
import { useRevealOnScroll } from "@/components/home/useRevealOnScroll";

const About = () => {
  useRevealOnScroll();

  return (
    <Layout>
      <div className="intro-grid">
        <h1 className="reveal">I build software.</h1>
        <p className="lead reveal" data-d="1" style={{ color: "var(--muted)" }}>
          Interfaces for the web and the systems behind them — from Guatemala
          City, in TypeScript and React since 2018, lately with AI agents in
          the loop.
        </p>
      </div>

      <div className="prose">
        <p className="reveal" data-d="2">
          I started as a full stack developer and fell for JavaScript and the
          web. Since then the work has grown from the interface into the whole
          system, without losing the part I love most: making things people can
          actually use. Commerce at GoDaddy, healthcare at 3 Pillar Global,
          banking and AI work at Cognits.
        </p>
        <p className="reveal" data-d="3">
          AI is part of how I work now, not a way around the work: retrieval
          agents and applied LLM work at Cognits first, agent-driven
          engineering at GoDaddy now, and my own agents outside work. It
          raises what one engineer can hold in mind at once. The judgment
          still has to be mine.
        </p>
        <p className="reveal" data-d="3">
          I like complex problems solved in plain ways, and I like sharing what
          I learn: teaching, writing, and building communities wherever I go.
          Off the clock I have read at least one book a month since December
          2016, and I keep{" "}
          <a href="/blog/Books-I-read-in-2024">the lists here</a>.
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