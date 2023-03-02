import React from 'react'
import images from '../images'

const Header = () => {
  return (
    <div className='py-16 hero__background'>
      <div className='container mx-auto flex flex-wrap flex-row max-w-5xl px-6 md:px-0 items-center'>
        <div className='flex flex-col text-center'>
          <h1 className='text-3xl lg:text-5xl font-bold m-auto pb-8 text__gradient'>A CRM dashboard for engineering teams</h1>
          <p className='text-gray-400 px-0 md:px-36'>Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.</p>
          <div className='flex gap-5 justify-center pt-10 py-16'>
            <button 
              className='
                text-white font-medium rounded-full bg-violet-600
                hover:bg-violet-900 hover:text-gray-400
              '>Get a demo</button>
            <button 
              className='
                text-white font-medium rounded-full bg-transparent
                border border-gray-800 hover:border-white hover:bg-white hover:text-black
              '>View pricing</button>
          </div>
          <img src={images.hero_image} className='mx-auto order-first md:order-last mx-6 lg:mx-0 mb-8 md:mb-8' alt='Hero image' />
        </div>
      </div>
    </div>
  )
}

export default Header
