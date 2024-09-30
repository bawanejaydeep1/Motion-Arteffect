import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-6 items-center py-10' >
      <img src="logo.png" className='object-cover' alt="" />
      
      <a className='max-[1024px]:hidden bg-white text-black py-4 px-10 rounded-md text-xl hover:text-white hover:bg-transparent border-2 border-white   duration-300 ease-in-out' href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target='_blank' >
  Purchase Now
</a>

    </div>
  )
}

export default Header