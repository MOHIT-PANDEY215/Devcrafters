import Navbar from './navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    <Navbar />
   <main className={`min-h-screen ${inter.className}`}>{children}</main>
  </motion.div>
);
export default Layout;