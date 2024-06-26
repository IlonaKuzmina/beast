import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button/Button';

const LogIn = () => {
    return (
        <div className='flex items-center min-h-screen p-6 bg-gray-50 '>
            <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl '>
                <div className='flex flex-col overflow-y-auto md:flex-row'>
                    <div className='relative h-[250px] md:h-auto md:w-1/2'>
                        <Image
                            className='object-cover w-full h-full'
                            src='/img/login-office.jpeg'
                            alt='Office'
                            fill
                        />
                    </div>
                    <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
                        <div className='w-full'>
                            <h1 className='mb-4 text-xl font-semibold text-secondaryText  font-poppins'>
                                Login
                            </h1>

                            <label htmlFor='email' className='block text-sm text-secondaryText  mt-4'>
                                <span>Email</span>
                                <input id="email" name="email"
                                    type='email' placeholder='john@doe.com'
                                    className='block w-full border-[1px]  text-sm focus:outline-none  leading-5 rounded-md focus:border-purple-400 border-gray-300  focus:ring focus:ring-purple-300 px-1 py-2' >
                                </input>
                            </label>

                            <label htmlFor='password' className='block text-sm text-secondaryText  mt-4'>
                                <span>Password</span>
                                <input id="password" name="password"
                                    type='password' placeholder='*********'
                                    className='block w-full border-[1px]  text-sm focus:outline-none  leading-5 rounded-md focus:border-purple-400 border-gray-300  focus:ring focus:ring-purple-300 px-1 py-2'>
                                </input>
                            </label>

                            <Link href='/dashboard' passHref={true}>
                                <Button name={"Log in"} />
                            </Link>

                            <hr className='my-8' />


                            <p className='mt-4'>
                                <Link href='/forgot-password' className='text-sm font-medium text-purple-600  hover:underline'>
                                    Forgot your password?
                                </Link>
                            </p>
                            <p className='mt-1'>
                                <Link href='/create-account' className='text-sm font-medium text-purple-600  hover:underline'>
                                    Create account
                                </Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
