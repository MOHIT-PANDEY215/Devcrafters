import Navbar from './navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <>
    <Navbar />
   <main className={`min-h-screen ${inter.className}`}>{children}</main>
  </>
);
export default Layout;