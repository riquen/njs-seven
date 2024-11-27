interface TextProps {
  children: string
  /** Can be 'h1', 'h2', 'h3', 'h4', or 'p' */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export default function Text({ children, tag = 'h1', ...props }: TextProps) {
  const Tag = tag

  return (
    <Tag
      {...props}
    >
      {children}
    </Tag>
  )
}
