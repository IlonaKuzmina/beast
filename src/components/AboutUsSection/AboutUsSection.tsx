import Image from 'next/image';

export const AboutUsSection = () => {
    return (
        <section className="text-lightText font-poppins">
            <div className="container flex justify-center">
                <div className="flex justify-between bg-blue-500 bg-opacity-20 backdrop-blur-md lg:max-w-[80%] w-full rounded-lg p-[80px] relative">
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">1mln+</h2>
                        <p>Satisfied<br/> Users</p>
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">2mln+</h2>
                        <p>Success<br/> Orders</p>
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">160+</h2>
                        <p>Supported<br/> Countries</p>
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-[45px] font-bold">30+</h2>
                        <p>Supported<br/> Cryptocurrencies</p>
                    </div>
                </div>
            </div>
            <div className="bg-backgroundThird mt-[-137.5px]">
                <div className="container pt-[300px] pb-[150px]">
                    <h2 className="mb-[60px] text-[45px] font-bold text-center">About our services</h2>
                    <div className="flex bg-backgroundBox rounded-lg max-w-full">
                        <div className="w-[50%] py-[40px] px-[80px] text-md leading-8">At , we facilitate seamless currency-to-crypto exchanges, providing a gateway for users to effortlessly convert fiat currency into various cryptocurrencies. Our platform offers multiple methods for currency conversion, including card processing, open banking, and SEPA transfers. Whether you are new to the crypto world or an experienced trader, Denrosa ensures a secure and straightforward Wexchange process. Explore our platform and embark on your journey into the world of digital currencies.</div>
                        <div className="w-[50%]">
                            <Image src="/img/universe.jpeg" alt="demo" width={1100} height={600} />
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-[150px] pb-[150px]">
                <div className="container">
                    <h2 className="mb-[60px] text-[45px] font-bold text-center">Lorem Ipsum</h2>
                    <table className="border-none rounded-xl w-full text-lg text-left rtl:text-right text-lightText">
                        <thead className="text-md text-lightText uppercase bg-blue-500 bg-opacity-20 backdrop-blur-md">
                            <tr className="font-bold text-[16px]">
                                <th className="rounded-tl-xl text-left min-w-[200px] pt-[20px] pb-[20px] !pl-[40px]">Name</th>
                                <th className="md:w-[200px]">Price</th>
                                <th className="md:w-[200px]">24hr %</th>
                                <th className="md:w-[200px]">Volume</th>
                                <th className="rounded-tr-xl !pr-[65px]"> Last 7 days</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo"/>
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/11.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo"/>
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/11.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo"/>
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/11.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo"/>
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/11.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo"/>
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/11.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="rounded-bl-xl pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo"/>
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/11.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="bg-backgroundThird">
                <div className="container pt-[150px] pb-[150px]">
                    <h2 className="mb-[60px] text-[45px] font-bold text-center">Partners works with</h2>
                    <div className="flex flex-wrap items-center justify-center max-w-full">
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/visa.svg" alt="demo" width={185} height={60} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
