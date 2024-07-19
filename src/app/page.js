import React from "react";
import Script from 'next/script';
import Hotjar from '@hotjar/browser';

export default function Home() {
  const siteId = 5060817;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);
  return (
    <>
      <Script
        id="vtag-ai-js"
        src="https://r2.leadsy.ai/tag.js"
        strategy="lazyOnload"
        data-pid="wfpwuAhJsLaYkTQo"
        data-version="062024"
      />
    </>
  );
}