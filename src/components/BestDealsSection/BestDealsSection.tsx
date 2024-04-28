import Image from 'next/image';

export const BestDealsSection = () => {
    return (
        <section className="pt-[150px] pb-[150px] text-lightText bg-backgroundSecondary">
            <div className="container">
                <h2 id="animate-left" className="mb-[60px] text-[45px] font-bold text-center">Best deals</h2>
                <div id="animate-bottom" class="relative overflow-x-auto">
                    <table className="table-auto border-none rounded-xl w-full text-lg text-left rtl:text-right text-lightText">
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
                                        <Image src="/img/1.png" alt="demo" width={35} height={35} className="logo" />
                                        <span className="name font-bold">Bitcoin</span>
                                        <span className="slug">BTC</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/1.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1027.png" alt="demo" width={35} height={35} className="logo" />
                                        <span className="name font-bold">Etherium</span>
                                        <span className="slug">ETH</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/1027.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/1839.png" alt="demo" width={35} height={35} className="logo" />
                                        <span className="name font-bold">BNB</span>
                                        <span className="slug">BNB</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/1839.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                            <tr className="h-[80px] bg-blue-500 bg-opacity-20 backdrop-blur-md">
                                <td className="pt-4 pb-4 !pl-[40px]">
                                    <div className="flex items-center justify-start space-x-4">
                                        <Image src="/img/5426.png" alt="demo" width={35} height={35} className="logo" />
                                        <span className="name font-bold">Solana</span>
                                        <span className="slug">SOL</span>
                                    </div>
                                </td>
                                <td className="pt-4 pb-4 price-tag positive">$66,629.97</td>
                                <td className="pt-4 pb-4 negative"><span className="pl-2">2.93%</span></td>
                                <td className="pt-4 pb-4">26090.75</td>
                                <td className="pt-4 pb-4 !pr-[40px] border-transparent">
                                    <Image src="/img/5426.svg" alt="demo" width={164} height={48} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
