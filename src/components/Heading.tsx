type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as = "h2",
  children,
  className = "",
}: HeadingProps) {
  const Tag = as;

  return <Tag className={className}>{children}</Tag>;
}
