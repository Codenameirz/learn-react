import React from 'react'
import featureImg from '../assets/features1.png'
import featureImg2 from '../assets/features2.png'
import featureImg3 from '../assets/features3.png'

const Features2 = () => {
  return (
    <div className='py-16'>
      <h1 className='text-3xl lg:text-4xl text-center font-bold pb-8 text__gradient mx-0 md:mx-36 mb-10'>Essential apps that protect your Email, Events, Files, Documents</h1>
      <div className='flex flex-col'>
        <div className='flex flex-col border border-2 border-gray-800 rounded-lg p-12 gap-6 card__background md:flex-row'>
          <div className='basis-1/2 my-auto'>
            <h1 className='text-white text-2xl lg:text-3xl font-bold mb-4'>End-to-end encrypted inbox and messages</h1>
            <p className='text-gray-400 mb-8'>Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.</p>
            <button 
              className='
                text-white font-medium rounded-full bg-transparent
                border border-2 border-gray-700 hover:border-white hover:bg-white hover:text-black
              '>Learn more</button>
          </div>
          <div className='basis-1/2 order-first md:order-last my-auto ml-0 md:ml-4'>
            <img src={featureImg} alt="feature image" />
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-4 md:flex-row'>
          <div className='basis-2/5 flex-col border border-2 border-gray-800 rounded-lg p-12 card__background'>
            <img className='order-last md:order-first px-8 mb-6' src={featureImg2} />
            <h1 className='text-white text-2xl font-semibold mb-3'>Mobile applications</h1>
            <p className='text-gray-400 text-sm'>Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue</p>
          </div>
          <div className='basis-3/5 flex flex-col gap-0 border border-2 border-gray-800 rounded-lg pt-12 px-12 card__background'>
            <h1 className='text-white text-2xl font-semibold mt-6 md:mt-0 mb-3'>Upload, share, and preview any file</h1>
            <p className='text-gray-400 text-sm mb-10'>Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.</p>
            <img className='order-first md:order-last mx-auto mt-auto' src={featureImg3} />
          </div>
        </div>
        <div className='flex gap-5 justify-center py-16'>
          <button 
            className='
              text-white font-medium rounded-full bg-violet-600
              hover:bg-violet-900 hover:text-gray-400
            '>Get started</button>
          <button 
            className='
              text-white font-medium rounded-full bg-transparent
              border border-gray-800 hover:border-white hover:bg-white hover:text-black
            '>Browse all features</button>
        </div>
      </div>
    </div>
  )
}

export default Features2