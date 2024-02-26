import { Provider } from "inversify-react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLoader from "../components/loader";
import MainLayout from "../components/MainLayout";
import * as gtag from "../lib/gtag";
import { RootStore } from "../stores/RootStore";
import "../styles/style.scss";
import { ModalsContainer } from "../modals";
import { useEffect } from "react";

const rootStore = new RootStore();
const container = rootStore.container;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}',{
					page_path: window.location.pathname,
				 });
          `,
        }}
      />
      <AppLoader>
        <Provider container={container} key={container.id}>
          <MainLayout>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </MainLayout>
		  <ModalsContainer />
        </Provider>
      </AppLoader>
      <ToastContainer style={{zIndex:10000000}} theme="colored" />
    </>
  );
}

export default MyApp;

// window.location.hash = '2'
