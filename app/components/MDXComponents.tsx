import CodeBlock from "./CodeBlock";
import Image from "next/image";

const HeadLine1 = (props) => {
  return <h1>{props}</h1>;
};

const MDXComponents = {
  h1: HeadLine1,
  h2: (props) => <h2>{props.children}</h2>,
  h3: (props) => <h3>{props.children}</h3>,
  h4: (props) => <h4>{props.children}</h4>,
  h5: (props) => <h5>{props.children}</h5>,
  h6: (props) => <h6>{props.children}</h6>,
  inlineCode: (props) => <CodeBlock {...props} />,
  img: (props) => (
    <Image className="w-full h-auto" width={600} height={400} {...props} />
  ),
  code: CodeBlock,
  br: (props) => <br />,
  a: (props) => (
    <a href={props.href} target="_blank" className="mdx-anchor">
      {props.children}
    </a>
  ),
  p: (props) => <p>{props.children}</p>,
  ul: (props) => <ul {...props} className="mdx-list-ul"></ul>,
  ol: (props) => <ol className="mdx-list-ol">{props.children}</ol>,
  li: (props) => <li className="mdx-list-item">{props.children}</li>,
};

export default MDXComponents;
