import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const Main = () => {
  return (
    <section className="hero-section flex  h-[85vh] justify-center items-center p-8 pl-20">
        <div className="left flex flex-col justify-center items-start w-1/2">
            <h1 className="text-5xl font-semibold text-[#0864b9]">Access your <br /><span>Classroom</span></h1>
            <p className="w-3/4 text-xl font-normal text-[#595959] mb-8 mt-5">
                {/* This web application is a smart automation-based portal to track
                students' mobility and to help in remote monitoring via the camera
                feed transmit method, crafted under the laws and guidelines,of the
                school security system. */}

                This web application is a portal for all the students, teachers and administration to have a seamless interaction with each other.
            </p>
            {/* <!-- <image src="{{url_for('static',filename='img/shape3.svg')}}" alt="img" className="vector3" /> --> */}
            <div className="flex gap-1">
                <Link href='/signin'>
            <button className="border-0 bg-[#5676e2] hover:bg-[#76B8F5] text-[#fff] hover:text-[#1a1f20] flex items-center gap-3 rounded-[5px] transition-all ease-in-out   duration-300 pt-3 pb-3 pr-10 pl-10">
            Let's Go <FaArrowRight/>
            </button>
                </Link>
            </div>
            
            {/* <!-- <submit type="button" className="btn" a href="{{url_for('register')}}">
                Let's Go <i className="fa-solid fa-arrow-right-long"></i>
            </button> --> */}
            {/* <a class ="btn" href="{{url_for('option')}}" >Register Here <i className="fa-solid fa-arrow-right-long"></i></a> */}
        </div>
        <div className="right w-1/2 flex justify-center items-center">
            <Image
            alt='main'
            className="w-11/12 h-11/12"
            src={`/assets/main.svg`}
            width={100}
            height={100}
            />
            {/* <img src="{{url_for('static',filename='img/20945183-removebg-preview.png')}}"   alt="img" /> */}
        </div>
        {/* <!-- <image src="{{url_for('static',filename='img/shape4.svg')}}" alt="img" className="vector4" /> --> */}
    </section>
  )
}

export default Main
