import React, { useState } from 'react'
import SectionTitle from '../Typography/SectionTitle';
import { WalletCoinsTableRow } from '../TableRows/WalletCoinsTableRow';

export const AllCoinsSection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const answerToggler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='rounded-xl p-0 md:p-7 md:shadow-lg bg-[#F9FAFB] md:bg-white'>
            <SectionTitle title={'All coins'} color={'secondaryText'} />

            <div className='flex flex-col gap-5 md:gap-0 justify-between md:border-t-[1px] md:shadow-none'>
                <WalletCoinsTableRow isOpen={isOpen} clickHandler={() => answerToggler()} />
            </div>
        </div>
    )
}
