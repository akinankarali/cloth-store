import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Provide a text for the button */
    children: ReactNode;

    /** Which variant look would you like use */
    variant: 'primary' | 'secondary'
}

export const Button = ({children, variant='primary', ...props}: Props) => {
    return (
        <button 
            className="text-white border-0 rounded-full p-2 cursor-pointer"
            style={{
                backgroundColor: variant === 'primary' ? 'blue' : 'gray',
            }}
            type="button"
            {...props}>
            { children }
        </button>
    )
}
