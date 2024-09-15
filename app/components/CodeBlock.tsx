import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ children, className }) => {
  let language = "markdown";
  if (className) {
    language = className.replace(/language-/, "");
  }
  return (
    <Highlight
      code={children.trim()}
      language={language}
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => {
                return <span key={key} {...getTokenProps({ token })} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
