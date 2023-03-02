import React from 'react'
import { FaDiscord } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='max-w-none md:max-w-3xl mx-auto py-16'>
      <div 
        className='border border-2 border-gray-800 rounded-lg text-center px-8 md:px-36 py-20 card-2__background'>
        <i className='flex justify-center text-7xl text-violet-600 mb-4'><FaDiscord /></i>
        <h1 className='text-white text-3xl font-bold mb-4'>Join the community</h1>
        <p className='text-gray-400 mb-10'>Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.</p>
        <button 
            className='
              text-white font-medium rounded-full bg-violet-600
              hover:bg-violet-900 hover:text-gray-400
            '>Join Discord</button>
      </div>
    </div>
  )
}

export default CTA