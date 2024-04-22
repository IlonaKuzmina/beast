import Link from 'next/link'
import SectionTitle from '../Typography/SectionTitle';

export const VerificationCard = () => {
    return (
        <div className='w-full md:w-9/12 lg:w-1/2 p-7  rounded-md bg-white shadow-md'>
            <SectionTitle title={"Verification & Limits"}></SectionTitle>
            <p className='text-center'>Please complete basic verification to start using the exchange services.</p>
            <div className='shadow-md border-zinc-200 p-4 rounded-md'>
                <div>
                    <p className='font-bold text-[23px]'>€700 *</p>
                </div>

                <div className='mt-5'>
                    <div className='flex justify-between'><h5 className='font-bold inline-block'>Basic Verification</h5> <span className='inline-block font-medium'> 5 min</span></div>
                    <p className='mt-5'>To pass Basic verification, you have to provide your email and basic personal information.</p>
                </div>

                <div className='mt-5'>
                    <div className='flex justify-between'><span>Email</span> <span className='font-medium'>Basic Info</span></div>
                    <button className='align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300 w-full mt-4'> Start Verification</button>
                </div>
            </div>
            <p className="mb-0 text-center">* Limits are calculated individually based on a variety of risk factors such as client data, account actions, etc.</p>
            <p className="mb-0 text-center"><span>For Enterprises: </span>If you are interested in our corporate offerings, contact us at <Link href="mailto:enterprise@switchere.com.">enterprise@switchere.com.</Link></p>
        </div>
    )
}


export default VerificationCard;