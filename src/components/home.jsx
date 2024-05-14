import React from 'react'
import BgImage from '../assets/360_F_672452471_4kHMWT93ipMIvpg862kRS3FlwvMKg8nS.jpg'
import {Link} from 'react-router-dom'


const home = () => {
  return (
    <div className=' h-full flex justify-center items-center' >
      <Link to='/recipe'>  
          <button className=' rounded-xl w-44 h-10 text-white text-lg bg-pink-500'>Search Recipes</button>
      </Link>
    </div>
  )
}

export default home
