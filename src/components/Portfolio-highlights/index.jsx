"use client"
import React, { useState } from 'react'
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { info } from './data';

export default function Portfolio() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedIndex(index);
    };

    const getButtonClass = (index) => {
        return index === selectedIndex ? 'box2 active-tab' : 'box2';
    };

    return (
        <div>

            <div className="lg1:fadein sm:pt-9 sm1:pt-6 animation flex justify-center">
                <div className="l:px-[140px xl1:px-[50px] container sm1:px-[20px] sm:py-12 sm1:py-8 ex-sm1:py-5">
                    <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
                        <div className="text-center grid gap-6">
                            <p className="font-bold text-[36px] lg1:text-[26px] sm1:text-[20px] font-['Red_Rose']">Portfolio Highlights</p>
                            <div className="flex justify-center">
                                <div className="lg:flex lg1:grid lg1:gap-3 md1:gap-0">
                                    <Tab>
                                        <button className={getButtonClass(0) + " ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px]"}>All</button>
                                    </Tab>
                                    <Tab>
                                        <button className={getButtonClass(1) + " ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px]"}>Website</button>
                                    </Tab>
                                    <Tab>
                                        <button className={getButtonClass(2) + " ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px]"}>Mobile</button>
                                    </Tab>
                                    <Tab>
                                        <button className={getButtonClass(3) + " ex-sm1:py-[8px] lg:w-[180px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px]"}>Web App</button>
                                    </Tab>
                                    <Tab>
                                        <button className={getButtonClass(4) + " ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px]"}>Wireframes</button>
                                    </Tab>
                                </div>
                            </div>
                        </div>

                        {info?.map((item, index) => (
                            <TabPanel key={item.id || index}>
                                <div className="fadein flex justify-center">
                                    <div className="md:pt-12 md1:pt-8 md:flex md1:grid gap-[60px]">
                                        <div className='relative group flex justify-center'>
                                            <div className='rounded bg-[#121212]'>
                                                <img className='group-hover:opacity-30 group-hover:blur-[1px]' src={item.img1} alt="" />
                                            </div>
                                            <div className='absolute top-[calc(50%-60px)] py-4 px-6'>
                                                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                                                    <div className='bg-white bg-opacity-15 backdrop-blur-sm rounded-[60px] items-center flex justify-center h-[82px] w-[255px]'>
                                                        <button className='font-["Red_Rose"] bg-[#1D90ED] rounded-[50px] z-1 text-white font-bold gap-8 text-[16px] pl-[16px] pr-1 py-1 items-center flex'>
                                                            View Full Here
                                                            <img src="icons/arrow-circle-right.png" alt="" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative group flex justify-center'>
                                            <div className='rounded bg-[#121212]'>
                                                <img className='group-hover:opacity-30 group-hover:blur-[1px]' src={item.img2} alt="" />
                                            </div>
                                            <div className='absolute top-[calc(50%-60px)] py-4 px-6'>
                                                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                                                    <div className='bg-white bg-opacity-15 backdrop-blur-sm rounded-[60px] items-center flex justify-center h-[82px] w-[255px]'>
                                                        <button className='font-["Red_Rose"] bg-[#1D90ED] rounded-[50px] z-1 text-white font-bold gap-8 text-[16px] pl-[16px] pr-1 py-1 items-center flex'>
                                                            View Full Here
                                                            <img src="icons/arrow-circle-right.png" alt="" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fadein flex justify-center" >
                                    <div className="md:pt-9 md1:pt-5 md:flex md1:grid gap-[60px]">
                                        <div className='relative group flex justify-center'>
                                            <div className='rounded bg-[#121212]'>
                                                <img className='group-hover:opacity-30 group-hover:blur-[1px]' src={item.img3} alt="" />
                                            </div>
                                            <div className='absolute top-[calc(50%-60px)] py-4 px-6'>
                                                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                                                    <div className='bg-white bg-opacity-15 backdrop-blur-sm rounded-[60px] items-center flex justify-center h-[82px] w-[255px]'>
                                                        <button className='font-["Red_Rose"] bg-[#1D90ED] rounded-[50px] z-1 text-white font-bold gap-8 text-[16px] pl-[16px] pr-1 py-1 items-center flex'>
                                                            View Full Here
                                                            <img src="icons/arrow-circle-right.png" alt="" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='relative group flex justify-center'>
                                            <div className='rounded bg-[#121212]'>
                                                <img className='group-hover:opacity-30 group-hover:blur-[1px]' src={item.img4} alt="" />
                                            </div>
                                            <div className='absolute top-[calc(50%-60px)] py-4 px-6'>
                                                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                                                    <div className='bg-white bg-opacity-15 backdrop-blur-sm rounded-[60px] items-center flex justify-center h-[82px] w-[255px]'>
                                                        <button className='font-["Red_Rose"] bg-[#1D90ED] rounded-[50px] z-1 text-white font-bold gap-8 text-[16px] pl-[16px] pr-1 py-1 items-center flex'>
                                                            View Full Here
                                                            <img src="icons/arrow-circle-right.png" alt="" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}


