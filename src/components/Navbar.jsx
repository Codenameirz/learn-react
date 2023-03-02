import React from 'react'
import logo from '../assets/logo.png'


const menus = [
  {
    title: 'Home'
  },
  {
    title: 'About'
  },
  {
    title: 'Features'
  },
  {
    title: 'Pricing'
  },
  {
    title: 'Blog'
  }
];
const Navbar = () => {
  return (
    <nav id='navbar' className="bg__primary w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto max-w-5xl p-6 md:py-0 xl:p-0">
      <a href="" className="flex items-center">
        <img src={logo} className="h-9 mr-3" alt="logo" />
      </a>
      <div className="flex md:order-2">
        <button
          type="button"
          className="
            text-white font-medium rounded-full bg-violet-600
            hover:bg-violet-900 hover:text-gray-400
          "
        >Get a demo</button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 lg:text-sm md:font-medium">
          {menus.map((item) => (
            <li>
              <a href="#" className="block py-2 px-1 text-gray-400 hover:text-white" aria-current="page">{ item.title }</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
