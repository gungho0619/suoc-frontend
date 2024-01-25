import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { FaDiscord, FaTwitter, FaInfoCircle } from "react-icons/fa";

import {
  BACKGROUNDS,
  SKINS,
  SHIRTS,
  EYES,
  MOUTHS,
  HEADS,
  ACCESSORIES,
} from "@/constants/suoc-whitelist";
import {
  getSuocNFTMetadata,
  createdNFT,
  getIsMintable,
  payForMint,
  getAddressInfo,
} from "@/services/meta.service";
import {
  generateSigner,
  percentAmount,
  publicKey,
  createSignerFromKeypair,
} from "@metaplex-foundation/umi";
import {
  createNft,
  verifyCollectionV1,
  fetchDigitalAsset,
  fetchAllMetadataByOwner,
} from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import { useWallet } from "@solana/wallet-adapter-react";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import {
  SystemProgram,
  Transaction,
  PublicKey,
  Connection,
} from "@solana/web3.js";
// Create the Collection NFT.
import KoCreatorStudio from "../../components/assets/image/ko-creator-studio.png";

interface Metadata {
  img: any;
  property: string;
  css?: object;
}

const SwiperOption = ({
  rndFlag,
  imgs,
  flag,
  setVal,
  title,
}: {
  rndFlag: boolean;
  title: string;
  imgs: Array<Metadata>;
  flag: number;
  setVal: (newValue: number) => void;
}) => {
  const [swiper, setSwiper] = useState<any>();
  const [snapIndex, setSnapIndex] = useState(0);
  const [sliceLengh, setSliceLength] = useState(0);

  useEffect(() => {
    setVal(snapIndex);
  }, [snapIndex]);

  useEffect(() => {
    swiper?.slideTo(Math.round(Math.random() * 100) % sliceLengh, 0);
  }, [rndFlag]);

  return (
    <SwiperOptionDiv>
      <div className="main-div">
        <AiFillCaretLeft
          className="ctl-icon left"
          onClick={() => {
            swiper.slidePrev();
          }}
        ></AiFillCaretLeft>
        <h2 style={{ textAlign: "center", margin: 0 }}> {title} </h2>
        <Swiper
          slidesPerView={1}
          onSwiper={(s) => {
            setSwiper(s);
            setSnapIndex(s.snapIndex);
            setSliceLength(s.slides.length);
          }}
          modules={[Pagination, Navigation]}
          onSlideChange={(event) => {
            const ind = event.snapIndex;
            setSnapIndex(ind);
          }}
          style={{
            width: "200px",
            height: "150px",
            border: "2px solid grey",
          }}
        >
          {imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={
                  flag === 0
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        ...item.css,
                      }
                    : flag === 1
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "0 -50px",
                        ...item.css,
                      }
                    : flag === 2
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: `200% 200%`,
                        backgroundPosition: "305px 285px",
                        ...item.css,
                      }
                    : flag === 3
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: `no-repeat`,
                        ...item.css,
                      }
                    : flag === 4
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "200% 200%",
                        backgroundPosition: "635px -450px",
                      }
                    : flag === 5
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px",
                      }
                    : flag === 6
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "200% 200%",
                        backgroundPosition: "635px -450px",
                      }
                    : undefined
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <AiFillCaretRight
          className="ctl-icon right"
          onClick={() => {
            swiper.slideNext();
          }}
        ></AiFillCaretRight>
      </div>
      <div className="info">
        <span>{imgs[snapIndex].property}</span>
      </div>
    </SwiperOptionDiv>
  );
};

