import Head from "next/head"
import React from 'react';
import styled from 'styled-components';
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react"
import {
  CandyMachine,
  Metaplex,
  Nft,
  NftWithToken,
  PublicKey,
  Sft,
  SftWithToken,
  walletAdapterIdentity,
} from "@metaplex-foundation/js"
import { Keypair, Transaction } from "@solana/web3.js"
import { useModal } from "@nextui-org/react";

import {
  getRemainingAccountsForCandyGuard,
  mintV2Instruction,
} from "@/utils/mintV2"
import { fromTxError } from "@/utils/errors"
import {Column} from '../../components/element'
import { ModalContent } from "../../components/modals";

const Whitelist = () => {

  

  const wallet = useWallet()
  const { publicKey } = wallet;
  const [flag, setFlag] = useState(publicKey);
  const { connection } = useConnection()
  const [metaplex, setMetaplex] = useState<Metaplex | null>(null)
  const [candyMachine, setCandyMachine] = useState<CandyMachine | null>(null)
  const [collection, setCollection] = useState<
    Sft | SftWithToken | Nft | NftWithToken | null
  >(null)
  const [formMessage, setFormMessage] = useState<string | null>(null)

  const { setVisible, bindings } = useModal();
  useEffect(() => {
    if (localStorage.getItem("item2") !== "agree") {
      setVisible(true);
    }
  }, [publicKey]);

  useEffect(() => {
    ;(async () => {
      if (wallet && connection && !collection && !candyMachine) {
        if (!process.env.NEXT_PUBLIC_CANDY_MACHINE_ID) {
          throw new Error("Please provide a candy machine id")
        }
        const metaplex = new Metaplex(connection).use(
          walletAdapterIdentity(wallet)
        )
        setMetaplex(metaplex)

        const candyMachine = await metaplex.candyMachines().findByAddress({
          address: new PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID),
        })

        setCandyMachine(candyMachine)

        const collection = await metaplex
          .nfts()
          .findByMint({ mintAddress: candyMachine.collectionMintAddress })

        setCollection(collection)

        console.log(collection)
      }
    })()
  }, [wallet, connection])

  useEffect(() => {
    
  }, [wallet])

  /** Mints NFTs through a Candy Machine using Candy Guards */
  const handleMintV2 = async () => {
    if (!metaplex || !candyMachine || !publicKey || !candyMachine.candyGuard) {
      if (!candyMachine?.candyGuard)
        throw new Error(
          "This app only works with Candy Guards. Please setup your Guards through Sugar."
        )

      throw new Error(
        "Couldn't find the Candy Machine or the connection is not defined."
      )
    }

    try {
      const { remainingAccounts, additionalIxs } =
        getRemainingAccountsForCandyGuard(candyMachine, publicKey)

      const mint = Keypair.generate()
      const { instructions } = await mintV2Instruction(
        candyMachine.candyGuard?.address,
        candyMachine.address,
        publicKey,
        publicKey,
        mint,
        connection,
        metaplex,
        remainingAccounts
      )

      const tx = new Transaction()

      if (additionalIxs?.length) {
        tx.add(...additionalIxs)
      }

      tx.add(...instructions)

      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

      const txid = await wallet.sendTransaction(tx, connection, {
        signers: [mint],
      })

      const latest = await connection.getLatestBlockhash()
      await connection.confirmTransaction({
        blockhash: latest.blockhash,
        lastValidBlockHeight: latest.lastValidBlockHeight,
        signature: txid,
      })
    } catch (e) {
      const msg = fromTxError(e)

      if (msg) {
        setFormMessage(msg.message)
      }
    }
  }

  const cost = candyMachine
    ? candyMachine.candyGuard?.guards.solPayment
      ? Number(candyMachine.candyGuard?.guards.solPayment?.amount.basisPoints) /
          1e9 +
        " SOL"
      : "Free mint"
    : "..."
    return (
        <>
          <Head>
              <title>pNFTs mint</title>
              <meta name="description" content="Mint pNFTs from the UI" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <ModalContent
            setVisible={setVisible}
            bindings={bindings}
            title="Disclaimer"
            textdata="Kosha Creations, LLC and The Shucked Up Oyster Club are not registered investment, legal, or tax advisors in the financial or investment spaces, and/or brokers/dealers. Buying or selling any cryptocurrency-related or blockchain asset, including digital collectibles, is extremely risky and could result in significant capital losses and unexpected liabilities.  Some restrictions on discounts and perks directly related to the ownership of a digital collectible may apply.  The purchase of one of our SUOC digital collectibles is not a guarantee of profit, and may lose value.  By purchasing our digital collectibles, you agree to the Project Terms & Conditions and the SUOC Digital Collectible License Agreement.  For more information on your IP rights with regard to ownership of a digital collectible, please see our Digital Asset License Agreement."
            item="item2"
          />
          <main
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "96px 0",
              }}
          >
              <div
              style={{
                  display: "flex",
                  gap: "32px",
                  alignItems: "center",
                  justifyContent: 'center',
                  flexWrap: "wrap",
              }}
              >
                <img
                    style={{ maxWidth: "396px", borderRadius: "8px" }}
                    src={collection?.json?.image}
                />
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#111",
                    padding: "32px 24px",
                    borderRadius: "16px",
                    border: "1px solid #222",
                    minWidth: "320px",
                    }}
                >
                    <h1>{collection?.name}</h1>
                    <p style={{ color: "#807a82", marginBottom: "32px" }}>
                    {collection?.json?.description}
                    </p>

                    <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#261727",
                        padding: "16px 12px",
                        borderRadius: "16px",
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        }}
                    >
                        <span>Public</span>
                        <b>{cost}</b>
                    </div>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                        }}
                    >
                        <span style={{ fontSize: "11px" }}>Live</span>
                        <span style={{ fontSize: "11px" }}>512/1024</span>
                    </div>
                    <button disabled={!publicKey} onClick={handleMintV2}>
                      mint
                    </button>
                    {/* <WalletMultiButton
                        style={{
                            width: "100%",
                            height: "auto",
                            marginTop: "8px",
                            padding: "8px 0",
                            justifyContent: "center",
                            fontSize: "13px",
                            backgroundColor: "#111",
                            lineHeight: "1.45",
                        }}
                    /> */}
                    {formMessage}
                    </div>
                </div>
              </div>
          </main>
        </>
    )
}

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  overflow: auto;
  gap: 20px;
`;
// eslint-disable-next-line no-redeclare
const Text = styled(Column)`
  font-size: 40px;
  font-weight: 600;
  color: #5b463f;
`;

export default Whitelist;