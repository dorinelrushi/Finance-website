import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import Yll from '../../../../public/photo/yll.png'
import Gl from '../../../../public/photo/gl.png'
import {BsArrowUpRight  } from "react-icons/bs";

function RowColumn() {
  return (
    <div className='mt-[180px] mb-[50px]'>
        <div className='flex w-[85%] m-auto  gap-[40px]'>
             <div className='b1 flex-[1] relative top-[90px] '>
                <div className='p-[30px]'>
                  <div>
                    <p className='flex text-[30px] gap-[2]'>
                    <MdOutlineKeyboardArrowRight /><MdOutlineKeyboardArrowRight />
                  <MdOutlineKeyboardArrowRight /><MdOutlineKeyboardArrowRight />
                  <MdOutlineKeyboardArrowRight />
                  </p>
                  <h2 className='font-bold text-[50px] mb-[18px]'>10X FASTER</h2>
                  <p className='text-[#595959] mb-[60px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                      <div className='text-[#F8A72F] flex gap-[25px] text-[20px] mb-[30px]'>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                      </div>
                      <div className='flex gap-[20px] items-center'>
                        <div className='flex relative'>
                          <div className='c1 w-[65px] h-[65px] bg-blue-100 rounded-[60px]'></div>
                            <div className='c1 w-[65px] h-[65px] bg-[#F4E774] rounded-[60px] flex justify-center  items-center ml-[-20px]'>+4k</div>
                        </div>
                        <div>
                          <h2 className='font-bold text-[18px]'>Happy Clients</h2>
                          <p>Review</p>
                        </div>
                      </div>
                  </div>
                </div>
             </div>
              <div className='b12 flex-[1] bg-[#d79999] rounded-[30px] relative'>
                <div className='border-[1px] w-[132px] h-[39px] flex justify-center items-center text-[white] absolute top-[20px] right-[20px] border-[white] rounded-[60px] bg-[transparent] '>Limitles</div>
                <div className='bg-[white] w-[55px] h-[55px] rounded-[60px] flex justify-center items-center absolute bottom-[20px] left-[20px]'>
                 <Image src={Yll} />
                </div>
              </div>
             <div className='b1 flex-[1] bg-[#ffffff] relative top-[-90px]  rounded-[30px] shadow-black'>
              <div className='w-[57px] h-[57px] bg-[black] absolute top-[35px] right-[20px] rounded-[90px] text-[white] flex justify-center items-center text-[25px]'>
                <BsArrowUpRight/>
              </div>
              <div className='p-[30px]'>
                <h2 className='text-[58px] font-bold mb-[10px]'>24/7</h2>
                <p className='mb-[50px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                <div className='rounded-[20px] '>
                  <div className='bg w-[90%] absolute bottom-[20px] h-[130px] bg-[#FDFBEA] rounded-[20px] '>
                    <Image src={Gl} className='absolute top-[-95px] right-[10px]' />
                </div>
                </div>
              </div>
             </div>
        </div>
    </div>
  )
}

export default RowColumn