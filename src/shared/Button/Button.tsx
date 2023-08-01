import { ComponentProps, ReactNode } from 'react'
import './Button.css'

type buttonProps = {
  children: ReactNode;
  buttonStyle?: string;
  buttonSize?: string;
} & ComponentProps<"button">

const STYLE = ['btn-primary', 'btn-outline']
const SIZE = ['btn-medium', 'btn-large']

function Button({children, type, buttonStyle, buttonSize}: buttonProps) {

  const checkButtonStyle = STYLE.includes(buttonStyle!) ? buttonStyle : STYLE[0]

  const checkButtonSize = STYLE.includes(buttonSize!) ? buttonSize : SIZE[0]

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type}>{children}</button>
  )
}

export default Button