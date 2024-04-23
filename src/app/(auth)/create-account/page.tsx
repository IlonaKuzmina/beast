import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button/Button';

const CreateAccount = () => {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="relative h-32 md:h-auto md:w-1/2">
                        <Image
                            aria-hidden="true"
                            className="object-cover w-full h-full"
                            src="/img/create-account-office.jpeg"
                            alt="Office"
                            layout='fill'
                        />
                    </div>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold text-secondaryText font-poppins">
                                Create account
                            </h1>

                            <label className='block text-sm text-secondaryText mt-4' htmlFor="email">
                                <span>Email</span>
                                <input id="email" name="email" className='block w-full border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300  focus:ring focus:ring-purple-300 px-1 py-2' type='email' placeholder='john@doe.com' >
                                </input>
                            </label>

                            <label htmlFor="password" className='block text-sm text-secondaryText mt-4'>
                                <span>Password</span>
                                <input id="password" name="password" className='block w-full border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300  focus:ring focus:ring-purple-300 px-1 py-2' type='password' placeholder='*********'>
                                </input>
                            </label>

                            <label htmlFor='confirm_password' className='block text-sm text-secondaryText mt-4'>
                                <span>Confirm password</span>
                                <input id="confirm_password" name="confirm_password" className='block w-full border-[1px] text-sm focus:outline-none leading-5 rounded-md focus:border-purple-400 border-gray-300  focus:ring focus:ring-purple-300 px-1 py-2' type='password' placeholder='*********'>
                                </input>
                            </label>

                            <label>
                                <input type="checkbox" className='text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 rounded border-gray-300 '></input>
                                <span className="ml-2"> I agree to the  <span> </span>
                                <Link href="/privacy-policy" className="underline">privacy policy</Link>
                               </span>
                            </label>


                            <Link href='/log-in' passHref={true}>
                                <Button name={"Create an account"}/>  
                            </Link>

                            <hr className="my-8" />

                            <p className="mt-4">
                                <Link href="/log-in" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                                    Already have an account? Login
                                </Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;