const Minting = () => {
  const [valBackground, setValBackground] = useState(0);
  const [valSkins, setValSkins] = useState(0);
  const [valEyes, setValEyes] = useState(0);
  const [valMouths, setValMouths] = useState(0);
  const [valShirt, setValShirt] = useState(0);
  const [valHead, setValHead] = useState(0);
  const [valAccessiores, setValAccessoires] = useState(0);
  const [rndFlag, setRndFlag] = useState(true);
  const [freeCount, setFreeCount] = useState(0);

  const wallet = useWallet();

  useEffect(() => {
    init();
  }, [wallet]);

  const init = async () => {
    if (wallet.publicKey != null) {
      const addressInfo = await getAddressInfo({
        address: String(wallet.publicKey),
      });

      if (!addressInfo.data) {
        setFreeCount(0);
      } else {
        setFreeCount(addressInfo.data.availableForFree);
      }
    }
  };

  const getUmi = () => {
    return createUmi(String(process.env.NEXT_PUBLIC_RPC))
      .use(mplCandyMachine())
      .use(walletAdapterIdentity(wallet));
  };

  const createCollection = async (data: any) => {
    const umi = getUmi();
    const uri = await getSuocNFTMetadata(data);
    const collectionMint = generateSigner(umi);
    const collectionAuth = generateSigner(umi);
    await createNft(umi, {
      mint: collectionMint,
      authority: collectionAuth,
      name: "SUOC",
      uri: `https://ipfs.io/ipfs/${uri.data}`,
      sellerFeeBasisPoints: percentAmount(9.99, 2), // 9.99%
      isCollection: true,
      collectionDetails: {
        __kind: "V1",
        size: 6000,
      },
    }).sendAndConfirm(umi);
    console.log("collectionMint => ", collectionMint);
  };

  const mint = async (data: any, count: number, isFree: boolean) => {
    try {
      const umi = getUmi();

      const allNFT = await fetchAllMetadataByOwner(
        umi,
        publicKey(String(wallet.publicKey))
      );
      const whiteList = allNFT.map((data) => {
        if (data.symbol === "SUOC" && data.name.startsWith("SUOC Whitelist")) {
          return true;
        } else {
          return false;
        }
      });

      const isMintable = await getIsMintable({
        address: String(wallet.publicKey),
        count: count,
        // isWhiteList: whiteList.includes(true)
        isWhiteList: true,
      });

      console.log("isMintable ==> ", isMintable);
      if (!isMintable.isSuccess) {
        alert(isMintable.message);
        return;
      } else {
        if (isMintable.data.price > 0) {
          if (isFree) {
            alert("You are not able to free mint.");
            return;
          }

          const payResult = await pay(isMintable.data.price, count);
          if (!payResult) {
            alert("Wrong payment");
            return;
          }
        } else {
          if (!isFree) {
            alert("You are able to free mint.");
            return;
          }
        }

        await mintDetail(data, umi);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const mintDetail = async (data: any, umi: any) => {
    const uri = await getSuocNFTMetadata(data);
    console.log("uri => ", uri);

    const mint = generateSigner(umi);
    console.log("mint => ", mint);
    const created = await createNft(umi, {
      mint,
      name: "SUOC",
      uri: `https://ipfs.io/ipfs/${uri.data}`,
      sellerFeeBasisPoints: percentAmount(9.99, 2),
      collection: {
        key: publicKey(String(process.env.NEXT_PUBLIC_COLLECTION)),
        verified: false,
      },
    }).sendAndConfirm(umi);

    console.log("created => ", created);
    setTimeout(async () => {
      const asset = await fetchDigitalAsset(umi, mint.publicKey);
      console.log("asset => ", asset);

      const keys: number[] = String(
        process.env.NEXT_PUBLIC_COLLECTION_AUTH_SECRET_KEY
      )
        .split("-")
        .map((key) => {
          return Number(key);
        });

      const collectionAuth = createSignerFromKeypair(umi, {
        publicKey: publicKey(
          String(process.env.NEXT_PUBLIC_COLLECTION_AUTH_PUBLIC_KEY)
        ),
        secretKey: new Uint8Array(keys),
      });

      await verifyCollectionV1(umi, {
        metadata: asset.metadata.publicKey,
        collectionMint: publicKey(String(process.env.NEXT_PUBLIC_COLLECTION)),
        authority: collectionAuth,
      }).sendAndConfirm(umi);

      const result = await createdNFT({
        address: String(wallet.publicKey),
      });
      await init();
      alert(result.message + `\n minted address: ${String(mint.publicKey)}`);
    }, 15000);
  };

  const pay = async (amount: number, count: number) => {
    if (wallet.publicKey) {
      const connection = new Connection(
        String(process.env.NEXT_PUBLIC_RPC),
        "confirmed"
      );
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(String(process.env.NEXT_PUBLIC_OWNER_WALLET)),
          lamports: amount * 1000000000,
        })
      );

      const signature = await wallet.sendTransaction(transaction, connection);
      const latestBlockHash = await connection.getLatestBlockhash();

      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: signature,
      });

      const payResult = await payForMint({
        address: String(wallet.publicKey),
        count,
      });
      if (payResult.isSuccess) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <Wrapper>
      <img src={KoCreatorStudio.src} className="ko-creator-studio" />
      <Container>
        <OptionsDiv>
          <SwiperOption
            rndFlag={rndFlag}
            title="Background"
            imgs={BACKGROUNDS}
            setVal={setValBackground}
            flag={0}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Shell"
            imgs={SKINS}
            setVal={setValSkins}
            flag={1}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Eyes"
            imgs={EYES}
            setVal={setValEyes}
            flag={2}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Mouth"
            imgs={MOUTHS}
            setVal={setValMouths}
            flag={3}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Shirt"
            imgs={SHIRTS}
            setVal={setValShirt}
            flag={4}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Head"
            imgs={HEADS}
            setVal={setValHead}
            flag={5}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Accessories"
            imgs={ACCESSORIES}
            setVal={setValAccessoires}
            flag={6}
          />
          <ControlContainer>
            {/* <Notice>
          <FaInfoCircle />
          <div>
            We provide price reductions, If you select "Five Mint" plan.
            <br />
            You can play "Free Mint", If you have "Available For Free".
          </div>
        </Notice> */}
            <ControlButtons>
              {/* <h2>
            Available For Free: <span>{freeCount}</span>{" "}
          </h2> */}
              {/* <button
                            onClick={() =>
                                createCollection({
                                    accessory:
                                        ACCESSORIES[valAccessiores].property,
                                    background:
                                        BACKGROUNDS[valBackground].property,
                                    clothe: SHIRTS[valShirt].property,
                                    eye: EYES[valEyes].property,
                                    hat: HEADS[valHead].property,
                                    mouth: MOUTHS[valMouths].property,
                                    shell: SKINS[valSkins].property,
                                })
                            }
                        >
                            Create Collection
                        </button> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {/* <button
              onClick={() =>
                mint(
                  {
                    accessory: ACCESSORIES[valAccessiores].property,
                    background: BACKGROUNDS[valBackground].property,
                    clothe: SHIRTS[valShirt].property,
                    eye: EYES[valEyes].property,
                    hat: HEADS[valHead].property,
                    mouth: MOUTHS[valMouths].property,
                    shell: SKINS[valSkins].property,
                  },
                  1,
                  true
                )
              }
            >
              Free&nbsp;Mint
            </button> */}
                <button onClick={() => setRndFlag(!rndFlag)}>Random</button>
                <button
                  onClick={() =>
                    mint(
                      {
                        accessory: ACCESSORIES[valAccessiores].property,
                        background: BACKGROUNDS[valBackground].property,
                        clothe: SHIRTS[valShirt].property,
                        eye: EYES[valEyes].property,
                        hat: HEADS[valHead].property,
                        mouth: MOUTHS[valMouths].property,
                        shell: SKINS[valSkins].property,
                      },
                      1,
                      false
                    )
                  }
                >
                  Mint
                </button>
                {/* <button
              onClick={() =>
                mint(
                  {
                    accessory: ACCESSORIES[valAccessiores].property,
                    background: BACKGROUNDS[valBackground].property,
                    clothe: SHIRTS[valShirt].property,
                    eye: EYES[valEyes].property,
                    hat: HEADS[valHead].property,
                    mouth: MOUTHS[valMouths].property,
                    shell: SKINS[valSkins].property,
                  },
                  5,
                  false
                )
              }
            >
              Five&nbsp;Mint
            </button> */}
              </div>
            </ControlButtons>
          </ControlContainer>
        </OptionsDiv>

        <PreviewDiv>
          <h2 style={{ textAlign: "center", margin: 0 }}>Outcome</h2>
          <div>
            <img src={BACKGROUNDS[valBackground].img.src}></img>
            <img src={SKINS[valSkins].img.src}></img>
            <img src={SHIRTS[valShirt].img.src}></img>
            <img src={ACCESSORIES[valAccessiores].img.src}></img>
            <img src={HEADS[valHead].img.src}></img>
            <img src={EYES[valEyes].img.src}></img>
            <img src={MOUTHS[valMouths].img.src}></img>
          </div>
        </PreviewDiv>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5b463f;
  padding: 30px;
  gap: 20px;

  margin: auto;
  max-width: 1300px;

  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 450px;
  }
