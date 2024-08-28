import Link from "next/link";
export default function About() {
  return (
    <>
      <h1 className="about-title">About me</h1>
      <p>
        Hi, I'm <strong>Luis Locon</strong> currently I working as a Software
        Engineer where I have been part of many develop teams for Top Notch
        companies, most of the time working with <strong>Typescript</strong>,{" "}
        <strong>React</strong>, and <strong>Graphql</strong>.
      </p>
      <p>
        I like the challenge of being an Engineer, I'm fascinated with solving
        complex problems. But also I'm a very enthusiast of the Product since
        their creation to the moment is a reality for the customers.
      </p>
      <p>
        When I'm not coding I enjoy spending time with family and friends, I
        like to read, play video games, travel, and have fun with my little dog.
      </p>
      <p>
        It's hard to describe who I think I am, so it's all up to you. If you
        want to know more about me or my work.{" "}
        <Link href="/contact">
          <p>Contact me.</p>
        </Link>
      </p>
    </>
  );
}
