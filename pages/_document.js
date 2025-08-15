import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="description" content="AKASH INTER COLLEGE - HUSAINGANJ, FATEHPUR 212651 (U.P.). Admissions open. Explore academics, facilities, and campus life." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
