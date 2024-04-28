import { MainCalculator } from '../MainCalculator/MainCalculator'

export const HeroSection = () => {
    return (
        <section className="pt-[100px] lg:pb-[400px] pb-[250px] text-lightText" style={{backgroundImage: "url('/img/Vector_2646.jpg')", backgroundSize: "cover"}}>
            <div className="container flex flex-wrap justify-between md:flex-col">
                <div id="animate-left" className="lg:max-w-[50%] max-w-[100%] w-full pt-[50px]">
                    <h2 id="in-view-load-from-left" className="mb-[20px] text-[56px] font-bold font-poppins">Buy & Sell<br /> Crypto Instantly</h2>
                    <p id="in-view-load-title" className="text-[24px]">Buy, sell, trade, and invest in Bitcoin & crypto - all in one safe and simple Lorem ipsum</p>
                </div>

                <div id="animate-bottom" className='lg:pt-0 pt-8'>
                    <MainCalculator />
                </div>
            </div>
        </section>
    )
}
