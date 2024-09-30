import React from 'react'

const SupportSection = () => {
  return (
    <div className='flex justify-center mb-[4rem] ' >
      <div className="bg-support-section  w-[92%] border-2 border-[#332c42] rounded-3xl  flex justify-center">
  
            <div className='w-[43%] max-[900px]:w-[55%] max-[770px]:w-[65%] max-[600px]:w-full p-8 space-y-8  '>
              <p className='text-2xl text-twhite font-sora font-semibold text-center' >Supported by All Popular Browsers</p>
    
              <p className='text-tgray text-xl text-center' >Rest assured, Motion Art is designed to be compatible with all major web browsers. </p>
    
              <img src="motionarteffect-img8.png" className='object-cover  ' alt="" />
            </div>
  
          </div>
    </div>
  )
}

export default SupportSection