`;

const SwiperOptionDiv = styled.div`
  width: min-content;

  .main-div {
    position: relative;
    width: min-content;
    .ctl-icon {
      position: absolute;
      font-size: 30px;
      cursor: pointer;
    }

    .left {
      top: 50%;
      left: -20px;
    }

    .right {
      top: 50%;
      right: -20px;
    }
  }

  .info {
    text-align: center;
    margin-top: 5px;
  }
`;

const OptionsDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  flex: 1;

  @media screen and (max-width: 532px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  @media screen and (max-width: 532px) {
    align-items: center;
  }
  justify-content: space-around;

  @media screen and (max-width: 810px) {
    flex-direction: column;
  }
`;

const ControlContainer = styled.div`
  gap: 10%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 532px) {
    align-items: center;
  }
  justify-content: space-around;

  @media screen and (max-width: 810px) {
    flex-direction: column;
  }
`;

const PreviewDiv = styled.div`
  div {
    position: relative;
    width: 400px;
    height: auto;

    img {
      position: absolute;
      width: 400px;
      height: auto;
      border: 3px solid #5b463f;
    }

    @media screen and (max-width: 450px) {
      width: 250px;
      height: auto;

      img {
        width: 250px;
        height: auto;
      }
    }
  }
`;

const Notice = styled.div`
  :before {
    border-color: #fff #fff #2980b9 #2980b9;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 16px 16px 0;
    border-style: solid;
    border-color: #fff #fff #3498db #3498db;
    background: #3498db;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
    display: block;
    width: 0;
  }
  div {
    font-weight: 500;
    font-size: 18px;
  }
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: 5px;
  gap: 12px;
  background: #3498db;
  position: relative;
  width: 100%;
  padding: 1em 0.9em;
  margin: 0.5em auto;
  color: #f2f2f2;
  overflow: hidden;
`;

const ControlButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    display: block;
    margin: 10px auto;
  }
  margin-top: 20px;
`;

export default Minting;
