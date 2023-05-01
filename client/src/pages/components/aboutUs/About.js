import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-start pl-[70px] w-1/2">
        <Image 
        src={`/assets/about.svg`}
        className="w-11/12 h-11/12"
        width={100}
        height={100}
        />
      </div>
      <div class="about-right w-1/2 pr-[55px] justify-center self-center">
           <h3 className='text-[#3a76b3] text-xl font-semibold'> ABOUT TEAM DEVCRAFTERS:</h3>
            <p className='text-[#656769] text-lg'> We are a team of six to-be software engineers who are passionate about creating   
                and implementing online systems that save time. We offer an optimized approach 
                to every real-life problem. Our motto is to strive for perfection and try being better 
                at everything we do. In the end, we offer software you can rely upon.
            </p>
           <br />
            
           <h3 className='text-[#3a76b3] text-xl font-semibold' id="po"> WHAT WE DO?</h3>
            <p className='text-[#656769] text-lg'>Our motto is "Code to resolve," by that we mean resolving all issues we can identify around 
                ourselves.As a team, we navigate through different areas of knowledge and apply and execute 
                them. Playing with  tech stacks is our passion. We always surf through on-learning agenda 
                projects to help improve ourselves.</p>
            <br/>
             
             <h3 className='text-[#3a76b3] text-xl font-semibold' id="ho">TEAM MEMBERS</h3>
             <ul className='text-lg'>
             <li>Soumik Kumar Ghosal</li>
             <li>Abhishek Mondal</li>
             <li>Kheya Rani Das</li>
             <li>Mohit Pandey</li>
             <li>Esha Kumari</li>
             <li>Ruma Karn</li>
             </ul>
        </div>
    </section>
  )
}

export default About
