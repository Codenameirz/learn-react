import React from 'react'
import images from '../images'

const blogContent = [
  {
    title: 'Product Mail is taking on Gmail by betting on privacy',
    desc: 'Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.',
    image: images.blog_image_1
  },
  {
    title: 'Wants You To Sign Out Of Google Workspace Forever',
    desc: 'Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.',
    image: images.blog_image_2
  },
  {
    title: 'The Best Email Encryption Services for 2023',
    desc: 'Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.',
    image: images.blog_image_3
  }
]

const Blog = () => {
  return (
    <div className='grid grid-cols-2 my-16'>
      <h1 className='col-span-2 md:col-span-1 text-4xl text-center lg:text-left font-bold pb-8 text__gradient'>Product in the news</h1>
      <div className="col-span-2 md:col-span-1 order-last md:order-none flex justify-center md:ml-auto">
        <div>
          <button 
            className='
              text-white font-medium rounded-full bg-violet-600
              hover:bg-violet-900 hover:text-gray-400 mt-6 md:mt-0
            '>Browse all news
          </button>
        </div>
      </div>
      <div className='col-span-2 flex flex-col md:flex-row gap-6'>
        {blogContent.map((item) => (
          <div 
            className='border border-2 border-gray-800 rounded rounded-md p-5'
            style={{ background: '#0E1330' }}
            >
            <img className='w-full rounded rounded-md mb-3' src={item.image} alt="" />
            <h1 className='text-white text-lg font-bold mb-3'>{item.title}</h1>
            <p className='text-gray-400 text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
