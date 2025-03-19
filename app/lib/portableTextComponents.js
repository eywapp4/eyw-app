export const introComponents = {
  marks: {
    left: ({ children }) => <div className="text-left">{children}</div>,
    center: ({ children }) => (
      <div className="text-center w-full">{children}</div>
    ),
    right: ({ children }) => <div className="text-right">{children}</div>,
    justify: ({ children }) => (
      <div className="md:text-justify text-balanced">{children}</div>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal">{children}</ol>,
  },
  block: {
    h1: ({ children }) => (
      <div className="text-3xl md:text-4xl  text-eywnavy-1000">{children}</div>
    ),
    normal: ({ children }) => <div className="py-4">{children}</div>,
  },
};
