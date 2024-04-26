'use client'

import { AllCoinsSection } from '@/components/AllCoinsSection/AllCoinsSection';
import { BalanceBtnGroup } from '@/components/BalanceBtnGroup/BalanceBtnGroup';
import PageTitle from '@/components/Typography/PageTitle';

export default function Page () {


    return (
        <div className=''>
            <PageTitle title={'Wallet'} />
            <BalanceBtnGroup />
            <AllCoinsSection/>
        </div>
    )
}