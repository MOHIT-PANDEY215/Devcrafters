import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section class="contact-section flex justify-center items-center w-screen h-screen">
        <div class="contact-left w-1/2 flex flex-col justify-center items-start pl-[175px]">
            <form>
                <div>
                    <input type="text" name="name" placeholder="Name" class="box w-[400px] h-[55px] p-[8px] bg-[#FFFFFF] border border-solid border-[#CCCCCC] rounded-[5px] outline-none mb-[25px]" />
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" class="box w-[400px] h-[55px] p-[8px] bg-[#FFFFFF] border border-solid border-[#CCCCCC] rounded-[5px] outline-none mb-[25px]"/>
                </div>
                <div>

                    <textarea name="message" placeholder="Message" class="box-msg w-full h-[160px] mb-[30px] p-[8px] border border-solid border-[#CCCCCC] rounded-[5px] outline-none bg-[#FFFFFF] text-[#000000] text-base font-normal resize-none"></textarea>
                </div>
                <button type="submit" class="btn-contact text-[#fff] uppercase text-base self-center w-[400px] h-[55px] bg-[#5676e2] rounded-[5px]">Submit</button>
            </form>
        </div>
        <div class="contact-right w-1/2 pr-[70px] self-center justify-center">
            <Image 
            src="/assets/back.svg"
            className='w-full h-full'
            width={100}
            height={100}
            />
            
        </div>

    </section>
  )
}

export default Contact
