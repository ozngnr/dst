import React from 'react'

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>
type Ref = HTMLButtonElement
interface ButtonProps extends BaseButtonAttributes {
  label: string
  onClick: () => void
  className?: string
}

const Button = React.forwardRef<Ref, ButtonProps>(({ label = 'Button', className, ...props }, ref) => {
  return (
    <button className={`btn ${className}`} {...props} ref={ref}>
      {label}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
