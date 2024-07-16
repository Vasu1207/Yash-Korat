import React from 'react'
import { review } from './data'

export default function Work() {
    return (

        <div className="fadein sm1:px-[20px] lg:py-[60px] lg1:py-[30px] flex justify-center">
            <div className="box3 container sm:px-8 sm1:px-0 py-4 flex justify-around text-center w-full">
                {review?.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div className="flex">
                            <div className="child_box">
                                <p className="font-bold sm:text-[36px] sm1:text-[28px] ex-sm1:text-[22px] font-['Red_Rose']">{item.title1}</p>
                                <p className="font-normal text-[#6f6c90] sm:text-[20px] sm1:text-[16px] ex-sm1:text-[14px] font-['Inter']">{item.text}</p>
                            </div>
                        </div>
                        {index < review.length - 1 && <img src="img/line.png" alt="separator" />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}


