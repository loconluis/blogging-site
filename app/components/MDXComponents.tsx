import CodeBlock from "./CodeBlock";
import Image from "next/image";

/**
 * Prose is never hidden behind a scroll: an entry reads the moment it opens.
 * Fenced code keeps its own chrome (a label and a copy button); inline code is
 * just inline code.
 */
const MDXComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  h5: (props) => <h5 {...props} />,
  h6: (props) => <h6 {...props} />,
  pre: (props) => <>{props.children}</>,
  code: CodeBlock,
  inlineCode: (props) => <code className="inline-code" {...props} />,
  img: (props) => (
    <Image
      style={{ width: "100%", height: "auto" }}
      width={1200}
      height={700}
      loading="eager"
      {...props}
    />
  ),
  br: (props) => <br {...props} />,
  a: (props) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  ),
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
};

export default MDXComponents;