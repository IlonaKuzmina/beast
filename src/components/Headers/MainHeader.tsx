import Link from 'next/link';

export const MainHeader = () => {
    return (
        <header className="py-[40px] shadow-bottom shadow-md text-lightText bg-backgroundPrimary">
          <div className='container flex justify-between items-center'>
            <Link href="/#">
                <div className="text-logo font-bold "><span className="text-purple-600">Crypto</span>Beast</div>
            </Link>
            <nav className="flex justify-between mx-5 uppercase">
                <Link href="#" className="mx-5 font-semibold">Home</Link>
                <Link href="#" className="mx-5 font-semibold">About us</Link>
                <Link href="#" className="mx-5 font-semibold">Faq</Link>
                <Link href="#" className="mx-5 font-semibold">Support</Link>
            </nav>

            <Link href="/log-in" className="cursor-pointer transition-colors duration-150 font-medium focus:outline-none px-6 py-3 rounded-lg text-md text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300">
                Log In
            </Link>
          </div>
        </header>
    )
}
