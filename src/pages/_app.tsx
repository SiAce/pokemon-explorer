import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from "next/app";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3980196804516265"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
