import PageTitle from '@/components/Typography/PageTitle';

import React from 'react'
import VerificationCard from '@/components/VerificationCard/VerificationCard';

const Verification = () => {
    return (
        <div className=''>
            <PageTitle title={'Verification'} />

            <VerificationCard />
        </div>
    )
}

export default Verification;