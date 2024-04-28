import Link from 'next/link'
import SectionTitle from '../Typography/SectionTitle';
import { Button } from '../Button/Button';

export const VerificationCard = () => {
    return (
        <div className='verification-scroll w-full md:w-5/6 lg:w-2/6 p-4 md:p-7 rounded-xl bg-white shadow-md text-center md:overflow-y-auto md:max-h-screen mb-[50px] md:mb-32'>
            <SectionTitle title={"Verification & Limits"} color={'secondaryText'}></SectionTitle>

            <p className='text-center'>Please complete basic verification to start using the exchange services.</p>


            <div className=''>
                <div className='shadow-md border-zinc-200 p-4 rounded-xl'>
                    <div>
                        <p className='font-bold text-[23px]'>€700 *</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><h5 className='font-bold inline-block'>Basic Verification</h5> <span className='inline-block font-medium'> 5 min</span></div>
                        <p className='mt-5'>To pass Basic verification, you have to provide your email and basic personal information.</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><span>Email</span> <span className='font-medium'>Basic Info</span></div>
                        <Button name={'Start Verification'} />
                    </div>
                </div>

                <p className="mb-0 text-center">* Limits are calculated individually based on a variety of risk factors such as client data, account actions, etc.</p>
                <p className="mb-0 text-center"><span>For Enterprises: </span>If you are interested in our corporate offerings, contact us at <Link href="mailto:enterprise@switchere.com.">enterprise@switchere.com.</Link></p>
            </div>

            <div className=''>
                <div className='shadow-md border-zinc-200 p-4 rounded-xl'>
                    <div>
                        <p className='font-bold text-[23px]'>€700 *</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><h5 className='font-bold inline-block'>Basic Verification</h5> <span className='inline-block font-medium'> 5 min</span></div>
                        <p className='mt-5'>To pass Basic verification, you have to provide your email and basic personal information.</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><span>Email</span> <span className='font-medium'>Basic Info</span></div>
                        <Button name={'Start Verification'} />
                    </div>
                </div>

                <p className="mb-0 text-center">* Limits are calculated individually based on a variety of risk factors such as client data, account actions, etc.</p>
                <p className="mb-0 text-center"><span>For Enterprises: </span>If you are interested in our corporate offerings, contact us at <Link href="mailto:enterprise@switchere.com.">enterprise@switchere.com.</Link></p>
            </div>

            <div className=''>
                <div className='shadow-md border-zinc-200 p-4 rounded-xl'>
                    <div>
                        <p className='font-bold text-[23px]'>€700 *</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><h5 className='font-bold inline-block'>Basic Verification</h5> <span className='inline-block font-medium'> 5 min</span></div>
                        <p className='mt-5'>To pass Basic verification, you have to provide your email and basic personal information.</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><span>Email</span> <span className='font-medium'>Basic Info</span></div>
                        <Button name={'Start Verification'} />
                    </div>
                </div>

                <p className="mb-0 text-center">* Limits are calculated individually based on a variety of risk factors such as client data, account actions, etc.</p>
                <p className="mb-0 text-center"><span>For Enterprises: </span>If you are interested in our corporate offerings, contact us at <Link href="mailto:enterprise@switchere.com.">enterprise@switchere.com.</Link></p>
            </div>

            <div className=''>
                <div className='shadow-md border-zinc-200 p-4 rounded-xl'>
                    <div>
                        <p className='font-bold text-[23px]'>€700 *</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><h5 className='font-bold inline-block'>Basic Verification</h5> <span className='inline-block font-medium'> 5 min</span></div>
                        <p className='mt-5'>To pass Basic verification, you have to provide your email and basic personal information.</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between'><span>Email</span> <span className='font-medium'>Basic Info</span></div>
                        <Button name={'Start Verification'} />
                    </div>
                </div>

                <p className="mb-0 text-center">* Limits are calculated individually based on a variety of risk factors such as client data, account actions, etc.</p>
                <p className="mb-0 text-center"><span>For Enterprises: </span>If you are interested in our corporate offerings, contact us at <Link href="mailto:enterprise@switchere.com.">enterprise@switchere.com.</Link></p>
            </div>

        </div>
    )
}


export default VerificationCard;