import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <main>
        <section className='flex justify-center mt-12'>
            <h1 className='text-[#3a76b3] text-xl font-semibold uppercase'>Contact Us</h1>
        </section>
        <section class=" mt-12 flex flex-col-reverse lg:flex-row justify-center items-center ">
        <div class="flex flex-col justify-center items-start ">
            <form>
                <div>
                    <input type="text" name="name" placeholder="Name" class=" w-[400px] h-[55px] p-[8px] bg-[#FFFFFF] border border-solid border-[#CCCCCC] rounded-[5px] outline-none mb-[25px]" />
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" class=" w-[400px] h-[55px] p-[8px] bg-[#FFFFFF] border border-solid border-[#CCCCCC] rounded-[5px] outline-none mb-[25px]"/>
                </div>
                <div>

                    <textarea name="message" placeholder="Message" class=" w-full h-[160px] mb-[30px] p-[8px] border border-solid border-[#CCCCCC] rounded-[5px] outline-none bg-[#FFFFFF] text-[#000000] text-base font-normal resize-none"></textarea>
                </div>
                <button type="submit" class="btn-contact text-[#fff] uppercase text-base self-center w-[400px] h-[55px] bg-[#5676e2] rounded-[5px]">Submit</button>
            </form>
        </div>
        <div class="pr-[70px] self-center justify-center">
            <Image 
            src="/assets/back.svg"
            className='w-full h-full'
            width={100}
            height={100}
            />
            
        </div>

    </section>
    </main>
  )
}

export default Contact
