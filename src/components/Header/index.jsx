"use client"
import React, { useState } from 'react'

function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='px-6 lg:px-20 lg1:px-15 py-[15px]  '>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between w-full items-center '>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img width={"36px"} height={"36px"} src="logo/logo.png" alt="Logo" />
                        </div>
                        <div className='font-["Red_Rose"] text-[26px] font-bold text-[#2c9bf4]'>
                            Yash Korat
                        </div>
                    </div>
                    <div className='hidden md:flex gap-8 items-center'>
                        <div className='active-section'>HOME</div>
                        <div className='section'>Portfolio</div>
                        <div className='section'>Testimonial</div>
                    </div>
                    <div className='hidden md:block w-[164px] border border-solid border-[#1d90ed] hover:border-none hover:bg-[#1d90ed] rounded h-[44px] content-center hover:text-white text-[#1d90ed] text-center'>
                        <button className='font-normal text-[16px] font-["Red_Rose"]'>Download CV</button>
                    </div>

                    {/* For smaller screens */}
                    <div className='block md:hidden'>
                        <button className='text-[#1d90ed]' onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Conditionally render sections for smaller screens based on state */}
                    {menuVisible && (
                        <div className='flex flex-col gap-6 pb-4 border-b right-1 border-solid absolute top-[69px] text-center w-full z-10 bg-white  items-center'>
                            <div className='active-section'>HOME</div>
                            <div className='section'>Portfolio</div>
                            <div className='section'>Testimonial</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
