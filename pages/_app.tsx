import "../styles/style.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RootStore } from "../stores/RootStore";
import { Provider } from "inversify-react";
import { ModalsContainer } from "../modals";
import "react-toastify/dist/ReactToastify.css";
import React, { Suspense } from "react";
import "../components/polyfills";
const rootStore = new RootStore();
const container = rootStore.container;
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@farcaster/auth-kit/styles.css";
import { base } from "wagmi/chains";
import { ToastContainer } from "react-toastify";
import "../components/polyfills";
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import AppLoader from "../components/loader";
import {
  AuthKitProvider,
  SignInButton,
  useProfile,
  useSignInMessage,
} from "@farcaster/auth-kit";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
// import { SessionProvider, getCsrfToken } from "next-auth/react";
const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});
// export async function getServerSideProps(context: any) {
//   const csrfToken = await getCsrfToken(context);
//   return { props: { csrfToken } };
// }
const queryClient = new QueryClient();
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const AnyComponent = Component as any;
  console.log(pageProps);
  const [loading, setLoading] = useState(false);
  // try reconnect to web3
  useEffect(() => {
    setLoading(true);
  }, []);
  const config = {
    rpcUrl: "https://mainnet.optimism.io",
  };
  return (
    <>
      {loading ? (
        // <SessionProvider session={session}>
         <AuthKitProvider config={config}>
            <AppLoader>
              <Provider container={container}>
                <WagmiProvider config={wagmiConfig}>
                  <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider>
                      <Suspense fallback={<h1>Loading posts...</h1>}>
                        {/* <Rotate /> */}
                        <Head>
                          <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                          ></meta>
                        </Head>

                        <MainLayout props={pageProps}>
                          <AnyComponent {...pageProps} />
                        </MainLayout>

                        <ToastContainer style={{ zIndex: 10000000000 }} />
                        <ModalsContainer />
                      </Suspense>
                    </RainbowKitProvider>
                  </QueryClientProvider>
                </WagmiProvider>
              </Provider>
            </AppLoader>
         </AuthKitProvider>
        //  </SessionProvider>
      ) : (
        <></>
      )}
    </>
  );
}

export default MyApp;
