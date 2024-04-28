import Image from 'next/image';
import { Transition } from '@windmill/react-ui';

interface IWalletCoinsTableRow {
    isOpen: boolean;
    clickHandler: () => void;
}

export const WalletCoinsTableRow = ({ isOpen, clickHandler }: IWalletCoinsTableRow) => {
    return (
        <div className=" bg-white shadow-lg md:shadow-none p-4 md:p-0 rounded-xl">
            <div className="flex flex-row flex-wrap md:grid md:grid-cols-gridColumsCurrencies py-3 md:py-[11px] gap-3 md:gap-4 relative" >
                <div className=" flex justify-center w-[20px]  md:w-[30px] items-center">
                    <Image src="/icons/empty-star-2.png" alt="Star" width={30} height={30} className='w-full h-auto' />
                </div>

                <div className="w-[8px] flex items-center absolute md:relative right-0 top-6 md:right-0 md:top-0 cursor-pointer" onClick={clickHandler}>
                    <Image src="/icons/arrow-right.png" alt={'Arrow'} width={8} height={8} className='' />
                </div>

                <div className="flex items-center ">
                    <Image src="/currencies/BCH.svg" alt={'BCH'} width={32} height={32} className='me-[5px]' />
                    <div>
                        <div className="text-[12px] font-semibold">BCH</div>
                        <div className="text-gray-400">Bitcoin Cash</div>
                    </div>
                </div>

                <div className='w-full md:w-fit'>
                    <div className="font-semibold">
                        0.00000000 BCH
                    </div>

                    <div className="text-gray-400">
                        <span> 0.00 EUR</span>
                    </div>
                </div>

                <div className=""></div>
                <div className="flex flex-row flex-wrap justify-between w-full gap-[10px] border-t-[1px] md:border-none pt-5">
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
                <div className="pt-[40px] ">
                    <div className="">
                        <div className="grid grid-cols-5 border-t-2 border-b-2 py-[11px]">
                            <div>Date</div>
                            <div>Type</div>
                            <div>Order ID</div>
                            <div>Amount</div>
                            <div>Balance</div>
                        </div>

                        {''
                            ? <ul className=""><li>some list</li></ul>
                            : <div className="text-center py-[11px]">Transactions not found</div>
                        }
                    </div>
                </div>
            </Transition>
        </div>
    )
}
