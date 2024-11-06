import React from 'react'

const Section = () => {
  return (
    <div className='relative'>
        <div className='pt-[34%] px-52'>
              <h1 className='text-5xl max-w-[80%] font-bold text-white z-50 relative'>TOP REASONS WHY CUSTOMERS CHOOSE <span className='uppercase text-yellow-400'>DotDazzle</span></h1>
        </div>
        <img src="top-wave.svg" className='absolute -top-[32rem] w-screen bg-black' />

        <img src="top-reasons.svg" className='bg-black w-screen' alt="" />
    </div>
  )
}

export default Section