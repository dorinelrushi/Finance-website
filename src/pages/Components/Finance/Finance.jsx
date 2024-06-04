import React from 'react'

function Finance() {
  return (
      <div className='mt-[50px]'>
          <div className='w-[85%] m-auto'>
              <div className='flex gap-[48px]'>
                  <div className='financeLeft bg-[white] rounded-[30px] flex-[1] p-[55px]'>
                      <div className='flex justify-between items-center '>
                          <h2 className='text-[60px] max-w-[200px] leading-[65px] font-bold'>Ensuring Finance</h2>
                          <div>
                              <div className='flex'>
                               <div className='c1 w-[70px] h-[70px] bg-blue-100 rounded-[60px]'></div>
                               <div className='c1 w-[70px] h-[70px] bg-[#F4E774] rounded-[60px] flex justify-center  items-center ml-[-20px]'>+4k</div>
                              </div>
                              <h2 className='text-center mt-[20px]'>Happy Clients</h2>
                              <p  className='text-center '>Review</p>
                           </div>
                      </div>
                       <div className=' mt-[50px] rounded-[30px] w-[100%] h-[36vh] bg-[#F4E774]'></div>
                  </div>
                  <div className='financeRight bg-[white] rounded-[30px] flex-[1] p-[55px]'>
                                <div className='flex justify-between items-center '>
                          <h2 className='text-[60px] max-w-[200px] leading-[65px] font-bold'>Financial
                        Assura</h2>
                          <div>
                              <div className='flex'>
                               <div className='c1 w-[70px] h-[70px] bg-blue-100 rounded-[60px]'></div>
                            <div className='c1 w-[70px] h-[70px] bg-[#F4E774] rounded-[60px] flex justify-center  items-center ml-[-20px]'>+4k</div>
                              </div>
                              <h2 className='text-center mt-[20px]'>Happy Clients</h2>
                              <p  className='text-center '>Review</p>
                           </div>
                      </div>
                       <div className=' mt-[50px] rounded-[30px] w-[100%] h-[36vh] bg-[#F4E774]'></div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Finance