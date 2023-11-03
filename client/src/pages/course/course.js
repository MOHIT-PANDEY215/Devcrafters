import React from 'react'
import CourseCard from '../components/card/CourseCard'
import { CourseData } from '@/lib/data/courseData'
import style from'@/pages/components/card/CourseCard.module.css'

const course = () => {
  return (
    <main>
      <section className='flex bg-[#7694f5] w-full mb-8 justify-center'>
        <h1 className='text-xl text-gray-900 py-4'>Course Page</h1>
      </section>
      <div className={`grid ${style.courseCard} gap-8`}>
        
      {
          CourseData.map((elem)=>{
              return(
                  
                  <CourseCard
                  imageSrc={elem.imageSrc}
                  lazyImageSrc={elem.lazyImageSrc}
                  title={elem.title}
                  subject={elem.subject}
                  teacher={elem.teacher}
                  />
                  )
                })
            }
    </div>
    </main>
  )
}

export default course
