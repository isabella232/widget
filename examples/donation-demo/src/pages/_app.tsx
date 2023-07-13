import configuration from "@/configuration";
import "@/styles/globals.css";
import { supportedNetworks } from "@superfluid-finance/widget";
import {
  w3mProvider,
  w3mConnectors,
  EthereumClient,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import type { AppProps } from "next/app";
import { IntercomProvider } from "react-use-intercom";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

const { WalletConnectProjectID, IntercomAppID } = configuration;

const { publicClient } = configureChains(supportedNetworks, [
  w3mProvider({ projectId: WalletConnectProjectID }),
]);

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: w3mConnectors({
    projectId: WalletConnectProjectID,
    chains: supportedNetworks,
  }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, supportedNetworks);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <IntercomProvider appId={IntercomAppID}>
        <WagmiConfig config={wagmiConfig}>
          <Component {...pageProps} />

          <Web3Modal
            projectId={WalletConnectProjectID}
            ethereumClient={ethereumClient}
          />
        </WagmiConfig>
      </IntercomProvider>
    </>
  );
}
