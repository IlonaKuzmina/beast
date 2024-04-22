'use client'

import PageTitle from '@/components/Typography/PageTitle';
import Image from 'next/image';
import { useState } from 'react';

const Transactions = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => { setCopied(false) }, 1500)
            })

            .catch(err => console.error('Error copying to clipboard: ', err));
    }

    const TableRow = () => {
        return (
            <div className='grid grid-cols-1 md:grid-cols-7 border-b-2 py-3 grid-flow-row auto-rows-max md:auto-rows-min gap-x-2'>
                <div className='text-[14px]'>16-04-2024</div>
                <div className='uppercase text-[14px]'>dskhbsdjc</div>
                <div className='text-[14px]'>105.000 <span>EUR</span></div>
                <div className='text-[14px]'><Image src="/icons/diamond.svg" alt="Copy" width={30} height={30} className='w-[20px] h-[20px] inline-block me-2' />95.55555555 <span>EURT</span></div>
                <div className='text-[14px]'>Success</div>
                <div className='truncate text-[14px] cursor-pointer relative' onClick={() => copyToClipboard('col text 2')}>scsddckk
                <Image src="/icons/copy.svg" alt="Copy" width={30} height={30} className='w-[15px] h-[15px] ms-2 inline-block' />

                {copied && <p className="absolute right-0 top-0 bg-accentLight max-w-[fit-content] text-accentDark rounded-md py-1 px-2 font-[600] text-[10px] opacity-55 font-poppins">Copyed</p>}
                </div>
                <div className='uppercase text-[14px]'>54sdsd-s3d5csd</div>
            </div>
        )
    }

    return (
        <div className=''>
            <PageTitle title={'Transactions'} />
            <div className='w-full rounded-md bg-white shadow-md p-7'>
                <div className='flex justify-end gap-3 flex-wrap'>
                    <select name="time" id="" className="block bg-gray-50 w-full sm:w-[44%] md:w-1/6 border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300 px-1 py-2">
                        <option value="all">All time</option>
                        <option value="today">Today</option>
                        <option value="week">Last week</option>
                        <option value="month">Last month</option>
                        <option value="year">Last year</option>
                    </select>

                    <select name="status" id="" className="block bg-gray-50 w-full sm:w-[44%] md:w-1/6 border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300 px-1 py-2">
                        <option value="all">All statuses</option>
                        <option value="awaiting">Awaiting Payment</option>
                        <option value="confirmation">Confirmation Pending</option>
                        <option value="processing">Processing</option>
                        <option value="canceled">Canceled</option>
                        <option value="payout">Processing Payout</option>
                        <option value="success">Success</option>
                        <option value="error">Error</option>
                        <option value="expired">Expired</option>
                        <option value="refunded">Refunded</option>
                        <option value="pending">Pending</option>
                    </select>

                    <select name="currencies" id="" className="block bg-gray-50 w-full sm:w-[44%] md:w-1/6 border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300 px-1 py-2">
                        <option value="all">All currencies</option>
                        <option value="eur">EUR</option>
                        <option value="btc">BTC</option>
                        <option value="ada">ADA</option>
                        <option value="bch">BCH</option>
                    </select>
                </div>

                <div className='mt-7'>
                    <div className='grid grid-cols-1 md:grid-cols-7 gap-x-2'>
                        <div className='text-sm font-semibold text-secondaryText'>Date</div>
                        <div className='text-sm font-semibold text-secondaryText'>Client</div>
                        <div className='text-sm font-semibold text-secondaryText'>Pay amount</div>
                        <div className='text-sm font-semibold text-secondaryText'>Received</div>
                        <div className='text-sm font-semibold text-secondaryText'>Status</div>
                        <div className='text-sm font-semibold text-secondaryText'>Order ID</div>
                        <div className='text-sm font-semibold text-secondaryText'>{`${"Client's"} Order ID`}</div>
                    </div>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />

                </div>
            </div>
        </div>
    )
}

export default Transactions;