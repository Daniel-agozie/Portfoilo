import React from 'react'
import amazon from "../assets/images/amazon.png"
import Note from "../assets/images/Note.png"
import Token from "../assets/images/token.png"

const Projects = () => {
  return (
    <div className='mt-28'>
      <div className='font-Tangerine ml-10 text-3xl font-bold'>My <span className='text-green-600'>Projects</span></div>

      <div className='mt-28 opacity-80 flex flex-col gap-20 mx-10'>
          <div className='relative'>
          <img src={Token} />
          <div className='absolute inset-0 flex gap-5 items-end left-6 bottom-3'>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>React</div>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Motoko</div>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Tailwind CSS</div>
          </div>
        </div>

        <div  className='relative'>
          <img src={amazon} />
          <div className='absolute inset-0 flex gap-5 items-end left-6 bottom-3'>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>React</div>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Tailwind CSS</div>
          </div>
        </div>

        <div  className='relative'>
          <img src={Note} />
          <div className='absolute inset-0 flex gap-5 items-end left-6 bottom-3'>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>React</div>
            <div className='bg-light px-4 py-1 rounded-full text-purple-700 font-Tangerine'>Tailwind CSS</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects