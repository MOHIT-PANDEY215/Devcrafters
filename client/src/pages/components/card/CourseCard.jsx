import Image from 'next/image'
import React from 'react'

const CourseCard = ({imageSrc,title,lazyImageSrc,subject,teacher}) => {
  return (
    <div className='w-[400px] h-[400px] relative flex flex-col cursor-pointer'>
        <div className="absolute border-2 border-gray-600 z-50 bg-black text-white px-4">
            <button>Enroll Now</button>
        </div>
      <div className="z-10 w-full text-center h-2/3 mb-18 overflow-hidden relative border-2 border-blue-700 flex items-center justify-center">
        <Image
          className="z-10  object-cover object-top w-3/5 h-3/5"
          src={imageSrc}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL={lazyImageSrc?lazyImageSrc:imageSrc}
        />
      </div>
      <div className='flex flex-col bg-[#7694f5] text-center'>

      <h2 className='text-xl'>Topic: {title}</h2>
      <h3 className='text-lg'>Posted By:{teacher}</h3>
      <p className='text-lg'>{subject}</p>
      </div>
    </div>
  )
}

export default CourseCard
