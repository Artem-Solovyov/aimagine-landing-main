import Header from "@/app/components/Header/Header";
import { Providers } from "@/redux/provider";
import Script from "next/script";
import "./globals.scss";

export const metadata = {
  title: "Aimagine",
  description: "Art is for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="favicon.ico" />
        <title>Aimagine - AI NFT marketplace on Arbitrum</title>
        <meta name="description" content="The first AI Art NFT marketplace on Arbitrum that rewards community for their social capital." />
        <meta property="og:url" content="https://aimagine.wtf" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aimagine - AI NFT marketplace on Arbitrum" />
        <meta property="og:description" content="The first AI Art NFT marketplace on Arbitrum that rewards community for their social capital." />
        <meta property="og:image" content="https://aimagine-landing.vercel.app/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aimagine.wtf" />
        <meta property="twitter:url" content="https://aimagine.wtf" />
        <meta name="twitter:title" content="Aimagine - AI NFT marketplace on Arbitrum" />
        <meta name="twitter:description" content="The first AI Art NFT marketplace on Arbitrum that rewards community for their social capital." />
        <meta name="twitter:image" content="https://aimagine-landing.vercel.app/opengraph.jpg" />

      </head>
        <div className="container">
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QPQ738H4LC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-QPQ738H4LC');
            `}
        </Script>
      </div>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
