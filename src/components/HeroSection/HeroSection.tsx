import { MainCalculator } from '../MainCalculator/MainCalculator'

export const HeroSection = () => {
    return (
        <section className="py-[300px] text-lightText">
            <div className="container flex justify-between">
                <h2 className="mb-[60px] text-[45px] font-bold font-poppins">Hero or something</h2>
                <MainCalculator />
            </div>
        </section>
    )
}
