
import Link from 'next/link'
import Button from '../Button/Button'

export const DepositModalContent = () => {
    return (
        <div className='text-center'>
            <h5 className='font-bold text-[22px] font-poppins'>Deposite</h5>
            <p className='my-8'>Please complete at least Basic Verification tier to start using your account balance.</p>
            <Link href="/dashboard/verification">
                <Button name={'Verification & Limits'} />
            </Link>
        </div>
    )
}
