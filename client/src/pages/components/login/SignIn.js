import React from 'react'
import Image from 'next/image'
import style from './SignIn.module.css'

const SignIn = () => {
  return (
    <div class="container w-full mx-auto mt-12 md:max-w-[574px] ">

        <header class="header py-0 px-3 mb-7 flex items-center justify-center">
            <h1 id="title" class="text-center bg-[#4e4e9bcc] text-white w-2/5 rounded-3xl font-normal text-md">LOGIN</h1>
        </header>

        <form className="p-10 rounded-2xl bg-[#4e4e9bcc]" id="login-form">
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
                <label id="email-label" for="email" className="text-[#100060]">User ID</label>
                <input id="email" type="text" name="email" class={`${style.formControl}`} placeholder="Enter your User ID" required></input>
            </div>
            <div class="form-group">
                <label className="text-[#100060]" for="password">Password</label>
                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                <input type="password" class={`${style.formControl}`} placeholder="Enter the password" id="password" name="password"/>
            </div>

            <div class="form-group">
                <button type="submit" id="submit" class="submit-button w-full cursor-pointer p-3 bg-[#37af65] rounded-[25px] mt-6 text-white">Login</button>
            </div>
        </form>
        </div>
  )
}

export default SignIn
