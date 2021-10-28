import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode

  /** Which variant look would you like use */
  variant: 'primary' | 'secondary'
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      className={`text-black border
             border-black
              rounded p-2
              cursor-pointer
              ml-2 mr-2
              ${
                variant === 'primary'
                  ? 'bg-white hover:bg-gray-800 hover:text-white'
                  : 'bg-black text-white hover:bg-white hover:text-black'
              }`}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
