import React, { useState } from "react";
import Image from "next/image";
import style from "../login/SignIn.module.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [role,setRole] =useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      confirmPassword,
      role,
    };

    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setRole("")
    if (!email || !password || !confirmPassword || !name || !role)
      return toast.error("Add complete data");

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 201) {
      toast.success("Registered successfully");
      router.push("/signin");
    }
    if (res.status === 400) {
      return toast.error("res.message");
    }
  };

  return (
    <div className="w-full mx-auto mt-12 md:max-w-[574px] ">
      <header className="py-0 px-3 mb-7 flex items-center justify-center">
        <h1
          id="title"
          className="text-center bg-[#4e4e9bcc] text-white w-2/5 rounded-3xl font-normal text-xl"
        >
          Sign Up
        </h1>
      </header>

      <form className="p-10 rounded-2xl bg-[#4e4e9bcc]" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <Image
            className="self-center w-1/8 h-1/8 rounded-full"
            src={`/assets/logo.png`}
            alt="NIEPMD Logo"
            width={72}
            height={72}
          />
        </div>
        <div className="form-group">
          <label id="name-label" htmlFor="name" className="text-[#100060] text-xl">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${style.formControl}`}
            placeholder="Enter your Name"
          />
        </div>
        <div className="form-group">
          {/* <label id="role-label" htmlFor="role" className="text-[#100060] text-xl mt-2">
            Role
          </label> */}
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value.toLowerCase())} name="role" 
            required 
            className="my-4 mx-2 text-[#100060] text-lg"
          >
            <option value="">Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="form-group">
          <label
            id="email-label"
            htmlFor="email"
            className="text-[#100060] text-xl"
          >
            Email ID
          </label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${style.formControl}`}
            placeholder="Enter your Email ID"
          />
        </div>
        <div className="form-group">
          <label className="text-[#100060] text-xl" htmlFor="password">
            Password
          </label>

          {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className={`${style.formControl}`}
            placeholder="Enter a strong password"
          />
        </div>
        <div className="form-group">
          <label className="text-[#100060] text-xl" htmlFor="password">
            Confirm Password
          </label>
          {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
          <input
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`${style.formControl}`}
            placeholder="Enter password again"
          />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="submit-button w-full cursor-pointer p-3 bg-[#37af65] hover:bg-[#37af25] rounded-[25px] mt-6 text-white text-xl"
          >
            Sign Up
          </button>
        </div>
        <h1 className="text-[#bde0ff] text-lg mt-4 pl-4">
          Already Registered?{" "}
          <span className="text-[#fdd6a3] underline hover:text-[#bde0ff]">
            <Link href="/signin">Login here</Link>
          </span>
        </h1>
      </form>
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default Register;
