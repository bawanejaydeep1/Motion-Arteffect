import React from 'react'
import BoxSection from './BoxSection'

const DesignSection = () => {
  return (
    <div className='flex flex-col mb-[4rem]   ' >

      <p className='text-twhite text-4xl max-lg:text-3xl max-md:text-2xl text-center font-sora font-medium self-center w-[50%] max-md:mb-[4rem]  '>Apply On Any Section Or Enable For Whole Page</p>

      <div className='flex justify-evenly  items-center space-y-[12rem] max-md:space-y-[4rem] max-md:flex-col ' >
        
        <BoxSection heading={"Apply On Section"} content={"Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."} imgUrl={"motionarteffect-img11"} />

        <BoxSection heading={"Apply On Page"} content={"Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."} imgUrl={"motionarteffect-img10"} />

      </div>

    </div>
  )
}

export default DesignSection