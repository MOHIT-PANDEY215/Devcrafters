import React from 'react'
import style from './Leave.module.css'

const Leave = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className='mt-[-50px]'>

        <div className={`flex flex-col justify-center w-[550px] h-[620px] rounded-[7px] py-0 px-[50px] m-2 ${style.container}`}>

          <h1 className="text-xl font-medium text-[#6b6a6c] mt-4">Leave Application</h1>

          <hr className="border-1 border-solid border-[#f1f1f1] mb-[25px]" />

          <div class={`${style.formItem}`}>
            <label for="email" id="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="text"
              id="name"
              required
            />
          </div>

          <div class={`${style.formItem}`}>
            <label for="identity" id="identity">Student Id</label>
            <input
              type="text"
              placeholder="xyz121"
              name="identity"
              id="identity"
              required
            />
          </div>
          <div class={`${style.formItem}`}>
            <label for="date" id="date">Start Date</label>
            <br/>
            <input
              type="date"
              placeholder="01/01/2000"
              name="date"
              id="date"
              required
            />
        </div>
            
            <div class={`${style.formItem}`}>
            <label for="date" id="date">End Date</label>
            <br/>
            <input
              type="date"
              placeholder="01/01/2000"
              name="date"
              id="date"
              required
              />
          </div>
          

            <div class={`${style.formItem}`}>
                <label for="reason" id="reason">Reason</label>
                <br/>
                <textarea
                
                placeholder="Reason for leave"
                name="reason"
                id="reason"
                required
                
                ></textarea>
                </div>

          <div class={`${style.formItem}`}>
            <label for="psw" id="pnumber">Parent's Phone Number</label>
            <input
              type="text"
              placeholder="+91- XXXXXXXXXX "
              name="studphone"
              id="studphone"
              required
            />
          </div>
          <br />
        
            <div class="button">
               
                <button class="registerbtn bg-[#5552ff] text-white py-4 px-5 my-3 mx-0 border-0 cursor-pointer w-full opacity-90">Submit</button>
            </div>
            
        </div>
    
      </form>
    </div>
  )
}

export default Leave
