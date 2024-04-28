'use client'

import DashboardHeader from '@/components/Headers/DashboardHeader'
import Sidebar from '@/components/Sidebar'
import SidebarContext, { SidebarProvider } from '@/context/SidebarContext'
import React, { useContext } from 'react'

interface ILayout {
    children: React.ReactNode
}

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const { isSidebarOpen } = useContext(SidebarContext)

    return (
        <SidebarProvider>
            <div className={`flex h-screen bg-gray-50  ${isSidebarOpen && 'overflow-hidden'}`} >
                <Sidebar />
                <div className="flex flex-col flex-1 w-full">
                    <DashboardHeader />
                    <main className="h-full overflow-y-auto">
                        <div className="container grid px-3 lg:px-6 mx-auto">{children}</div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}