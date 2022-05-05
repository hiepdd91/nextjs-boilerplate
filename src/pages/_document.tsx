import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi" dir="rtl">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <link
            rel="alternate"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
            hrefLang="vi"
          />
          <link
            rel="alternate"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
            hrefLang="x-default"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
