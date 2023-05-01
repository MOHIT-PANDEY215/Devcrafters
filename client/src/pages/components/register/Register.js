import React,{useState} from 'react'
import Image from 'next/image'
import style from '../login/SignIn.module.css'
import Router from 'next/router'

const Register = () => {

    const [email, setEmail] = useState(Router.query.email || "");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });
    if (res.status === 200) {
      Router.push("/signin");
    }
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
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 class={`${style.formControl}`} placeholder="Enter your Name" required
                 />

            </div>
            <div class="form-group">
                <label id="email-label" for="email" className="text-[#100060] text-xl">User ID</label>

                <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class={`${style.formControl}`} placeholder="Enter your User ID" required
                />

            </div>
            <div class="form-group">

                <label className="text-[#100060] text-xl" for="password">Password</label>

                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                <input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class={`${style.formControl}`} placeholder="Enter a strong password" 
                />
            </div>
            {/* <div class="form-group">
                <label className="text-[#100060] text-xl" for="password">Confirm Password</label> */}
                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                {/* <input type="password" class={`${style.formControl}`} placeholder="Enter password again" id="password" name="password"/>
            </div> */}

            <div class="form-group">
                <button type="submit" class="submit-button w-full cursor-pointer p-3 bg-[#37af65] hover:bg-[#37af25] rounded-[25px] mt-6 text-white text-xl">
                    Sign Up
                </button>
            </div>
        </form>
        </div>
  )
}

export default Register
