import React,{useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import style from './Navbar.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/pages/context/AuthContext';

const Navbar = () => {
  const router = useRouter();
  const { loggedIn, setLoggedIn, user } = useContext(AuthContext);
  {console.log(loggedIn)}
  const path = router.pathname;
  const handleLogOut = ()=>{
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
    }

    setLoggedIn(false);
    router.push('/');

    toast.success('Logged out');
  }
  return (
    <>
    <nav className={`flex pr-20 justify-between items-center h-[75px] ${style.navbar}`}>
      
        <div className="text-[#76B8F5] text-2xl font-extrabold ml-12">Devcrafters</div>

      <ul className={`${style.list} flex justify-center items-center gap-4`}>
        {
          (!loggedIn) &&
        <li>
            <Link  className={path === '/' ? `${style.activeLink}` : ''} href="/">Home</Link>
        </li>
        }
        {
          (loggedIn) &&
        <li>
            <Link  className={path === '/dashboard' ? `${style.activeLink}` : ''} href="/dashboard">Dashboard</Link>
        </li>
        }
        <li>
            <Link  className={path === '/about' ? `${style.activeLink}` : ''} href="/about">About</Link>
        </li>
        <li>
            <Link  className={path === '/contact' ? `${style.activeLink}` : ''} href="/contact">Contact Us</Link>
        </li>
        {
          loggedIn &&
        <li>
            <Link  className={path === '/leave' ? `${style.activeLink}` : ''} href="/leave">Leave Note</Link>
        </li>
        }
        
        {/* {!loggedIn && (
          <li>
          <Link  className={path === '/parent' ? `${style.activeLink}` : ''} href="/parent">Parent Login</Link>
      </li>
        )} */}
        {!loggedIn && (
          <li>
            <Link className={path === '/signin' ? `${style.activeLink}` : ''} href="/signin">Sign In</Link>
          </li>
        )}
        {
          loggedIn &&(
            <li className='cursor-pointer' onClick={handleLogOut}>
              Log Out
            </li>
          )
        }
      </ul>
    </nav>
      <ToastContainer position='bottom-right'/>
      </>
  )
}

export default Navbar
