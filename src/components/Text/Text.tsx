interface TextProps {
  children: string
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
