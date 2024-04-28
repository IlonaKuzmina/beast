import Image from 'next/image';

export const OurPartnersSection = () => {
    return (
        <section className="bg-backgroundThird text-lightText">
            <div className="container pt-[150px] pb-[150px]">
                <h2 id="animate-left" className="mb-[60px] text-[45px] font-bold text-center">Partners works with</h2>
                <div id="animate-bottom">
                    <h3 className="mb-[30px] text-[30px] text-center text-lightText">Crypto exchanges</h3>
                    <div className="flex flex-wrap items-center justify-center max-w-full mb-[6%]">
                        <div className="px-8 py-6">
                            <Image src="/img/kraken.76cc7a9a.svg" alt="demo" width={226} height={45} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/binance.svg" alt="demo" width={226} height={45} />
                        </div>
                    </div>
                    <h3 className="mb-[30px] text-[30px] text-center text-lightText">Fiat on ramp</h3>
                    <div className="flex flex-wrap items-center justify-center max-w-full mb-[6%]">
                        <div className="px-8 py-6">
                            <Image src="/img/unlim.cb79de33.svg" alt="demo" width={120} height={28} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/isx.e58cc040.png" alt="demo" width={164} height={60} />
                        </div>
                    </div>
                    <h3 className="mb-[30px] text-[30px] text-center text-lightText">Payment processing</h3>
                    <div className="flex flex-wrap items-center justify-center max-w-full mb-[6%]">
                        <div className="px-8 py-6">
                            <Image src="/img/visa.2e37f70f.svg" alt="demo" width={185} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/mastercard.79534478.svg" alt="demo" width={77} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/jcb.701f9b68.svg" alt="demo" width={78} height={60} />
                        </div>
                    </div>
                    <h3 className="mb-[30px] text-[30px] text-center text-lightText">Judical</h3>
                    <div className="flex flex-wrap items-center justify-center max-w-full">
                        <div className="px-8 py-6">
                            <Image src="/img/kpmg.0284b09b.svg" alt="demo" width={145} height={60} />
                        </div>
                        <div className="px-8 py-6">
                            <Image src="/img/goldman.f72cdbf2.svg" alt="demo" width={136} height={60} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
