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
                <div className="l:px-[120px] xl1:px-[50px] container sm1:px-[20px] sm:py-12 sm1:py-8 ex-sm1:py-5">
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
                                    <div className="md:pt-12 md1:pt-8">
                                        <div className="xl:flex xl1:grid xl1:grid-cols-[40%_60%] lg1:grid-cols-none xl:gap-12 xl1:gap-2 items-center">
                                            <div className="lg1:flex lg1:justify-center">
                                                <img width={"300px"} height={"300px"} src={item.icon1} alt="" />
                                            </div>
                                            <div className="xl:w-[724px] font-['Red_Rose'] py-[19px]">
                                                <div>
                                                    <p className="font-bold sm:text-[32px] sm1:text-[26px] text-[#1d90ed]">{item.title1}</p>
                                                    <p className="pt-4 font-normal text-[16px] text-[#121212]">{item.text1}</p>
                                                </div>
                                                <div className="pt-8">
                                                    <button className="border border-solid border-[#1D90ED] hover:border-none hover:bg-[#1d90ed] hover:text-white rounded-[4px] text-[#1D90ED] font-normal gap-2 text-[16px] px-[7.5px] py-3 flex">
                                                        <img src="logo/figma.png" alt="" />
                                                        View Full Here
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fadein flex justify-center">
                                    <div className="md:pt-12 md1:pt-8">
                                        <div className="lg1:grid items-center">
                                            <div className="lg:hidden lg1:flex lg1:justify-center">
                                                <img width={"300px"} height={"300px"} src={item.icon2} alt="" />
                                            </div>
                                            <div className="xl:flex xl1:grid xl1:grid-cols-[60%_40%] lg1:grid-cols-none lg1:gap-0 xl:gap-12 xl1:gap-2">
                                                <div className="xl:w-[724px] font-['Red_Rose'] py-[19px]">
                                                    <div>
                                                        <p className="font-bold sm:text-[32px] sm1:text-[26px] text-[#1d90ed]">{item.title2}</p>
                                                        <p className="pt-4 font-normal text-[16px] text-[#121212]">{item.text2}</p>
                                                    </div>
                                                    <div className="pt-8">
                                                        <button className="border hover:border-none hover:bg-[#1d90ed] hover:text-white border-solid border-[#1D90ED] rounded-[4px] text-[#1D90ED] font-normal gap-2 text-[16px] px-[7.5px] py-3 flex">
                                                            <img src="logo/figma.png" alt="" />
                                                            View Full Here
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="lg1:hidden xl1:grid xl1:justify-end">
                                                    <img width={"300px"} height={"300px"} src={item.icon2} alt="" />
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


