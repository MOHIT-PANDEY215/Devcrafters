import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex pr-20 justify-between items-center w-full" id="navbar">
      <div>
        <span className="text-[#76B8F5] text-xl font-extrabold ">Devcrafters</span>
      </div>
      <ul className='flex gap-4'>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/contact">Contact Us</Link>
        </li>
        <li>
            <Link href="/leave">Leave Note</Link>
        </li>
        <li>
            <Link href="/parent">Parent Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
