import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main>
      <section className="flex mt-8 justify-center items-center">
      <div className="flex flex-col justify-center items-start pl-[70px] w-1/2">
        <Image 
        src={`/assets/about.svg`}
        className="w-11/12 h-11/12"
        width={100}
        height={100}
        />
      </div>
      <div class="about-right w-1/2 pr-[55px] justify-center self-center">
           <h3 className='text-[#3a76b3] text-xl font-semibold uppercase'> About us:</h3>
            <p className='text-[#656769] text-lg'>Welcome to our virtual classroom, a dynamic online platform where students, teachers, and administrators come together to create an engaging and interactive learning environment. We believe in the power of technology to revolutionize education and provide equal opportunities for all.

At our virtual classroom, we strive to bridge the gap between traditional classroom settings and the digital world. We understand the importance of human connection in education and have designed our platform to foster meaningful interactions and collaboration.
            </p>
           <br />
            
           {/* <h3 className='text-[#3a76b3] text-xl font-semibold' id="po"> WHAT WE DO?</h3>
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
             </ul> */}
        </div>
    </section>

    <section className='flex flex-col gap-8 m-8 justify-center items-center'>
      <div className='w-1/2 pr-[55px] justify-center self-center'>
        <h1 className='text-[#3a76b3] text-xl font-semibold uppercase'>For Students</h1>
        <p className='text-[#656769] text-lg'>For students, our virtual classroom offers a unique and immersive learning experience. Through our user-friendly interface, you can access a wide range of courses and educational resources tailored to your needs. Engage in live interactive sessions with your teachers and peers, ask questions, participate in discussions, and collaborate on projects. Our platform provides a supportive environment where you can learn, grow, and excel academically.</p>
      </div>
      <div className='w-1/2 pr-[55px] justify-center self-center'>
        <h1 className='text-[#3a76b3] text-xl font-semibold uppercase'>For Teachers</h1>
        <p className='text-[#656769] text-lg'>Our virtual classroom empowers teachers to unleash their full potential as educators. With innovative teaching tools and features, our platform enables teachers to create engaging lesson plans, deliver interactive lectures, and provide personalized guidance to each student. Collaborate with fellow teachers, share best practices, and continuously enhance your teaching skills. We believe that by empowering teachers, we can inspire and empower students to reach their full potential.</p>
      </div>
      <div className='w-1/2 pr-[55px] justify-center self-center'>
        <h1 className='text-[#3a76b3] text-xl font-semibold uppercase'>For Administrators</h1>
        <p className='text-[#656769] text-lg'>Administrators play a vital role in shaping the virtual classroom experience. Our platform offers robust administrative features that simplify the management and organization of courses, student profiles, and educational resources. From tracking student progress to generating comprehensive reports, our tools provide valuable insights to make informed decisions and ensure the smooth operation of the virtual classroom.</p>
      </div>
    </section>
    </main>
  )
}

export default About
