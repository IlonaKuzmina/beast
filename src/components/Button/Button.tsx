import React from 'react'
import Image from 'next/image'

interface IButton {
    name: string
    ClickHandler?: () => void
    icon?: string
}

export const Button = ({ name, ClickHandler, icon }: IButton) => {
    return (
        <button onClick={ClickHandler} className='align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300 w-full'>
            {icon && <span className='me-[5px] relative w-[25px] h-[25px]'> <Image src={`${icon}`} alt="Icon" fill /></span>}
            {name}
        </button>
    )
}


export default Button;