import React from 'react'
import TestDesign from '../TestDesign/TestDesign'

function Testimonials() {
  return (
      <div className='w-[85%] m-auto mt-[90px] mb-[90px]'>
          <div className='flex gap-[60px]'>
              <div className='flex-1'>
                  <h2 className='text-[75px] font-bold max-w-[200px] leading-[69px] mb-[20px] '>Banking Bash</h2>
                  <p className='text-[#595959] text-[18px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Lorem Ipsum sit dolor</p>
              </div>
               <div className='flex-1'>
                  <div className='bg-[#F4E774] w-[100%] h-[590px] rounded-[30px]'></div>
              </div>
               <div className='flex-1'>
                <TestDesign />
               </div>
          </div>
    </div>
  )
}

export default Testimonials