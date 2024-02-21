import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PropsWithChildren } from 'react'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}