'use client'

import Link from 'next/link'
import Image from 'next/image'
import { routeIsActive } from '../../routes/sidebar'
import { useEffect, useState } from 'react'
import routes from '@/routes/sidebar'
import { usePathname } from 'next/navigation'


interface ISidebarContent {
  linkClicked: () => void
}

function SidebarContent({ linkClicked }: ISidebarContent) {
  const pathname = usePathname();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const routerPath = isClient ? pathname : '/';

  return (
    <div className="text-gray-500 ">
      <Link href="/">
        <div className="text-logo font-bold ml-6 py-6"><span className="text-purple-600">Crypto</span>Beast</div>
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

              {routeIsActive(routerPath, route) && (
                <span
                  className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
                  aria-hidden='true'
                ></span>
              )}

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