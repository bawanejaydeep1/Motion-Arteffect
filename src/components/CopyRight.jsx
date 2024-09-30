import React from 'react'

const CopyRight = () => {
  return (
    <div className='bg-copyright flex justify-between px-8 py-5'>
      <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      <div className="flex space-x-8">
        <a href='https://qodematrix.com/docs/motion-art-for-elementor/' target='_blank' >Documentation</a>
        <a href='https://support.qodematrix.com/' target='_blank' >Support</a>
      </div>
    </div>
  )
}

export default CopyRight