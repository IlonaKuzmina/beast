import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SidebarContext from '@/context/SidebarContext'

const DashboardHeader = () => {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <header className="z-40 py-4 bg-purple-100 shadow-bottom border-b-[1px] border-purple-200 shadow-md mb-2">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1  -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu">
          <Image src="/icons/hamburger.svg" alt="Copy" width={60} height={60} className='w-[40px] h-[40px] inline-block' />
        </button>

        <div className="flex justify-center flex-1 lg:mr-32" />

        <div className="flex items-center flex-shrink-0 space-x-6">
          <Link href="/">Home page</Link>

          <div className='bg-white border-2 rounded-md px-3 py-1 text-[14px]'><Image src="/icons/client.png" alt="menu" width={20} height={20} className='inline-block' /> <span>user.email</span></div>
          <button className='opacity-65 hover:opacity-100'><Image src="/icons/logout.png" width={25} height={25} alt="Log out" className='' /></button>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader;
