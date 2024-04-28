import { MainCalculator } from '@/components/MainCalculator/MainCalculator';
import PageTitle from '@/components/Typography/PageTitle';
import React from 'react'

const BaySell = () => {
    return (
        <div className=''>
            <PageTitle title={'Bay / Sell'} />

            <div className='rounded-xl bg-white shadow-md p-3 md:p-7 w-fit'>
                <MainCalculator />
            </div>
        </div>
    )
}

export default BaySell;