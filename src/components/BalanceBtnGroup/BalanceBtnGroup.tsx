'use client'

import SectionTitle from '../Typography/SectionTitle'
import Button from '../Button/Button'
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { DepositModalContent } from '../DepositModalContent/DepositModalContent';
import { MainCalculator } from '../MainCalculator/MainCalculator';

export const BalanceBtnGroup = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content: string) => {
        setModalContent(content);
        setModalOpen(true);
    }


    const ModalContentHandler = () => {
        if (modalContent === "deposit") {
            return <DepositModalContent />
        } else if (modalContent === "withdraw") {
            return "new commponent withdraw"
        } else if (modalContent === "exchange") {
            return <MainCalculator/>
        }
    }

    return (
        <div className='rounded-xl p-7 shadow-lg bg-white mb-7'>
            <SectionTitle title={'Total Balance'} color={'secondaryText'} />

            <div className='flex flex-col md:flex-row  justify-between'>
                <div></div>
                <div className='flex flex-row gap-5'>
                    <Button name={'Deposit'} icon="/icons/deposit.svg" ClickHandler={() => { openModal("deposit") }} />
                    <Button name={'Withdraw'} icon="/icons/withdraw.svg" ClickHandler={() => { openModal("withdraw") }} />
                    <Button name={'Exchange'} icon="/icons/exchange.svg" ClickHandler={() => { openModal("exchange") }} />
                </div>

                <Modal isOpen={modalOpen} OnClose={() => setModalOpen(false)}>
                    <ModalContentHandler />
                </Modal>
            </div>
        </div>
    )
}
