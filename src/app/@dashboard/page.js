"use client"
import AboutUs from "@/components/About-us"
import ContactUs from "@/components/Contact-us"
import Feedback from "@/components/Feedback"
import Navbar from "@/components/Header"
import HeroSection from "@/components/Hero-section"
import Portfolio from "@/components/Portfolio-highlights"
import Work from "@/components/Work"
import React, { useEffect } from "react";

export default function Dashboard() {

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = (e) => {
      e.preventDefault();
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll('.fadein');
      // console.log(pageTop, pageBottom, "iamchotadon")

      tags.forEach(tag => {
        if (tag.getBoundingClientRect().top + window.scrollY < pageBottom) {
          tag.classList.add('visible');
        } else {
          tag.classList.remove('visible');
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    document.addEventListener('click', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <AboutUs />
      <Work />
      <Feedback />
      <ContactUs />
    </div>
  )
}
