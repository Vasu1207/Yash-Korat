import React from 'react'
import patternImage from '/public/img/Pattern.png';

export default function HeroSection() {
    return (
        <div className="relative bg-center bg-cover h-auto" style={{ backgroundImage: `url(${patternImage.src})` }}>
            <div className='md:pt-[60px] md1:pt-[40px] sm1:pt-[30px] lg:px-[231px] lg1:px-[150px] md1:px-[110px] sm1:px-[30px] ' >
                <div className="flex justify-center" >
                    <div className='ex-sm:flex ex-sm:justify-between ex-sm:items-center ex-sm1:grid ex-sm1:justify-center ex-sm1:text-center ex-sm1:gap-3 font-["Red_Rose"] w-[404px]' >
                        <p className='text-[24px] sm1:text-[18px] ex-sm1:text-[16px]  font-normal text-[#898989]' >I’m Yash Korat</p>
                        <div className="flex justify-between text-center w-[214px] " >
                            <p className="text-[#15a800] px-[19px] py-[4px] bg-[#e0ffdc] rounded-[50px]" >Upwork</p>
                            <p className="text-[#2c9bf4] px-[19px] py-[4px] bg-[#ecf6ff] rounded-[50px]" >LinkedIn</p>
                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center" >
                    <p className=" font-normal text-5xl leading-[70px] lg1:text-4xl sm1:text-3xl ex-sm1:text-2xl sm1:leading-[40px] lg1:leading-[50px] font-['Red_Rose']" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            <div className="md:pt-12 md1:pt-10 sm1:pt-8 ex-sm1:pt-6 pb-[21px]" >
                <div className="flex justify-center ex-sm1:px-[20px]" >
                    <div className=" box sm:px-9 sm1:px-5 ex-sm:py-4 ex-sm1:py-2 lg1:py-2 bg-white ">
                        <p className=" text-center font-['Red_Rose'] font-normal sm:text-[20px] sm1:text-[18px] " >Available For Work </p>
                        <div className="flex justify-center" >
                            <div className="grid grid-cols-11 sm:pt-5 sm1:pt-3 items-center ex-sm:gap-[30px] ex-sm1:gap-[18px] lg1:gap-[20px] sm1:flex sm1:justify-center sm1:items-center sm1:flex-wrap " >
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/1.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/2.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/3.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/4.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/5.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/6.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/7.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/8.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/9.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/10.png" alt="" />
                                <img className=" sm:w-[32px] sm:h-[32px] sm1:w-[25px] sm1:h-[25px] " src="logo/11.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
