import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom styling for MDX elements
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-medium text-polana-dark-green mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-medium text-polana-dark-green mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-medium text-polana-dark-green mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-polana-dark-green/80 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-polana-dark-green/80 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-polana-dark-green/80 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-polana-dark-green">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-polana-lime pl-4 italic text-polana-dark-green/70 my-4">
        {children}
      </blockquote>
    ),
    ...components,
  };
}

