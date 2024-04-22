'use client'

import Link from 'next/link'
import Image from 'next/image'
// import { routeIsActive } from '../../routes/sidebar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'



interface IRoute {
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

interface ISidebarContent {
  linkClicked: () => void
}

function SidebarContent({ linkClicked }: ISidebarContent) {
  const routes: IRoute[] = [
    {
      path: '/dashboard', // the url
      icon: 'wallet.png', // the component being exported from icons/index.js
      name: 'Wallet', // name that appear in Sidebar
      exact: true,
    },
    {
      path: '/dashboard/bay-sell',
      icon: 'buy-sell.png',
      name: 'Bay / Sell',
    },
    {
      path: '/dashboard/transactions',
      icon: 'transactions.png',
      name: 'Transactions',
    },
    {
      path: '/dashboard/verification',
      icon: 'verification.png',
      name: 'Verification',
    },
  ]

  // const { pathname } = useRouter();

  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const routerPath = isClient ? useRouter() : { pathname: '/' };

  return (
    <div className="text-gray-500 ">
      <Link href="/#" passHref className=''>
        <div className='ml-6 py-6 text-lg font-bold text-secondaryText'>
          CryptoBeast.live
        </div>
      </Link>

      <ul>
        {routes.map((route) =>
          <li className='relative px-6 py-3' key={route.name}>
            <Link
              href={route.path || '#'}
              scroll={false}
              className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-secondaryText  
                ? ' text-secondaryText'
                : ''
                }`}
              onClick={linkClicked}
            >

              {/* {routeIsActive(routerPath.pathname, route) && (
                <span
                  className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'
                ></span>
              )} */}

              <Image src={`/icons/${route.icon}`} alt={route.name} className='w-[30px] h-[30px] ' width={45} height={45}></Image>
              <span className='ml-4'>{route.name}</span>
            </Link>
          </li>
        )}
      </ul>

    </div>
  )
}

export default SidebarContent