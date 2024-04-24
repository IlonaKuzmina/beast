import { ITransactionsData } from '@/utils/transactionsData';
import Image from 'next/image';

interface ITableRowData extends ITransactionsData {
    showCopied: boolean;
    copyToClipboard: (orderID: string) => Promise<void>;
}

const TableRow = ({ date, client, amount, payCurrency, received, receivedCurrency, status, orderID, clientOrderID, copyToClipboard, showCopied }: ITableRowData) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-7 border-b-2 py-3 grid-flow-row auto-rows-max md:auto-rows-min gap-x-2'>
            <div className='text-[14px]'>{date}</div>
            <div className='uppercase text-[14px]'>{client}</div>
            <div className='text-[14px]'>{amount} <span>{payCurrency}</span></div>
            <div className='text-[14px]'><Image src="/icons/diamond.svg" alt="Copy" width={30} height={30} className='w-[20px] h-[20px] inline-block me-2' />{received}<span> {receivedCurrency}</span></div>
            <div className='text-[14px]'>{status}</div>
            <div className='text-[14px] cursor-pointer relative flex flex-nowrap items-center' onClick={() => copyToClipboard(orderID)}>
                {orderID}
                <Image src="/icons/copy.svg" alt="Copy" width={15} height={15} className='w-[15px] h-[15px] ms-1' />
                {showCopied && <p className="absolute right-0 top-0 bg-accentLight max-w-[fit-content] text-accentDark rounded-md py-1 px-2 font-[600] text-[10px] opacity-55 font-poppins">Copyed</p>}
            </div>
            <div className='uppercase text-[14px]'>{clientOrderID}</div>
        </div>
    );
}

export default TableRow;
