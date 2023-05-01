import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import style from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className="flex pr-20 justify-between items-center w-full h-[75px] ml-8" id="navbar">
      
        <div className="text-[#76B8F5] text-2xl font-extrabold ml-10">Devcrafters</div>

      <ul className={`${style.list} flex justify-center items-center gap-4`}>
        <li>
            <Link  className={path === '/' ? `${style.activeLink}` : ''} href="/">Home</Link>
        </li>
        <li>
            <Link  className={path === '/about' ? `${style.activeLink}` : ''} href="/about">About</Link>
        </li>
        <li>
            <Link  className={path === '/contact' ? `${style.activeLink}` : ''} href="/contact">Contact Us</Link>
        </li>
        <li>
            <Link  className={path === '/leave' ? `${style.activeLink}` : ''} href="/leave">Leave Note</Link>
        </li>
        <li>
            <Link  className={path === '/parent' ? `${style.activeLink}` : ''} href="/parent">Parent Login</Link>
        </li>
        <li>
            <Link  className={path === '/signin' ? `${style.activeLink}` : ''} href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
