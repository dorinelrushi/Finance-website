import Image from 'next/image'
import React from 'react'
import Fancy from '../../../../public/photo/fancy.png'
import Star from '../../../../public/photo/star.png'
function HeroSection() {
  return (
    <div>
      <div className='w-[85%] m-auto'>
           <div className='mt-[50px]'>
            <h2 className='text-[150px] font-bold text-center'>Expert Financial</h2>
           </div>
            <div className='flex m-auto items-center mt-[-40px] justify-center gap-[50px] '>
              <div className='fancy mt-[50px]'>
                <Image src={Fancy}/>
              </div>
               <div><h2 className='text-[150px] font-bold'>Guidance</h2></div>
              <div className='circles flex items-center mt-[45px]  '>
                   <div className='flex items-center'>
                <div className='circle1 flex justify-center items-center w-[70px] h-[70px] border-[1.5px] border-[black] border-solid rounded-[60px] bg-[#F4E774]  z-[6]'>
                  <Image src={Star} />
                </div>
                   <div className='circle1 circle1 w-[70px] ml-[-30px]  h-[70px] border-[1.5px] border-[black] bg-[white] z-[5] border-solid rounded-[60px]'></div>
                    <div className='circle1 circle1 w-[70px] ml-[-30px]   h-[70px] border-[1.5px] border-[black] bg-[white] z-[4] border-solid rounded-[60px]'></div>
                     <div className='circle1 circle1 w-[70px] ml-[-30px]  h-[70px] border-[1.5px] border-[black] bg-[white] z-[3] border-solid rounded-[60px]'></div>
                      <div className='circle1 circle1 w-[70px] ml-[-30px]  h-[70px] border-[1.5px] border-[black] bg-[white] z-[2] border-solid rounded-[60px]'></div>
                   </div>
                </div>
            </div>
            <div>
              <div className='relative mt-[90px]'>
                <div className='m-auto text-center  w-[343px] rounded-[20px] relative   bg-[black]'>
                <button className='bg-[#F4E774] relative left-[-6px] top-[-12px] w-[350px] h-[93px] rounded-[20px] rotate-[-4.5deg] text-[31px] font-bold'>Get Started</button>
              </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default HeroSection