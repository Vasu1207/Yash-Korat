import React from 'react'
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { contactData } from './data';

// const contactData = [
//     {
//         id: 1,
//         icon: "icons/i1.png",
//         title: "Call me now",
//         value: "+91 70438 62463",
//     },
//     {
//         id: 2,
//         icon: "icons/i2.png",
//         title: "Chat with me",
//         value: "yashkorat22@gmail.com",
//     },
// ];

export default function ContactUs() {

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 710,
                md: 960,
                lg: 1024,
                xl: 1440,
            },
        },
    });

    return (
        <div className="fadein md:py-[60px] md1:py-[40px] ex-sm1:py-[20px] lg:px-[120px] lg1:px-[60px] sm1:px-[40px] ex-sm1:px-[20px] " >
            <div className="main-div md1:block lg1:grid lg1:grid-cols-none " >
                <div className="left-div sm:gap-[73px] sm1:gap-[45px] " >
                    <div>
                        <p className="text-[#132238] sm:text-[24px] sm1:text-[18px] font-normal font-['Red_Rose'] " >Have a project or question in mind? Just send me a message.</p>
                    </div>
                    <div className="grid sm:gap-8 sm1:gap-6 ex-sm1:gap-4 " >
                        {contactData?.map((item, index) => {
                            return (
                                <div className="flex gap-3 items-center " key={item.id} >
                                    <img width={"56px"} height={"56px"} className="ex-sm1:w-10 ex-sm1:h-10 " src={item.icon} alt="img" />
                                    <div>
                                        <div>
                                            <p className="text-[#556070] sm:text-[16px] sm1:text-[18px] ex-sm1:text-[14px] font-normal font-['Red_Rose']" >{item.title}</p>
                                        </div>
                                        <div className="pt-[4px]" >
                                            <p className="text-[#132238] sm:text-[20px] sm1:text-[20px] ex-sm1:text-[16px] font-normal font-['Red_Rose'] " >{item.value}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=" bg-[#EAF5FF] rounded-xl " >
                        <div className="p-4" >
                            <p className="text-[#132238] sm:text-[24px] sm1:text-[20px] ex-sm1:text-[16px] font-normal font-['Red_Rose'] " >Follow me on social media</p>
                            <div className="flex gap-3" >
                                <img width={"24px"} height={"0px"} src="icons/i3.svg" alt="" />
                                <img width={"48px"} height={"48px"} className="ex-sm1:w-10 ex-sm1:h-10 " src="icons/i4.png" alt="" />
                                <img width={"48px"} height={"48px"} className="ex-sm1:w-10 ex-sm1:h-10 " src="icons/i5.png" alt="" />
                                <img width={"48px"} height={"48px"} className="ex-sm1:w-10 ex-sm1:h-10 " src="icons/i6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center" >
                    <img className="hidden lg:block" src="img/big-line.png" alt="" />
                </div>

                <div className="text-center content-center" >
                    <div className="ex-sm:py-[30.5px] ex-sm1:py-[20px] lg1:w-616px " >
                        <div className="grid gap-8" >
                            <ThemeProvider theme={theme}>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                    className="sm:grid sm1:flex sm1:flex-wrap justify-center sm:grid-cols-[47%_47%] gap-6"
                                >
                                    <TextField
                                        id="outlined-multiline-flexible 1"
                                        name='firstname'
                                        autoComplete='first name'
                                        label="First Name"
                                        multiline
                                        className="w-full lg:max-w-[296px] 2xl:min-w-[296px] sm1:min-w-0 "
                                        maxRows={4}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible 2"
                                        name='lastname'
                                        label="Last Name"
                                        autoComplete='last name'
                                        multiline
                                        className="w-full lg:max-w-[296px] 2xl:min-w-[296px] sm1:min-w-0 "
                                        maxRows={4}
                                    />
                                </Box>
                                <Box
                                    component="form"
                                    noValidate
                                    autoComplete="off"
                                    className="sm:grid sm1:flex sm1:flex-wrap justify-center sm:grid-cols-[47%_47%] gap-6"
                                >
                                    <TextField
                                        id="outlined-multiline-flexible 3"
                                        autoComplete='email'
                                        name='email'
                                        label="Email"
                                        multiline
                                        className="w-full lg:max-w-[296px] 2xl:min-w-[296px] sm1:min-w-0 "
                                        maxRows={4}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible 4"
                                        name='phone'
                                        label="Phone Number"
                                        multiline
                                        className="w-full lg:max-w-[296px] 2xl:min-w-[296px] sm1:min-w-0 "
                                        autoComplete='phone'
                                        maxRows={4}
                                    />
                                </Box>
                                <Box
                                    component="form"
                                    noValidate
                                    className=""
                                >
                                    <div>
                                        <TextField
                                            fullWidth
                                            className="lg:w-full lg1:w-[97%]"
                                            id="outlined-multiline-flexible"
                                            name='description'
                                            autoComplete='description'
                                            label="Description"
                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                </Box>
                            </ThemeProvider>

                        </div>
                        <div className="pt-8 flex justify-center " >
                            <div className=" text-center text-[#1D90ED] content-center hover:border-none hover:bg-[#1d90ed] hover:text-white border border-solid border-[#1D90ED] rounded-[4px] w-[164px] h-[44px] " >
                                <button className=" font-normal text-base font-['Red_Rose'] " >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}