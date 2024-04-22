import React, { useContext, useRef } from 'react'

import SidebarContent from './SidebarContent'
import SidebarContext from '@/context/SidebarContext'
import { Backdrop, Transition } from '@windmill/react-ui'


function MobileSidebar() {
  const sidebarRef = useRef(null)
  const { isSidebarOpen, closeSidebar, saveScroll } = useContext(SidebarContext)

  const linkClickedHandler = () => {
    saveScroll(sidebarRef.current)
  }

  return (
    <Transition show={isSidebarOpen}>
      <>
        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={closeSidebar} />
        </Transition>

        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0 transform -translate-x-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform -translate-x-20"
        >
          <aside
            id="mobileSidebar"
            ref={sidebarRef}
            className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white lg:hidden"
          >
            <SidebarContent linkClicked={linkClickedHandler} />
          </aside>
        </Transition>
      </>
    </Transition>
  )
}

export default MobileSidebar
