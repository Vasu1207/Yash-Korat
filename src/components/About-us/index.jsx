import React from 'react'
import { info2 } from './data'

export default function AboutUs() {
    return (
        <div className="fadein flex justify-center bg-[#fafafa] " >
            <div className="container rounded  " >
                <div className="lg:px-[30px] lg:py-[60px] sm1:py-[20px] lg1:py-[30px] lg1:px-[50px] sm1:px-[20px] " >
                    {info2?.map((item) => {
                        return (
                            <div className="xl:flex xl1:grid xl1:grid-cols-[40%_60%] lg1:grid-cols-none xl:gap-[60px] xl1:gap-[30px] items-center justify-center " key={item.id} >
                                <div className=" lg1:flex lg1:justify-center" >
                                    <img className="md:w-[396px] md:h-[382px] md1:w-[296px] md1:h-[282px]" src={item.icon} alt="" />
                                </div>
                                <div className="xl:w-[724px] font-['Red_Rose'] " >
                                    <div>
                                        <p className="font-normal sm:text-[24px] sm1:text-[20px] text-[#1d90ed]" >{item.title1}</p>
                                        <p className="font-normal sm:text-[36px] sm1:text-[26px] text-[#121212] " >{item.title2}</p>
                                        <p className="pt-3 font-normal sm:text-[20px] sm1:text-[16px] text-[#121212] " >{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


