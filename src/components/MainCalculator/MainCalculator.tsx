import Image from 'next/image';

export const MainCalculator = () => {
    return (
        <div className="bg-blue-500 bg-opacity-20 backdrop-blur-md lg:max-w-[490px] w-full rounded-lg">
            <div className="p-8">
                <form>
                    <div className="mb-[20px]">
                        <label className="text-lightText block mb-[10px]">You send</label>
                        <input className="relative block w-full rounded-lg h-[50px] text-secondaryText px-5" value="100"/>
                    </div>
                    <div className="mb-[20px]">
                        <label className="text-lightText block mb-[10px]">You get</label>
                        <input className="relative block w-full rounded-lg h-[50px] text-secondaryText px-5" value="0.0014992374"/>
                    </div>
                    <p className="text-lightText mb-[20px]">Purchase: <strong>100 USD → 0.0014992374 BTCUSDT</strong></p>
                    <button className="w-full cursor-pointer transition-colors duration-150 font-medium focus:outline-none px-6 py-3 rounded-lg text-md text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300">Buy CRYPTO</button>
                    <div className="flex justify-between mt-[20px]">
                        We accept:
                        <div className="flex">
                            <div className="mx-2 p-1 bg-lightText rounded-lg">
                                <Image src="/img/sepa.svg" alt="demo" width={60} height={21} />
                            </div>
                            <div className="mx-2 p-1 bg-lightText rounded-lg">
                                <Image src="/img/sepa.svg" alt="demo" width={60} height={21} />
                            </div>
                            <div className="mx-2 p-1 bg-lightText rounded-lg">
                                <Image src="/img/sepa.svg" alt="demo" width={60} height={21} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
