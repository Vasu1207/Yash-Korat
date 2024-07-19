import React from "react";
import Script from 'next/script';

export default function Home() {
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