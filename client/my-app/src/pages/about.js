import Image from 'next/image'

export default function About() {
  return (
    <section>
      <div>
        <Image 
        src={`/assets/2649645-removebg-preview.png`}
        width={100}
        height={100}
        />
      </div>
      <div class="about-right">
           <h3> ABOUT TEAM DEVCRAFTERS:</h3>
            <p> We are a team of six to-be software engineers who are passionate about creating   
                and implementing online systems that save time. We offer an optimized approach 
                to every real-life problem. Our motto is to strive for perfection and try being better 
                at everything we do. In the end, we offer software you can rely upon.
            </p>
           <br />
            
           <h3 id="po"> WHAT WE DO?</h3>
            <p>Our motto is "Code to resolve," by that we mean resolving all issues we can identify around 
                ourselves.As a team, we navigate through different areas of knowledge and apply and execute 
                them. Playing with  tech stacks is our passion. We always surf through on-learning agenda 
                projects to help improve ourselves.</p>
            <br/>
             
             <h3 id="ho">TEAM MEMBERS</h3>
             <ul>
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