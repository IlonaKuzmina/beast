'use client'
import useInViewAnimation from '@/hooks/useInViewAnimation';
import Image from 'next/image';
import { useEffect } from 'react';

export const AboutUsSection = () => {
     useInViewAnimation();

    return (
        <section className="text-lightText font-poppins">
            <div className="container flex justify-center">
                <div className=" flex justify-between bg-blue-500 bg-opacity-20 backdrop-blur-md lg:max-w-[80%] w-full rounded-lg p-[80px] relative">
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">1mln+</h2>
                        <p>Satisfied<br /> Users</p>
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">2mln+</h2>
                        <p>Success<br /> Orders</p>
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">160+</h2>
                        <p>Supported<br /> Countries</p>
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">30+</h2>
                        <p>Supported<br /> Cryptocurrencies</p>
                    </div>
                </div>
            </div>

            <div className="bg-backgroundThird mt-[-137.5px]">
                <div className="container pt-[300px] pb-[150px]">
                    <h2 id="animate-left" className="mb-[60px] text-[45px] font-bold text-center">About our services</h2>
                    <div className="flex bg-backgroundBox rounded-lg max-w-full">
                        <div className="w-[50%] py-[40px] px-[80px] text-md leading-8">At , we facilitate seamless currency-to-crypto exchanges, providing a gateway for users to effortlessly convert fiat currency into various cryptocurrencies. Our platform offers multiple methods for currency conversion, including card processing, open banking, and SEPA transfers. Whether you are new to the crypto world or an experienced trader, Denrosa ensures a secure and straightforward Wexchange process. Explore our platform and embark on your journey into the world of digital currencies.</div>
                        <div className="w-[50%]">
                            <Image src="/img/universe.jpeg" alt="demo" width={1100} height={600} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
