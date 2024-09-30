import React from 'react'

const FooterBlock = ({heading,content,imgUrl}) => {
  return (
    <div className={`bg-section  w-[30%] max-md:w-[90%] border-2 border-[#332c42] rounded-3xl p-8 space-y-8`}>
      <img src={`${imgUrl}.png`} className="object-cover  " alt="" />
      <p className="text-2xl   text-twhite font-sora font-semibold">
        {heading}
      </p>

      <p className="text-tgray text-lg">
       {content}
      </p>

    </div>
  )
}

export default FooterBlock