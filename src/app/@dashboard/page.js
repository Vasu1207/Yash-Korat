"use client"
import AboutUs from "@/components/About-us"
import ContactUs from "@/components/Contact-us"
import Feedback from "@/components/Feedback"
import Navbar from "@/components/Header"
import HeroSection from "@/components/Hero-section"
import Portfolio from "@/components/Portfolio-highlights"
import Work from "@/components/Work"
import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';


export default function Dashboard() {

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = (e) => {
      e.preventDefault();
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll('.fadein');

      tags.forEach(tag => {
        if (tag.getBoundingClientRect().top + window.scrollY < pageBottom) {
          tag.classList.add('visible');
        } else {
          tag.classList.remove('visible');
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [ip, setIp] = useState('');
  const [deviceInfo, setDeviceInfo] = useState('');
  const [location, setLocation] = useState({ lat: '', lon: '' });
  const [address, setAddress] = useState({ country: '', state: '', city: '' });

  useEffect(() => {
    async function fetchIpAndInfo() {
      try {
        // Fetch IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        if (!ipResponse.ok) {
          throw new Error(`Failed to fetch IP: ${ipResponse.statusText}`);
        }
        const ipData = await ipResponse.json();
        setIp(ipData.ip);
        localStorage.setItem('userIp', ipData.ip);

        // Fetch device info
        const parser = new UAParser();
        const deviceInfoString = `${parser.getDevice().type || 'Desktop'} - ${parser.getOS().name}`;
        setDeviceInfo(deviceInfoString);
        localStorage.setItem('deviceInfo', deviceInfoString);

        // Fetch location based on IP
        const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        if (!locationResponse.ok) {
          throw new Error(`Failed to fetch location: ${locationResponse.statusText}`);
        }
        const locationData = await locationResponse.json();
        const { latitude, longitude } = locationData;
        setLocation({ lat: latitude, lon: longitude });
        localStorage.setItem('userLocationCoordinate', JSON.stringify({ lat: latitude, lon: longitude }));

        // Reverse geocoding to get address
        const addressResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
        if (!addressResponse.ok) {
          throw new Error(`Failed to fetch address: ${addressResponse.statusText}`);
        }
        const addressData = await addressResponse.json();
        const { country, state, city } = addressData.address;
        setAddress({ country, state, city });

        // Store combined address in local storage
        const addressString = `${city || 'N/A'}, ${state || 'N/A'}, ${country || 'N/A'}`;
        localStorage.setItem('address', addressString);

      } catch (error) {
        console.error('Error fetching the IP address or information:', error);
      }
    }

    fetchIpAndInfo();
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
