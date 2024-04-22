'use client'
import PageTitle from '@/components/Typography/PageTitle';
import response, { ITableData } from '@/utils/tableData';
import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
    // setup pages control for every table
    const [pageTable1, setPageTable1] = useState(1)

    // setup data for every table
    const [dataTable1, setDataTable1] = useState<ITableData[]>([])

    // pagination setup
    const resultsPerPage = 10
    const totalResults = response.length

    // pagination change control
    function onPageChangeTable1(p: number) {
        // Ensure the new page number is within the valid range
        if (p < 1) p = 1;
        if (p > Math.ceil(totalResults / resultsPerPage)) p = Math.ceil(totalResults / resultsPerPage);
        setPageTable1(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
    }, [pageTable1])

    const totalPages = Math.ceil(totalResults / resultsPerPage);

    // Generate page numbers dynamically
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className=''>
            <PageTitle title={'Wallet'} />
            {dataTable1.map((user, i) => (<><p>{user.amount}</p></>))}

            <div className="px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800"><div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                <span className="flex items-center font-semibold tracking-wide uppercase">
                    Showing {Math.min((pageTable1 - 1) * resultsPerPage + 1, totalResults)}-{Math.min(pageTable1 * resultsPerPage, totalResults)} of {totalResults}
                </span>
                <div className="flex mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                        <ul className="inline-flex items-center">
                            {/* Previous Button */}
                            <li>
                                <button
                                    disabled={pageTable1 === 1}
                                    onClick={() => onPageChangeTable1(pageTable1 - 1)}
                                    className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent ${pageTable1 === 1 ? 'opacity-50' : 'hover:bg-gray-100'}`}
                                    aria-label="Previous"
                                >
                                    {'<'}
                                </button>
                            </li>
                            {/* Page Buttons */}
                            {pageNumbers.map(page => (
                                <li key={page}>
                                    <button
                                        onClick={() => onPageChangeTable1(page)}
                                        className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-3 py-1 rounded-md text-xs ${page === pageTable1 ? 'text-white bg-purple-600' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10'} focus:outline-none border border-transparent`}
                                    >
                                        {page}
                                    </button>
                                </li>
                            ))}
                            {/* Next Button */}
                            <li>
                                <button
                                    disabled={pageTable1 === totalPages}
                                    onClick={() => onPageChangeTable1(pageTable1 + 1)}
                                    className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent ${pageTable1 === totalPages ? 'opacity-50' : 'hover:bg-gray-100'}`}
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
        </div>
    )
}


export default Dashboard;