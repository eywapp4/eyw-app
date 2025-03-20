import type { PortableTextReactComponents } from "@portabletext/react";

export const introComponents: Partial<PortableTextReactComponents> = {
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
    bullet: ({ children }) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <div className="text-3xl md:text-4xl  text-eywnavy-1000">{children}</div>
    ),
    h2: ({ children }) => (
      <div className="text-2xl md:text-3xl  text-eywnavy-1000">{children}</div>
    ),
    h3: ({ children }) => (
      <div className="text-xl md:text-2xl  text-eywnavy-1000">{children}</div>
    ),
    h4: ({ children }) => (
      <div className="text-lg md:text-xl  text-eywnavy-1000">{children}</div>
    ),
    normal: ({ children }) => <div className="py-4">{children}</div>,
  },
};
