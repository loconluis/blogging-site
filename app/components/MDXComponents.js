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
  // inlineCode: (props) => (
  //     <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  // ),
  br: (props) => <br />,
  // hr: Hr,
  // a: CustomLink,
  p: (props) => <p>{props.children}</p>,
  // ul: (props) => <ul {...props}></ul>,
  // ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  // li: (props) => <Box as="li" pb={1} {...props} />,
};

// export { CustomLink };
export default MDXComponents;
