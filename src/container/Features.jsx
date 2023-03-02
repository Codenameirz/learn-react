import React from 'react'
import images from '../images'

const allFeatures = [
  {
    title: 'User information',
    desc: 'Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
    icon: images.icon1
  },
  {
    title: 'Deal tracking',
    desc: 'Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
    icon: images.icon2
  },
  {
    title: 'Pipeline management',
    desc: 'Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
    icon: images.icon3
  },
  {
    title: 'Reporting dashboard',
    desc: 'Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
    icon: images.icon4
  },
  {
    title: 'Meeting scheduling',
    desc: 'Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
    icon: images.icon5
  },
  {
    title: 'Email tracking',
    desc: 'Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
    icon: images.icon6
  }
]

const Features = () => {
  return (
    <div className='py-16'>
      <div className='flex flex-col lg:flex-row pb-12 lg:pb-24'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center lg:text-left text__gradient md:mx-16 lg:mx-0 mb-4 md:mb-2 lg:mb-0'>Powerful features to help you manage all your leads</h1>
        <p className='text-sm text-center lg:text-left text-gray-400 my-auto pl-0 lg:pl-36 md:mx-24 lg:mx-0'>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {allFeatures.map((item) => (
          <div className='border border-2 rounded border-gray-800 w-full p-6'>
            <img className='mb-3' src={item.icon} alt="" />
            <h1 className='text-white text-xl font-bold mb-2'>{item.title}</h1>
            <p className='text-gray-400 text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
