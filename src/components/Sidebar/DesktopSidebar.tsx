import React, { useContext, useRef } from 'react'
import SidebarContent from './SidebarContent'
import SidebarContext from '@/context/SidebarContext'

export const DesktopSidebar = () => {
  const sidebarRef = useRef(null)
    const { saveScroll } = useContext(SidebarContext)
  
    const linkClickedHandler = () => {
      saveScroll(sidebarRef.current)
    }
  
    return (
      <aside
        id="desktopSidebar"
        ref={sidebarRef}
        className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white lg:block"
      >
        <SidebarContent linkClicked={linkClickedHandler} />
      </aside>
    )
}

