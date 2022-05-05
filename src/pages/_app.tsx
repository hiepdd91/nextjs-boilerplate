import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { GTM_ID, pageviewGTM } from "../lib/gtm";
import { GA_ID, pageviewGA } from "../lib/gtag";
import App from "next/app";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { DefaultSeo } from "next-seo";
import { RecoilRoot } from "recoil";
import AppLayout from "@/layouts/AppLayout";
import ErrorBoundary from "@/components/ErrorBoundary";
import seoConstants from "configs/seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageviewGA);
    router.events.on("hashChangeComplete", pageviewGA);
    router.events.on("routeChangeComplete", pageviewGTM);
    return () => {
      router.events.off("routeChangeComplete", pageviewGA);
      router.events.off("hashChangeComplete", pageviewGA);
      router.events.off("routeChangeComplete", pageviewGTM);
    };
  }, [router.events]);
  return (
    <>
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <ErrorBoundary>
        <RecoilRoot>
          <DefaultSeo {...seoConstants} />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </RecoilRoot>
      </ErrorBoundary>
    </>
  );
};

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);
  return { ...appProps };
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
