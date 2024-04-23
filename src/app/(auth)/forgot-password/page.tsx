import Button from '@/components/Button/Button';
import Image from 'next/image'
import Link from 'next/link'

const ForgotPassword = () => {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="relative h-32 md:h-auto md:w-1/2">
                        <Image
                            aria-hidden="true"
                            className="object-cover w-full h-full"
                            src="/img/forgot-password-office.jpeg"
                            alt="Office"
                            layout='fill'
                        />
                    </div>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold text-secondaryText  font-poppins">
                                Forgot password
                            </h1>

                            <label htmlFor='email_2' className='block text-sm text-secondaryText  mt-4'>
                                <span>Email</span>
                                <input id="email_2" name="email_2"
                                    type='email' placeholder='john@doe.com'
                                    className='block w-full border-[1px]  text-sm focus:outline-none  leading-5 rounded-md focus:border-purple-400 border-gray-300  focus:ring focus:ring-purple-300 px-1 py-2'>
                                </input>
                            </label>

                            <Link href='/' passHref={true}>
                                <Button name={"Recover password"} />
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;