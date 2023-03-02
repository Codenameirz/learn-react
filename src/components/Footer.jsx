import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const footerLinks = [
  {
    title: 'Home'
  },
  {
    title: 'About'
  },
  {
    title: 'Contact'
  },
  {
    title: 'Blog'
  },
  {
    title: 'Blog post'
  },
  {
    title: 'Pricing'
  },
  {
    title: 'Pricing single'
  }
]
const footerLinks2 = [
  {
    title: 'Features'
  },
  {
    title: 'Careers'
  },
  {
    title: 'Careers single'
  },
  {
    title: 'Request a demo'
  },
  {
    title: 'Login'
  },
  {
    title: 'Sign Up'
  }
]

const socialLinks = [
  {
    icon: <FaFacebookF />
  },
  {
    icon: <FaTwitter />
  },
  {
    icon: <FaLinkedinIn />
  },
  {
    icon: <FaInstagram />
  }
]

const Footer = () => {
  return (
    <footer
      className='py-8 m-auto max-w-5xl'
      style={{ background: 'radial-gradient(circle at 50% 50%, var(--bg-secondary) -200%, var(--bg-primary) 50%' }}
      >
      <div className='flex flex-row gap-16 mb-6'>
        <div className='basis-2/5'>
          <img className='w-32 mb-6' src={Logo} alt="" />
          <div 
            className='border border border-gray-700 rounded-xl px-8 py-10'
            style={{ background: '#0E1330' }}
            >
            <h1 className='text-white text-xl font-extrabold mb-4'>Subscribe to our newsletter</h1>
            <form action="">
              <input 
                className='w-full text-sm text-white border border-gray-700 bg-transparent px-6 py-3 rounded-full mb-4'
                type="email" placeholder='Enter your email' />
              <button 
                className='text-white text-center bg-violet-600 w-full rounded-full py-3
                hover:bg-violet-900 hover:text-gray-400
                '>Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='basis-2/5 text-gray-400'>
          <h1 className='mb-8'>Pages</h1>
          <div className='flex flex-row'>
            <div className='flex flex-1 flex-col gap-6'>
              {footerLinks.map((item) => (
                <a className='text-sm hover:text-white' href='#'>{item.title}</a>
              ))}
            </div>
            <div className='flex flex-1 flex-col gap-6'>
              {footerLinks2.map((item) => (
                <a className='text-sm hover:text-white' href='#'>{item.title}</a>
              ))}
            </div>
          </div>
        </div>
        <div className='basis-1/5'>
          <div className='flex flex-col'>
          {footerLinks2.map((item) => (
            <a className='text-sm text-gray-400 hover:text-white' href='#'>{item.title}</a>
          ))}
          </div>
        </div>
      </div>
      <div className='border border-gray-700'></div>
        <div className='flex flex-col lg:flex-row mt-6'>
          <p className='text-sm text-center lg:text-left text-gray-400 my-auto'>Copyright © Product | Designed by <a className='text-white cursor-pointer hover:underline hover:text-gray-400'>Webocean LTD</a> - Powered by <a className='text-white cursor-pointer hover:underline hover:text-gray-400'>Webflow</a></p>
          <div className='flex flex-row gap-3 m-auto lg:m-0 lg:ml-auto mt-4 lg:mt-0'>
            {socialLinks.map((item) => (
              <a className='border border-gray-700 rounded-lg p-2' href="">
                <i className='text-gray-400 text-sm'>{item.icon}</i>
              </a>
            ))}
          </div>
        </div>
    </footer>
  )
}

export default Footer