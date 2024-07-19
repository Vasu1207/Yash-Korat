"use client"
import AboutUs from "@/components/About-us"
import ContactUs from "@/components/Contact-us"
import Feedback from "@/components/Feedback"
import Navbar from "@/components/Header"
import HeroSection from "@/components/Hero-section"
import Portfolio from "@/components/Portfolio-highlights"
import Work from "@/components/Work"
import { useEffect, useState } from 'react';
import Hotjar from '@hotjar/browser';
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
        const ipResponse = await fetch('https://ipapi.co/json');
        if (!ipResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const ipData = await ipResponse.json();

        // Create an object called details
        const details = {
          ip: ipData.ip,
          network: ipData.network,
          version: ipData.version,
          city: ipData.city,
          region: ipData.region,
          region_code: ipData.region_code,
          country: ipData.country,
          country_name: ipData.country_name,
          country_code: ipData.country_code,
          country_code_iso3: ipData.country_code_iso3,
          country_capital: ipData.country_capital,
          country_tld: ipData.country_tld,
          continent_code: ipData.continent_code,
          in_eu: ipData.in_eu,
          postal: ipData.postal,
          longitude: ipData.longitude,
          latitude: ipData.latitude,
          timezone: ipData.timezone,
          utc_offset: ipData.utc_offset,
          country_calling_code: ipData.country_calling_code,
          currency: ipData.currency,
          currency_name: ipData.currency_name,
          languages: ipData.languages,
          country_area: ipData.country_area,
          country_population: ipData.country_population,
          asn: ipData.asn,
          org: ipData.org
        };

        // Store the details object in localStorage as a JSON string
        localStorage.setItem('details', JSON.stringify(details));
        // // Fetch device info
        // const parser = new UAParser();
        // const deviceInfoString = `${parser.getDevice().type || 'Desktop'} - ${parser.getOS().name}`;
        // setDeviceInfo(deviceInfoString);
        // localStorage.setItem('deviceInfo', deviceInfoString);

        // // Fetch location based on IP
        // const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        // if (!locationResponse.ok) {
        //   throw new Error(`Failed to fetch location: ${locationResponse.statusText}`);
        // }
        // const locationData = await locationResponse.json();
        // const { latitude, longitude } = locationData;
        // setLocation({ lat: latitude, lon: longitude });
        // localStorage.setItem('userLocationCoordinate', JSON.stringify({ lat: latitude, lon: longitude }));

        // // Reverse geocoding to get address
        // const addressResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
        // if (!addressResponse.ok) {
        //   throw new Error(`Failed to fetch address: ${addressResponse.statusText}`);
        // }
        // const addressData = await addressResponse.json();
        // const { country, state, city } = addressData.address;
        // setAddress({ country, state, city });

        // // Store combined address in local storage
        // const addressString = `${city || 'N/A'}, ${state || 'N/A'}, ${country || 'N/A'}`;
        // localStorage.setItem('address', addressString);

      } catch (error) {
        console.error('Error fetching the IP address or information:', error);
      }
    }

    fetchIpAndInfo();
  }, []);

  const siteId = 5060817;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);

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
