import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface Props {
  children?: any,
  type?: any,
  onClick?: () => {},
  buttonStyle?: string,
  buttonSize?: string
}

const STYLES: string[] = ['btn--primary', 'btn--outline'];
const SIZES: string[] = ['btn--medium', 'btn--large'];

const Button: React.FC<Props> = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
  ? buttonStyle
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0];

  console.log(checkButtonSize);
  return(
    <Link to='/signup' className='btn-mobile'>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >{children}</button>
    </Link>
  )
}

export default Button;