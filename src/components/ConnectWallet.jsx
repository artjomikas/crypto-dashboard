import React from "react";

import {
  RainbowKitProvider,
  connectorsForWallets,
  wallet,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import ConnectWalletButton from "./ConnectWalletButton";
import "@rainbow-me/rainbowkit/styles.css";
import ThemeToggle from "../theme/ThemeToggle";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ alchemyId: "upj9ToC0-vbyxLm4nRpbB5_9QukH00Xh" }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      wallet.metaMask({ chains }),
      wallet.trust({ chains }),
      wallet.coinbase({ appName: "Crypto DashBoard", chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [wallet.ledger({ chains }), wallet.walletConnect({ chains })],
  },
]);

const wagmiClient = createClient({
  connectors,
  provider,
});

const ConnectWallet = () => {
  return (
    <div className="absolute mx-auto w-full">
      
      <div className="flex float-right pt-8 pr-14 items-center justify-center ">
      <ThemeToggle />
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#BB7FF5",
              accentColorForeground: "white",
              borderRadius: "small",
              fontStack: "system",
            })}
          >
            
            <ConnectWalletButton />
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </div>
  );
};

export default ConnectWallet;
