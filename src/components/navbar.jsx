import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Recipe_logo.jpeg'

const navbar = () => {
  return (
    <div className='flex align-center'>
      <img src={Logo} alt="" className=' w-12'/>
      <Link to='/' className='hover:text-pink-500'>
        <h1 className='ml-10 text-lg font-semibold '>Home</h1>
      </Link>
      <Link to='/recipe' className='hover:text-pink-500'>
       <h1 className='ml-10 text-lg font-semibold '>Recipe</h1>
      </Link>
    </div>
  )
}

export default navbar
