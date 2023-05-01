import React,{useState} from 'react'
import Image from 'next/image'
import style from '../login/SignIn.module.css'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'

const Register = () => {

    const [email, setEmail] = useState(Router.query.email || "");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("")
    setPassword("")
    setName("")
    setConfirmPassword("")
    if(!email||!password||!confirmPassword||!name)
    return toast.error('Add complete data')
    toast.success('Registered successfully')


    // const res = await fetch("/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, name, password }),
    // });
    // if (res.status === 200) {
    //   Router.push("/signin");
    // }
  };

  return (
    <div class="container w-full mx-auto mt-12 md:max-w-[574px] ">

        <header class="header py-0 px-3 mb-7 flex items-center justify-center">
            <h1 id="title" class="text-center bg-[#4e4e9bcc] text-white w-2/5 rounded-3xl font-normal text-xl">Sign Up</h1>
        </header>

        <form className="p-10 rounded-2xl bg-[#4e4e9bcc]" onSubmit={handleSubmit}>
            <div class="flex items-center justify-center">
            <Image
            className="self-center w-1/8 h-1/8 rounded-full"
            src={`/assets/logo.png`}
            alt="NIEPMD Logo"
            width={72}
            height={72}
            />
            </div>
            <div class="form-group">
                <label id="name-label" for="name" className="text-[#100060] text-xl">Name</label>

                <input
                 type="text"
                 name='name'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 class={`${style.formControl}`} placeholder="Enter your Name" 
                 />

            </div>
            <div class="form-group">
                <label id="email-label" for="email" className="text-[#100060] text-xl">User ID</label>

                <input 
                type="email" 
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class={`${style.formControl}`} placeholder="Enter your User ID" 
                />

            </div>
            <div class="form-group">

                <label className="text-[#100060] text-xl" for="password">Password</label>

                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                <input type="password" 
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                class={`${style.formControl}`} placeholder="Enter a strong password" 
                />
            </div>
            <div class="form-group">
                <label className="text-[#100060] text-xl" for="password">Confirm Password</label>
                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                <input type="password"
                 value={confirmPassword}
                 name='confirmPassword'
                 onChange={(e)=>setConfirmPassword(e.target.value)}
                 class={`${style.formControl}`} placeholder="Enter password again" 
                />
            </div>

            <div class="form-group">
                <button type="submit" class="submit-button w-full cursor-pointer p-3 bg-[#37af65] hover:bg-[#37af25] rounded-[25px] mt-6 text-white text-xl">
                    Sign Up
                </button>
            </div>
            <h1 className="text-[#bde0ff] text-lg mt-4 pl-4">Already Registered? <span className="text-[#fdd6a3] underline hover:text-[#bde0ff]"><Link href="/signin">Login here</Link></span></h1>
        </form>
        <ToastContainer/>
        </div>
  )
}

export default Register
