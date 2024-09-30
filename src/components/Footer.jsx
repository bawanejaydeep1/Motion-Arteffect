import React from 'react'
import FooterBlock from './FooterBlock'

const Footer = () => {

  return (
    <div className='flex flex-col space-y-12 mb-[4rem] ' >

      <div className='self-center space-y-8 w-[50%] '>
        <p className='text-twhite text-4xl max-lg:text-3xl max-md:text-2xl text-center font-sora font-medium self-center    '>An All-Round Plugin With Powerful Features</p>
        <p className="text-tgray text-lg text-center">
        Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
        </p>
      </div>

      <div className="flex max-md:items-center max-md:flex-col max-md:space-y-6 justify-evenly px-[2%] ">
        <FooterBlock imgUrl={"motionarteffect-img9"} heading={"Light Weight"} content={"Motion Art for Elementor is designed to be lightweight."} />
        <FooterBlock imgUrl={"motionarteffect-img6"} heading={"100% Responsive"} content={"Create a consistent visual experience across all devices."} />
        <FooterBlock imgUrl={"motionarteffect-img7"} heading={"User Friendly Interface"} content={"Ensure a smooth experience for both applicants and administrators."} />
      </div>

    </div>
  )
}

export default Footer