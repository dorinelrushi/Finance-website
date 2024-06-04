import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='w-[85%] m-auto '>
            <div className='flex items-center justify-between py-[15px] '>
                <div className='Logo'>
                    <h2 className='text-[35px] font-bold'>FinanceEx</h2>
                </div>
                <div className='Menu'>
                    <nav>
                        <ul className='flex gap-[50px] text-[16px]'>
                            <Link href='/'>
                                <li>
                                    Event
                                </li>
                            </Link>
                             <Link href='/'>
                                <li>
                                    Speakers
                                </li>
                            </Link>
                             <Link href='/'>
                                <li>
                                    Contact
                                </li>
                            </Link>
                            <Link href='/'>
                                <li>
                                    About Us
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className='Button text-[16px] flex gap-[10px]'>
                    <Link href='/'><button className='w-[139px] h-[54px]'>Sign up</button></Link>
                    <Link href='/'><button className='w-[139px] h-[54px] bg-[black] rounded-[100px] text-white'>Sign in</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header