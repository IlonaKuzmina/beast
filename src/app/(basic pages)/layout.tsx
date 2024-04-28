
import { Footer } from '@/components/Footer/Footer'
import { MainHeader } from '@/components/Headers/MainHeader'

interface ILayout {
    children: React.ReactNode
}

export default function BasicLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <MainHeader />
            {children}
            <Footer />
        </>
    )
}