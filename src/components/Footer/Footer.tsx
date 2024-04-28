import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className='bg-backgroundPrimary text-lightText pt-[150px] pb-[150px]' style={{backgroundImage: "url('/img/5166950.jpg')", backgroundSize: "cover"}}>
            <div className='container'>
                <div className="flex flex-wrap">
                    <div className="lg:w-[25%] w-[50%]">
                        <h5 className="text-[18px] font-bold mb-[15px]">Convert USD</h5>
                        <ul>
                            <li className="mb-2"><a href="#">Buy Bitcoin with Credit Card</a></li>
                            <li className="mb-2"><a href="#">Lorem ipsum dolor sit</a></li>
                            <li className="mb-2"><a href="#">Buy Bitcoin with Credit Card</a></li>
                            <li className="mb-2"><a href="#">Lorem ipsum</a></li>
                            <li className="mb-2"><a href="#">Buy Bitcoin with Credit Card</a></li>
                            <li className="mb-2"><a href="#">Lorem ipsum dolor sit</a></li>
                            <li className="mb-2"><a href="#">Buy Bitcoin with Credit Card</a></li>
                            <li className="mb-2"><a href="#">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-[25%] w-[50%] lg:pt-0 pt-8">
                        <h5 className="text-[18px] font-bold mb-[15px]">Services</h5>
                        <ul>
                            <li className="mb-2"><a href="#">About us</a></li>
                            <li className="mb-2"><a href="#">Contacts</a></li>
                            <li className="mb-2"><a href="#">Demo text</a></li>
                        </ul>
                        <h5 className="text-[18px] font-bold mb-[15px] mt-[30px]">Other Services</h5>
                        <ul>
                            <li className="mb-2"><a href="#">About us</a></li>
                            <li className="mb-2"><a href="#">Contacts</a></li>
                            <li className="mb-2"><a href="#">Demo text</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-[25%] w-[50%] lg:pt-0 pt-8">
                        <h5 className="text-[18px] font-bold mb-[15px]">Services</h5>
                        <ul>
                        <li className="mb-2"><Link href={'/privacy'}>Privacy Policy</Link></li>
                            <li className="mb-2"><a href="#">Cookie Polic</a></li>
                            <li className="mb-2"><Link href={'/terms'}>Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-[25%] w-[50%] lg:pt-0 pt-8">
                        <h5 className="text-[18px] font-bold mb-[15px]">Services</h5>
                        <ul>
                            <li className="mb-2"><Link href={'/privacy'}>Privacy Policy</Link></li>
                            <li className="mb-2"><a href="#">Cookie Polic</a></li>
                            <li className="mb-2"><Link href={'/terms'}>Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-lightText flex justify-center pt-[50px]">© 2024 CryptoBeast. All rights reserved.</div>
            </div>
        </footer>
    )
}
