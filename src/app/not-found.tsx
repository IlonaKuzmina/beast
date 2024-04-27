import Link from 'next/link';
import Image from 'next/image';

export default async function NotFound() {

  return (
    <div className=' bg-backgroundPrimary h-screen text-lightText'>
      <div className='flex items-center justify-center flex-col md:flex-row gap-10 container text-center pt-24 md:pt-44'>
        <div className='max-w-[320px] md:max-w-[500px]'>
          <Image src={'/error-404.png'} alt={'404'} width={570} height={413} />
        </div>
        <div >
          <h2 className='font-poppins font-bold uppercase text-4xl md:text-5xl mb-2'>We looked <br /> everywhere.</h2>
          <p className='mb-10'>Looks like this page is missing.</p>
          <Link href={'/'}
            className='cursor-pointer transition-colors duration-150 font-medium focus:outline-none px-6 py-3 rounded-lg text-md text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300"'>
            HomePage
          </Link>
        </div>
      </div>
    </div>
  )
}
