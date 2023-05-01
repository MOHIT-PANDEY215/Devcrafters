import React,{useState} from 'react'
import Image from 'next/image'
import style from './SignIn.module.css'
import Link from 'next/link'
import Router from 'next/router'

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 200) {
        Router.push("/");
      } else if (res.status === 401) {
        Router.push(`/register?email=${email}`);
      }
    };

  return (
    <div class="container w-full mx-auto mt-12 md:max-w-[574px] ">

        <header class="header py-0 px-3 mb-7 flex items-center justify-center">
            <h1 id="title" class="text-center bg-[#4e4e9bcc] text-white w-2/5 rounded-3xl font-normal text-xl">LOGIN</h1>
        </header>

        <form className="p-10 rounded-2xl bg-[#4e4e9bcc]" onSubmit={handleSubmit} >

            <div class="flex items-center justify-center">
            <Image
            className="self-center w-1/8 h-1/8 rounded-full"
            src={`/assets/logo.png`}
            alt="NIEPMD Logo"
            width={72}
            height={72}
            />
            </div>

            <div class="form-group mb-4">
                <label id="email-label" for="email" className="text-[#f0f8ff] text-xl ">User ID</label>

                <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class={`${style.formControl}`} placeholder="Enter your User ID" required
                />
            </div>

            <div class="form-group mb-4">
                <label className="text-[#f0f8ff] text-xl" for="password">Password</label>

                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class={`${style.formControl}`} placeholder="Enter the password" 
                />
            </div>

            <div class="form-group">
                <button type="submit"  class="submit-button w-full cursor-pointer p-3 bg-[#37af65] hover:bg-[#37af25] rounded-[25px] mt-6 text-white text-xl">Login</button>
            </div>
        <h1 className="text-[#bde0ff] text-lg mt-4 pl-4">Not Registered yet? <span className="text-[#fdd6a3] underline hover:text-[#bde0ff]"><Link href="/register">Register Now</Link></span></h1>
        </form>
        </div>
  )
}

export default SignIn
