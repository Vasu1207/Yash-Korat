import React from 'react'
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { info } from './data';

export default function Portfolio() {
    return (
        <div>

            <div className="lg1:fadein sm:pt-9 sm1:pt-6 animation flex justify-center " >
                <div className="xl:px-[120px] xl1:px-[50px] container sm1:px-[20px] sm:py-12 sm1:py-8 ex-sm1:py-5 " >
                    <Tabs>
                        <div className=" text-center grid gap-6 " >
                            <p className="font-bold text-[36px] lg1:text-[26px] sm1:text-[20px] font-['Red_Rose'] " >Portfolio Highlights</p>
                            <div className="flex justify-center" >
                                <div className="lg:flex lg1:grid lg1:gap-3 md1:gap-0" >
                                    <Tab>
                                        <button className="box2 ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px] " >All</button>
                                    </Tab>
                                    <Tab>
                                        <button className="box2 ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px] " >Website</button>
                                    </Tab>
                                    <Tab>
                                        <button className="box2 ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px] " >Mobile</button>
                                    </Tab>
                                    <Tab>
                                        <button className="box2 ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px] " >Web App</button>
                                    </Tab>
                                    <Tab>
                                        <button className="box2 ex-sm1:py-[8px] ex-sm1:px-[30px] ex-sm:text-[18px] ex-sm1:text-[15px] " >Wireframes</button>
                                    </Tab>
                                </div>
                            </div>
                        </div>

                        {info?.map((item, index) => {
                            return (
                                <TabPanel key={item.id || index} >
                                    <div className="fadein flex justify-center" >
                                        <div className="md:pt-12 md1:pt-8 " >
                                            <div className="lg:flex lg1:grid lg:gap-12 lg1:gap-2 items-center" >
                                                <div className="lg1:flex lg1:justify-center" >
                                                    <img width={"300px"} height={"300px"} src={item.icon1} alt="" />
                                                </div>
                                                <div className="lg:w-[724px] font-['Red_Rose'] py-[19px] " >
                                                    <div>
                                                        <p className="font-bold sm:text-[32px] sm1:text-[26px] text-[#1d90ed]" >{item.title1}</p>
                                                        <p className="pt-4 font-normal text-[16px] text-[#121212] " >{item.text1}</p>
                                                    </div>
                                                    <div className="pt-8" >
                                                        <button className=" border border-solid border-[#1D90ED] rounded-[4px] text-[#1D90ED] font-normal gap-2 text-[16px] px-[7.5px] py-3 flex " >
                                                            <img src="logo/figma.png" alt="" />
                                                            View Full Here
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fadein flex justify-center" >
                                        <div className="md:pt-12 md1:pt-8" >
                                            <div className="lg:flex lg1:grid lg:gap-12 lg1:gap-2 items-center" >
                                                <div className="lg:hidden lg1:flex  lg1:justify-center" >
                                                    <img width={"300px"} height={"300px"} src={item.icon2} alt="" />
                                                </div>
                                                <div className="lg:w-[724px] font-['Red_Rose'] py-[19px] " >
                                                    <div>
                                                        <p className="font-bold sm:text-[32px] sm1:text-[26px] text-[#1d90ed]" >{item.title2}</p>
                                                        <p className="pt-4 font-normal text-[16px] text-[#121212] " >{item.text2}</p>
                                                    </div>
                                                    <div className="pt-8" >
                                                        <button className="border border-solid border-[#1D90ED] rounded-[4px] text-[#1D90ED] font-normal gap-2 text-[16px] px-[7.5px] py-3 flex" >
                                                            <img src="logo/figma.png" alt="" />
                                                            View Full Here
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="lg1:hidden" >
                                                    <img width={"300px"} height={"300px"} src={item.icon2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </Tabs>

                </div>
            </div>
        </div>
    )
}


