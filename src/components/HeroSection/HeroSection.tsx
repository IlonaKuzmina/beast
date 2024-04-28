import { MainCalculator } from '../MainCalculator/MainCalculator'

export const HeroSection = () => {
    return (
        <section className="pt-[100px] pb-[250px] text-lightText">
            <div className="container flex justify-between">
                <div id="animate-left" className="lg:max-w-[50%] w-full pt-[50px]">
                    <h2 id="in-view-load-from-left" className="mb-[20px] text-[56px] font-bold font-poppins">Buy & Sell<br /> Crypto Instantly</h2>
                    <p id="in-view-load-title" className="text-[24px]">Buy, sell, trade, and invest in Bitcoin & crypto - all in one safe and simple Lorem ipsum</p>
                </div>

                <div id="animate-bottom">
                    <MainCalculator />
                </div>
            </div>
        </section>
    )
}
