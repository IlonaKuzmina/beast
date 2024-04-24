'use client'

import MobileTableRow from '@/components/TableRows/MobileTableRow';
import TableRow from '@/components/TableRows/TableRow';
import PageTitle from '@/components/Typography/PageTitle';
import response, { ITransactionsData } from '@/utils/transactionsData';
import { useEffect, useState } from 'react';

const Transactions = () => {
    const [pageTable, setPageTable] = useState(1);
    const [dataTable, setDataTable] = useState<ITransactionsData[]>([]);
    const [copiedOrderID, setCopiedOrderID] = useState<string | null>(null);

    const [isMobile, setIsMobile] = useState(false)

    const resultsPerPage = 10;
    const totalResults = response.length;

    const onPageChangeTable = (p: number) => {
        if (p < 1) p = 1;
        if (p > Math.ceil(totalResults / resultsPerPage)) p = Math.ceil(totalResults / resultsPerPage);
        setPageTable(p);
    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        setDataTable(response.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage))
    }, [pageTable])

    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleCopyToClipboard = async (orderID: string) => {
        try {
            await navigator.clipboard.writeText(orderID);
            setCopiedOrderID(orderID);
            setTimeout(() => { setCopiedOrderID(null) }, 1500);
        } catch (err) {
            console.error('Error copying to clipboard: ', err);
        }
    }

    return (
        <div className=''>
            <PageTitle title={'Transactions'} />
            <div className='w-full rounded-md bg-white shadow-md p-3 md:p-7'>
                <div className='flex justify-end gap-3 flex-wrap'>
                    <select
                        name="time"
                        id=""
                        disabled={dataTable.length === 0}
                        className={`${dataTable.length === 0 ? "bg-gray-300 cursor-not-allowed" : " bg-gray-50 cursor-pointer"}  block  w-full sm:w-[44%] md:w-1/6 border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300 px-1 py-2`}>
                        <option value="all">All time</option>
                        <option value="today">Today</option>
                        <option value="week">Last week</option>
                        <option value="month">Last month</option>
                        <option value="year">Last year</option>
                    </select>

                    <select
                        name="status"
                        id=""
                        disabled={dataTable.length === 0}
                        className={`${dataTable.length === 0 ? "bg-gray-300 cursor-not-allowed" : " bg-gray-50 cursor-pointer"}  block  w-full sm:w-[44%] md:w-1/6 border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300 px-1 py-2`}>
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

                    <select
                        name="currencies"
                        id=""
                        disabled={dataTable.length === 0}
                        className={`${dataTable.length === 0 ? "bg-gray-300 cursor-not-allowed" : " bg-gray-50 cursor-pointer"}  block  w-full sm:w-[44%] md:w-1/6 border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300 px-1 py-2`}>
                        <option value="all">All currencies</option>
                        <option value="eur">EUR</option>
                        <option value="btc">BTC</option>
                        <option value="ada">ADA</option>
                        <option value="bch">BCH</option>
                    </select>
                </div>

                <div className='mt-7'>
                    <div className='hidden md:grid grid-cols-1 md:grid-cols-7 gap-x-2'>
                        <div className='text-sm font-semibold text-secondaryText'>Date</div>
                        <div className='text-sm font-semibold text-secondaryText'>Client</div>
                        <div className='text-sm font-semibold text-secondaryText'>Pay amount</div>
                        <div className='text-sm font-semibold text-secondaryText'>Received</div>
                        <div className='text-sm font-semibold text-secondaryText'>Status</div>
                        <div className='text-sm font-semibold text-secondaryText'>Order ID</div>
                        <div className='text-sm font-semibold text-secondaryText'>{`${"Client's"} Order ID`}</div>
                    </div>
                    <div className='mt-7'>
                        {dataTable.length > 0 && dataTable
                            ?
                            <>
                                {dataTable.map((transaction, index) => (
                                    isMobile ? (
                                        <MobileTableRow
                                            key={transaction.orderID}
                                            {...transaction}
                                            showCopied={copiedOrderID === transaction.orderID}
                                            copyToClipboard={handleCopyToClipboard}
                                        />
                                    ) : (
                                        <TableRow
                                            key={transaction.orderID}
                                            {...transaction}
                                            showCopied={copiedOrderID === transaction.orderID}
                                            copyToClipboard={handleCopyToClipboard}
                                        />
                                    )
                                ))}

                                <div className="px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800">
                                    <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                                        <span className="flex items-center justify-center sm:justify-end font-semibold tracking-wide uppercase">
                                            Showing {Math.min((pageTable - 1) * resultsPerPage + 1, totalResults)}-{Math.min(pageTable * resultsPerPage, totalResults)} of {totalResults}
                                        </span>

                                        <div className="flex mt-2 sm:mt-auto justify-center  sm:justify-end">
                                            <nav aria-label="Table navigation">
                                                <ul className="inline-flex items-center">
                                                    {/* Previous Button */}
                                                    <li>
                                                        <button
                                                            disabled={pageTable === 1}
                                                            onClick={() => onPageChangeTable(pageTable - 1)}
                                                            className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent ${pageTable === 1 ? 'opacity-50' : 'hover:bg-gray-100'}`}
                                                            aria-label="Previous"
                                                        >
                                                            {'<'}
                                                        </button>
                                                    </li>
                                                    {/* Page Buttons */}
                                                    {pageNumbers.map(page => (
                                                        <li key={page}>
                                                            <button
                                                                onClick={() => onPageChangeTable(page)}
                                                                className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-3 py-1 rounded-md text-xs ${page === pageTable ? 'text-white bg-purple-600' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10'} focus:outline-none border border-transparent`}
                                                            >
                                                                {page}
                                                            </button>
                                                        </li>
                                                    ))}
                                                    {/* Next Button */}
                                                    <li>
                                                        <button
                                                            disabled={pageTable === totalPages}
                                                            onClick={() => onPageChangeTable(pageTable + 1)}
                                                            className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent ${pageTable === totalPages ? 'opacity-50' : 'hover:bg-gray-100'}`}
                                                            aria-label="Next"
                                                        >
                                                            {'>'}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <div className='min-h-[100px] flex items-center justify-center'>
                                <p className='text-center'>No data available.</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;