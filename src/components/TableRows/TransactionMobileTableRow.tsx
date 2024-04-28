import { ITransactionsData } from '@/utils/transactionsData';
import Image from 'next/image';

interface ITransactionTableRowData extends ITransactionsData {
    showCopied: boolean;
    copyToClipboard: (orderID: string) => Promise<void>;
}

const TransactionMobileTableRow = ({ date, client, amount, payCurrency, received, receivedCurrency, status, orderID, clientOrderID, copyToClipboard, showCopied }: ITransactionTableRowData) => {
    return (
        <div className='p-[15px] sm:p-3 border-b-2 grid grid-col-1 sm:grid-cols-2 gap-2'>
            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>Date</div>
                <div className='text-[14px]'>{date}</div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>Client</div>
                <div className='uppercase text-[14px]'>{client}</div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>Pay amount</div>
                <div className='text-[14px]'>{amount} <span>{payCurrency}</span></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>Received</div>
                <div className='text-[14px]'><Image src="/icons/diamond.svg" alt="Copy" width={30} height={30} className='w-[20px] h-[20px] inline-block me-2' />{received}<span> {receivedCurrency}</span></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>Status</div>
                <div className='text-[14px] capitalize'>{status}</div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>Order ID</div>
                <div className='text-[14px] cursor-pointer relative flex flex-nowrap items-center' onClick={() => copyToClipboard(orderID)}>
                    {orderID}
                    <Image src="/icons/copy.svg" alt="Copy" width={15} height={15} className='w-[15px] h-[15px] ms-1' />
                    {showCopied && <p className="absolute right-0 top-0 bg-accentLight max-w-[fit-content] text-accentDark rounded-md py-1 px-2 font-[600] text-[10px] opacity-55 font-poppins">Copyed</p>}
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-1'>
                <div className='text-sm font-semibold text-secondaryText'>{`${"Client's"} Order ID`}</div>
                <div className='uppercase text-[14px]'>{clientOrderID}</div>
            </div>
        </div>
    );
}

export default TransactionMobileTableRow;
