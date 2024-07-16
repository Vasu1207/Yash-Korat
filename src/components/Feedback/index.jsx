import React from 'react'
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { card } from './data';

export default function Feedback() {
    return (
        <div className="fadein" >
            <div className="flex justify-center " >
                <div className="  md:py-[60px] bg-[#fafafa] rounded sm1:py-[40px] ex-sm1:py-[20px] container lg:pl-5 text-center " >
                    <p className="font-['Red_Rose'] font-bold md:text-[32px] md1:text-[26px] sm1:text-[20px] " >Positive Feedback from Past Clients</p>
                    <div className=" flex pt-8 sm1:px-4" >

                        <Swiper
                            slidesPerView={2.16}
                            initialSlide={2}
                            // centeredSlides={true}
                            centeredSlidesBounds={1}
                            // pagination={{
                            //   clickable: true,
                            // }}
                            loop={true}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                375: { slidesPerView: 1 },
                                425: { slidesPerView: 1 },
                                640: { slidesPerView: 1.13 },
                                768: { slidesPerView: 1.35 },
                                1024: { slidesPerView: 1.77 },
                                1440: { slidesPerView: 2.16 },
                            }}

                            modules={[Pagination, Autoplay]}
                        >
                            {card?.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} >
                                        <div className=" feedback-card bg-white " >
                                            <div className="ex-sm:p-9 ex-sm1:p-2 sm:w-[594px] " >
                                                <div className=" ex-sm:gap-4 ex-sm1:gap-1 " >
                                                    <div className="flex gap-4 " >
                                                        <img className="ex-sm:w-[62px] ex-sm:h-[62px] ex-sm1:w-[42px] ex-sm1:h-[42px] " width={"62px"} height={"62px"} src={item.icon} alt="" />
                                                        <div>
                                                            <p className="font-['Red_Rose'] font-bold md:text-[24px] sm1:text-[18px] ex-sm1:text-[15px] text-[#170f49] text-left " >{item.profileTitle}</p>
                                                            <p className="font-['Inter'] font-normal md:text-[18px] sm1:text-[14px] ex-sm1:text-[12px] text-[#6f6c90] text-left ">{item.profileText}</p>
                                                        </div>
                                                    </div>
                                                    <p className="font-['Inter'] font-normal ex-sm:text-[18px] ex-sm1:text-[12px] text-[#6f6c90] pt-4 text-left " >
                                                        {item.reviewText}
                                                    </p>
                                                </div>
                                                <div className="ex-sm:pt-8 ex-sm1:pt-4" >
                                                    <div className="flex justify-center" >
                                                        <div className="flex gap-2 text-center" >
                                                            <div className="flex gap-[4px] ex-sm1:items-center " >
                                                                <img className="ex-sm:w-6 ex-sm:h-6 ex1-sm:w-4 ex-sm1:h-4" src="img/star.png" alt="" />
                                                                <img className="ex-sm:w-6 ex-sm:h-6 ex1-sm:w-4 ex-sm1:h-4" src="img/star.png" alt="" />
                                                                <img className="ex-sm:w-6 ex-sm:h-6 ex1-sm:w-4 ex-sm1:h-4" src="img/star.png" alt="" />
                                                                <img className="ex-sm:w-6 ex-sm:h-6 ex1-sm:w-4 ex-sm1:h-4" src="img/star.png" alt="" />
                                                                <img className="ex-sm:w-6 ex-sm:h-6 ex1-sm:w-4 ex-sm1:h-4" src="img/star.png" alt="" />
                                                            </div>
                                                            <div className="font-['Red_Rose'] font-normal ex-sm:text-[20px] ex-sm1:text-[15px] text-[#212121]" >{item.rating}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}


