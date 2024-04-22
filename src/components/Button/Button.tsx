import React from 'react'

interface IButton {
    name: string
    ClickHandler?: () => void
}

export const Button = ({ name, ClickHandler }: IButton) => {
    return (
        <button onClick={ClickHandler} className='align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300 w-full mt-4'>{name}</button>
    )
}


export default Button;