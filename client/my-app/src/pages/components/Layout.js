import Navbar from './navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`min-h-screen ${inter.className}`}>{children}</main>
    </>
  )
}