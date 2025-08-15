import Head from "next/head";

export default function SEO({ title = "AKASH INTER COLLEGE", description = "AKASH INTER COLLEGE - HUSAINGANJ, FATEHPUR 212651 (U.P.). Admissions open.", url = "https://example.com" }) {
  const fullTitle = title ? `${title} | AKASH INTER COLLEGE` : "AKASH INTER COLLEGE";
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
