interface ButtonProps {
  label: string
  primary?: boolean
  onClick?: () => void
}

export default function Button({ label, primary = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
    >
      {label}
    </button>
  )
}
