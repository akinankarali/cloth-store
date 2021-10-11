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
            style={{
                backgroundColor: variant === 'primary' ? 'blue' : 'gray',
                color: 'white',
                border: 'none',
                borderRadius: 100,
                padding: 10,
                cursor: 'pointer'
            }}
            type="button"
            {...props}>
            { children }
        </button>
    )
}
