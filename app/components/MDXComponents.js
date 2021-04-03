import CodeBlock from "./CodeBlock";

const HeadLine1 = (props) => {
  return <h1>{props}</h1>;
};

const MDXComponents = {
  h1: (props) => {
    return <h1>{props.children}</h1>;
  },
  h2: (props) => <h2>{props.children}</h2>,
  h3: (props) => <h3>{props.children}</h3>,
  h4: (props) => <h4>{props.children}</h4>,
  h5: (props) => <h5>{props.children}</h5>,
  h6: (props) => <h6>{props.children}</h6>,
  inlineCode: (props) => <CodeBlock {...props} />,
  code: CodeBlock,
  br: (props) => <br />,
  // hr: Hr,
  a: (props) => <a className="mdx-anchor">{props.children}</a>,
  p: (props) => <p>{props.children}</p>,
  ul: (props) => <ul {...props} className="mdx-list-ul"></ul>,
  ol: (props) => <ol className="mdx-list-ol">{props.children}</ol>,
  li: (props) => <li className="mdx-list-item">{props.children}</li>
};

// export { CustomLink };
export default MDXComponents;
