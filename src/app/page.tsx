
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-backgroundPrimary">
        <header className="flex justify-between items-center w-full pt-[40px] pb-[40px] px-[200px] shadow-bottom shadow-md text-lightText">
            <a href="/#">
                <div className="text-logo font-bold"><span className="text-purple-600">Crypto</span>Beast</div>
            </a>
            <nav className="flex justify-between mx-5 uppercase">
                <a href="#" className="mx-5 font-semibold">Home</a>
                <a href="#" className="mx-5 font-semibold">About us</a>
                <a href="#" className="mx-5 font-semibold">Faq</a>
                <a href="#" className="mx-5 font-semibold">Support</a>
            </nav>
            <a href="/log-in" className="cursor-pointer transition-colors duration-150 font-medium focus:outline-none px-6 py-3 rounded-lg text-md text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300">
                Log In
            </a>
        </header>
        <section className="px-[200px] py-[300px] text-lightText w-full">
            <h2 className="mb-[60px] text-lg !text-[45px] font-bold">Hero or something</h2>
        </section>
        <section className="px-[200px] py-[200px] text-lightText w-full bg-backgroundThird">
            <h2 className="mb-[60px] text-lg !text-[45px] font-bold text-center">About our services</h2>
            <div className="bg-backgroundBox rounded-lg px-[30px] py-[60px] max-w-[60%] mx-auto text-center text-lg leading-8">At , we facilitate seamless currency-to-crypto exchanges, providing a gateway for users to effortlessly convert fiat currency into various cryptocurrencies. Our platform offers multiple methods for currency conversion, including card processing, open banking, and SEPA transfers. Whether you're new to the crypto world or an experienced trader, Denrosa ensures a secure and straightforward Wexchange process. Explore our platform and embark on your journey into the world of digital currencies.</div>
        </section>
        <section className="px-[200px] py-[200px] text-lightText bg-backgroundSecondary w-full">
            <h2 className="mb-[40px] text-lg !text-[45px] font-bold text-center">FAQ</h2>
        </section>
        <footer></footer>
    </main>
  );
}
