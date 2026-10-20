export default function AboutStrip() {
  return (
    <section className="about-strip" id="about" aria-labelledby="about-h">
      <div>
        <h2 id="about-h">
          About
        </h2>
        <p className="reveal" data-d="1">
          I build interfaces for the web: commerce at GoDaddy, healthcare and
          banking before that. Eight years of it, mostly in TypeScript and React,
          from Guatemala City.
        </p>
        <p className="reveal" data-d="2">
          This site is the notebook. The code that runs it is{" "}
          <a
            className="link"
            href="https://github.com/loconluis/blogging-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            public
          </a>
          , and the roles in order are on the{" "}
          <a className="link" href="/about#experience">
            about page
          </a>
          .
        </p>
      </div>
      <img
        className="reveal"
        data-d="2"
        src="/images/avatar.jpg"
        alt="Luis Locon"
        width={800}
        height={800}
        loading="lazy"
      />
    </section>
  );
}