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
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import { bscTestnet, base, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ToastContainer } from "react-toastify";
import "../components/polyfills";
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import AppLoader from "../components/loader";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [base],
  [publicProvider()]
);

const projectId = "8271a5dee2c5981640ad5d12b20132af";
const { wallets } = getDefaultWallets({
  appName: "zoo",
  projectId,
  chains,
});
const demoAppInfo = {
  appName: "zoo",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  const [loading, setLoading] = useState(false);
  // try reconnect to web3
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <AppLoader>
          <Provider container={container}>
            <WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
                <Suspense fallback={<h1>Loading posts...</h1>}>
                  {/* <Rotate /> */}
                  <Head>
                    <meta
                      name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    ></meta>
                  </Head>

                  <MainLayout>
                    <AnyComponent {...pageProps} />
                  </MainLayout>

                  <ToastContainer style={{ zIndex: 10000000000 }} />
                  <ModalsContainer />
                </Suspense>
              </RainbowKitProvider>
            </WagmiConfig>
          </Provider>
        </AppLoader>
      ) : (
        <></>
      )}
    </>
  );
}

export default MyApp;
