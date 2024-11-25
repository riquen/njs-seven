interface ButtonProps {
  label: string
  primary?: boolean
  disabled?: boolean
  onClick?: () => void
}

export default function Button({ label, primary = true, disabled = false, ...props }: ButtonProps) {
  const className = primary
    ? 'bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400'
    : 'border border-neutral-200 hover:bg-neutral-200 active:bg-neutral-300'

  return (
    <button
      className={className}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  )
}
