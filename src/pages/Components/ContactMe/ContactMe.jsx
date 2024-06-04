import React from 'react'

function ContactMe() {
  return (
    <div>
          <div className='bg-[#f7f7f7] w-[100%] p-[80px] '>
              <div className='bg-[#F4E774] w-[85%] m-auto flex justify-between p-[80px] rounded-[30px]'>
                  <div className='cMeLeft flex-[1.5]'>
                      <div>
                          <p className='w-[192.71px] h-[54.56px] bg-[white] flex justify-center items-center rounded-[80px] mb-[50px]'>The Reason</p>
                          <h2 className='font-bold text-[55px] max-w-[500px] leading-[58px] mb-[20px]'>UPHLODING
                              FISCAL STRENGTH</h2>
                          <p className='max-w-[500px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Lorem </p>
                      </div>
                  </div>
                  <div className='cmRight flex-[1]'>
                      <div className='bg-[white] p-[40px]'>
                          <form>
                          <div>
                              <label>Name</label>
                              <input type='text' placeholder='username'></input>
                          </div>
                           <div>
                              <label>Email</label>
                              <input type='Email' placeholder='email'></input>
                          </div>

                           <div>
                              <label>Phone</label>
                              <input type='tel' placeholder='+355 68 450 9364'></input>
                          </div>
                          <textarea placeholder='your message'></textarea>
                    </form>
                      </div>
                  </div>
               </div>
        </div>
    </div>
  )
}

export default ContactMe