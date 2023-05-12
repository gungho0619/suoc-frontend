import React, { FC, useMemo } from "react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import {
  BackpackWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { Header } from "./header"
import { Footer } from "./footer"
import styled from "styled-components"

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css")

const Wallet = ({ children }: { children: React.ReactChild }) => {
  const endpoint = "https://api.devnet.solana.com"

  const wallets = useMemo(
    () => [
      /**
       * Select the wallets you wish to support, by instantiating wallet adapters here.
       *
       * Common adapters can be found in the npm package `@solana/wallet-adapter-wallets`.
       * That package supports tree shaking and lazy loading -- only the wallets you import
       * will be compiled into your application, and only the dependencies of wallets that
       * your users connect to will be loaded.
       */
      new PhantomWalletAdapter(),
      new BackpackWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{ commitment: "confirmed" }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Wrapper>
            <Header></Header>
            {children}{" "}
            {/* Your app's components go here, nested within the context providers. */}
            <Footer></Footer>
          </Wrapper>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #fdf9e5;
`

export default Wallet
