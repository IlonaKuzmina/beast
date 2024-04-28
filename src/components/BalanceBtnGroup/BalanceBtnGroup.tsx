'use client'

import SectionTitle from '../Typography/SectionTitle';
import Button from '../Button/Button';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { DepositModalContent } from '../ModalContents/DepositModalContent';
import { MainCalculator } from '../MainCalculator/MainCalculator';
import Image from 'next/image';
import { WithdrawModalContent } from '../ModalContents/WithdrawModalContent';
import BaseCurrencyModalContent from '../ModalContents/BaseCurrencyModalContent';


export const BalanceBtnGroup = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [keys, setKeys] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCurrency, setSelectedCurrency] = useState<string>('EUR');

    const openModal = (content: string) => {
        setModalContent(content);
        setModalOpen(true);
    }

    const ModalContentHandler = () => {
        switch (modalContent) {
            case "deposit":
                return <DepositModalContent />;
            case "withdraw":
                return <WithdrawModalContent />;
            case "exchange":
                return <MainCalculator />;
            case "basecurrency":
                return <BaseCurrencyModalContent
                    title={keys}
                    loading={loading}
                    error={error}
                    OnSelectHandler={selectedCurencyHandler}
                    excludedCurrencies={["USDCPOL", "USDCSW", "USDT20", "USDTBEP20", "USDTSOL", "USDTSW", "USDTTRC20"]} />;
            default:
                return null;
        }
    }

    const getAllCurrency = async () => {
        try {
            const response = await fetch('/api/currency', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const currency = await response.json();
            setKeys(currency.currencyList);
            setLoading(false);
        } catch (error: any) {
            console.error('Failed to complete the operation:', error);
            setError('Failed to fetch data: ' + error.message);
            setLoading(false);
        }
    };

    const selectedCurencyHandler = (currency: string) => {
        setSelectedCurrency(currency);
        setModalOpen(false);
    }

    return (
        <div className='rounded-xl p-7 shadow-lg bg-white mb-7'>
            <SectionTitle title={'Total Balance'} color={'secondaryText'} />

            <div className='flex flex-col md:flex-row justify-between border-t-[1px]'>
                <div className='flex items-center flex-col md:flex-row gap-3 mx-auto my-5 md:my-0 md:mx-0'>
                    <p className='text-2xl font-poppins font-medium '>0.00</p>

                    <div className="flex items-center cursor-pointer gap-3" onClick={() => { openModal("basecurrency"); getAllCurrency() }}>
                        <span className='font-sm text-gray-400 block'> {selectedCurrency}</span>
                        <Image src={`/currencies/${selectedCurrency}.svg`} alt={selectedCurrency} width={35} height={35} className='w-[30px] h-[30px]' />
                        <Image src="/icons/arrow-right.png" alt={'Arrow'} width={8} height={8} className='rotate-90' />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 md:gap-5 md:py-5'>
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
