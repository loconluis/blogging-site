"use client";
import { useState } from "react";
import { Highlight } from "prism-react-renderer";

/** Syntax colours from the page's own palette: lime, white, grey. No rainbow. */
const pageTheme = {
  plain: { color: "#eaeaea", backgroundColor: "#000000" },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#7d7d7d", fontStyle: "italic" } },
    { types: ["punctuation"], style: { color: "#8f8f8f" } },
    { types: ["keyword", "atrule", "important"], style: { color: "#dafa9c" } },
    { types: ["string", "char", "attr-value", "inserted"], style: { color: "#c9e8a0" } },
    { types: ["number", "boolean", "constant", "symbol"], style: { color: "#e6f5cf" } },
    { types: ["function", "class-name"], style: { color: "#ffffff" } },
    { types: ["property", "tag", "selector", "attr-name"], style: { color: "#c8c8c8" } },
    { types: ["operator", "entity", "url"], style: { color: "#9b9b9b" } },
    { types: ["variable", "regex"], style: { color: "#eaeaea" } },
  ],
};

const NAMES: Record<string, string> = {
  js: "JavaScript",
  javascript: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  typescript: "TypeScript",
  tsx: "TSX",
  py: "Python",
  python: "Python",
  sh: "Shell",
  bash: "Shell",
  zsh: "Shell",
  json: "JSON",
  yaml: "YAML",
  yml: "YAML",
  css: "CSS",
  html: "HTML",
  md: "Markdown",
  markdown: "Markdown",
  sql: "SQL",
};

export default function CodeBlock({ children, className }: { children: any; className?: string }) {
  const [copied, setCopied] = useState(false);
  const language = className ? className.replace(/language-/, "") : "markdown";
  const code = String(children).replace(/\n$/, "");
  const label = NAMES[language] || language;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: the code is still selectable by hand */
    }
  };

  return (
    <div className="code-panel" data-ui>
      <div className="cp-bar">
        <span>{label}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Code copied" : `Copy the ${label} code`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <Highlight code={code} language={language} theme={pageTheme}>
        {({ className: cls, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cls} style={{ ...style, background: "transparent" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}