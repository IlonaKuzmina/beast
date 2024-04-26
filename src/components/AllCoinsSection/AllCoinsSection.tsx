import React, { useState } from 'react'
import SectionTitle from '../Typography/SectionTitle';
import Image from 'next/image';
import { Transition } from '@windmill/react-ui';

export const AllCoinsSection = () => {
    // const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

    // const answerToggler = (index: number) => {
    //     const isItemAlreadyOpen = isOpenIndex === index;
    //     setIsOpenIndex(isItemAlreadyOpen ? null : index);
    // }

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const answerToggler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='rounded-xl p-7 shadow-lg bg-white'>
            <SectionTitle title={'All coins'} color={'secondaryText'} />

            <div className='flex flex-col md:flex-row  justify-between'>
                <div className="">
                    <div className="grid grid-cols-gridColumsCurrencies py-[11px] gap-7 cursor-pointer" onClick={() => answerToggler()}>
                        <div className="flex justify-center  w-[30px] items-center">
                            <Image src="/icons/empty-star-2.png" alt="Star" width={30} height={30} className='w-[30px] h-[30px]' />
                        </div>

                        <div className="w-[8px] flex items-center ">
                            <Image src="/icons/arrow-right.png" alt={'Arrow'} width={8} height={8} className='' />
                        </div>

                        <div className="flex items-center">
                            <Image src="/currencies/BCH.svg" alt={'BCH'} width={32} height={32} className='me-[5px]' />
                            <div>
                                <div className="text-[12px] font-semibold">BCH</div>
                                <div className="text-gray-400">Bitcoin Cash</div>
                            </div>
                        </div>

                        <div>
                            <div className="font-semibold">
                                0.00000000 BCH
                            </div>

                            <div className="text-gray-400">
                                <span> 0.00 EUR</span>
                            </div>
                        </div>

                        <div className="pe-[5px]"></div>
                        <div className="grid grid-cols-4 gap-[20px]">
                            <button>Deposit</button>
                            <button >Withdraw</button>
                            <button>Buy</button>
                            <button >Sell</button>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-300 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-300 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="pt-[40px] max-w-[90%] ">
                            <div className="cb-wallet-currency__dropdown ">
                                <div className="grid grid-cols-5 border-t-2 border-b-2 py-[11px]">
                                    <div>Date</div>
                                    <div>Type</div>
                                    <div>Order ID</div>
                                    <div>Amount</div>
                                    <div>Balance</div>
                                </div>

                                {''
                                    ? <ul className="cb-wallet-currency__list"><li>some list</li></ul>
                                    : <div className="cb-wallet-currency__cbo-not-found text-center py-[11px]">Transactions not found</div>
                                }


                                <div className="cb-wallet-currency__dropdown-footer">
                                    {/* <div data-v-fc450412="" className="pagination cb-currency__currency-pagination pagination__show-entries">

                                        <div data-v-fc450412="" className="pagination__right">
                                            <label data-v-fc450412="">
                                                <span data-v-fc450412="" className="pagination__right-label-text">Show entries</span>
                                                <select data-v-fc450412="" className="custom-select custom-select-sm form-control form-control-sm">
                                                    <option data-v-fc450412="" value="10">10</option>
                                                    <option data-v-fc450412="" value="25">25</option>
                                                    <option data-v-fc450412="" value="50">50</option>
                                                    <option data-v-fc450412="" value="100">100</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>


            </div>
        </div>
    )
}
