import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PropsWithChildren } from 'react'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}

export default Layout;