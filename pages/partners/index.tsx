import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useModal } from "@nextui-org/react";
import { Column } from "../../components/element";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Metaplex } from "@metaplex-foundation/js";
import ActiveFitImage from "../../components/assets/image/active-fit.jpg";
import HyattImage from "../../components/assets/image/hyatt.webp";
import QRCode from "react-qr-code";
import { AiFillCaretDown } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import SUOC_PARTNERSHIP_LOGO from "../../components/assets/image/partnership-logo.png";

const Partners = () => {
  const wallet = useWallet();
  const { publicKey } = wallet;
  const { connection } = useConnection();
  const { setVisible, bindings } = useModal();
  const [openedActiveFit, setOpenedActiveFit] = useState(false);
  const [openedHyatt, setOpenedHyatt] = useState(false);
  const [hasNFT, setHasNFT] = useState(false);

  const checkNFTOwned = async () => {
    if (!publicKey) return;
    try {
      const metaplex = new Metaplex(connection);
      const allNFTs = await metaplex
        .nfts()
        .findAllByOwner({ owner: publicKey });

      allNFTs.forEach((nft) => {
        console.log(nft.symbol, nft.name);
        if (nft.symbol === "SUOC" && nft.name.startsWith("SUOC Whitelist")) {
          setHasNFT(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("item1") !== "agree") {
      setVisible(true);
    }
    checkNFTOwned();
  }, []);

  useEffect(() => {
    checkNFTOwned();
  }, [publicKey]);

  return (
    <Wrapper>
      <PartnershipLogo
        src={SUOC_PARTNERSHIP_LOGO.src}
        alt="partnership logo"
        style={{
          marginTop: "30px",
        }}
      />
      <Text style={{ fontWeight: 700, fontSize: "28px" }}>
        Welcome to our partnership page! As a member of our community, you get
        access to range of extraordinary benefits. Enjoy exclusive discounts,
        early access to exciting NFT drops, limited edition collaborations,
        unique content!
      </Text>
      <Content>
        <PartnersCard>
          <PartnerImage src={ActiveFitImage.src} />
          <PartnerDescription>
            <Text style={{ paddingLeft: "8px" }}>
              Active&Fit Direct: For $28/month you get access to over 12,000
              fitness centers across the US and more + discounts from *20-70%
              off to over 5,800 other fitness centers.
            </Text>
            <Text style={{ paddingLeft: "8px" }}>
              For more information: check out the Q&A below.
            </Text>
            <a
              href="/active_fit_.pdf"
              target="_blank"
              style={{
                textDecoration: "none",
                fontSize: "24px",
                textAlign: "right",
                marginRight: "28px",
              }}
            >
              See more details
              <BiDownload size={20} style={{ marginLeft: 4 }} />
            </a>
            <Text
              style={{
                color: "#5b463f",
                cursor: "pointer",
                textAlign: "right",
                marginRight: "8px",
                marginTop: "10px",
              }}
              onClick={() => {
                setOpenedActiveFit(!openedActiveFit);
              }}
            >
              Get Discount
            </Text>
            <AiFillCaretDown
              size={30}
              style={{
                position: "absolute",
                bottom: 4,
                right: 4,
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenedActiveFit(!openedActiveFit);
              }}
            />
            {openedActiveFit && (
              <DetailedInfo>
                {!hasNFT && (
                  <>
                    <Text>
                      To get access to this feature you can get an SUOC NFT on
                      magic eden
                    </Text>
                    <a
                      href="https://magiceden.io/marketplace/suoc_whitelist"
                      target="_blank"
                      style={{ textDecoration: "none", fontSize: "24px" }}
                    >
                      Get NFT on Magic Eden
                    </a>
                  </>
                )}
                {hasNFT && (
                  <ScanArea>
                    <a
                      href="https://www.activeandfitdirect.com/fitness/AF710083KO"
                      target="_blank"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      Activate Discount
                    </a>
                    <Text style={{ fontSize: "26px" }}>
                      Scan QR Code For Discount
                    </Text>
                    <QRCode
                      value="https://www.activeandfitdirect.com/fitness/AF710083KO"
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "20px",
                      }}
                    />
                  </ScanArea>
                )}
              </DetailedInfo>
            )}
          </PartnerDescription>
        </PartnersCard>
        <PartnersCard>
          <PartnerImage src={HyattImage.src} />
          <PartnerDescription>
            <Text style={{ paddingLeft: "8px" }}>
              Hyatt Hotels: A globally recognized hospitality company, featuring
              a diverse portfolio of over 20 distinct brands, spread across 65
              countries. As of 2021, including luxury hotels, resorts, and
              vacation spaces. Our partnership offers holders discounts up to
              15% off your stay.
            </Text>
            <Text
              style={{
                color: "#5b463f",
                cursor: "pointer",
                textAlign: "right",
                marginRight: "8px",
                marginTop: "10px",
              }}
              onClick={() => {
                setOpenedHyatt(!openedHyatt);
              }}
            >
              Get Discount
            </Text>
            <AiFillCaretDown
              size={30}
              style={{
                position: "absolute",
                bottom: 4,
                right: 4,
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenedHyatt(!openedHyatt);
              }}
            />
            {openedHyatt && (
              <DetailedInfo>
                {!hasNFT && (
                  <>
                    <Text>
                      To get access to this feature you can get an SUOC NFT on
                      magic eden
                    </Text>
                    <a
                      href="https://magiceden.io/marketplace/suoc_whitelist"
                      target="_blank"
                      style={{ textDecoration: "none", fontSize: "24px" }}
                    >
                      Get NFT on Magic Eden
                    </a>
                  </>
                )}
                {hasNFT && (
                  <ScanArea>
                    <a
                      href="https://www.hyatt.com/home?corp_id=223904"
                      target="_blank"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      Activate Discount
                    </a>
                    <Text style={{ fontSize: "26px" }}>
                      Scan QR Code For Discount
                    </Text>
                    <QRCode
                      value="https://www.hyatt.com/home?corp_id=223904"
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "20px",
                      }}
                    />
                  </ScanArea>
                )}
              </DetailedInfo>
            )}
          </PartnerDescription>
        </PartnersCard>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  gap: 50px;
  background-color: #fdf9e5;
  color: #5b463f;
`;

const Content = styled(Column)`
  max-width: 1300px;
  margin: auto 20px;
  padding-bottom: 50px;
  gap: 30px;
`;
// eslint-disable-next-line no-redeclare
const Text = styled.div`
  text-align: center;
  font-size: 22px;
  line-height: 1.3em;
  letter-spacing: 1.5px;
  width: 95%;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const PartnersCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  min-height: 300px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PartnerImage = styled.img`
  width: 50%;
  object-fit: cover;
  min-height: 300px;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 200px;
  }
`;

const PartnerDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailedInfo = styled.div`
  display: flex;
  position: absolute;
  bottom: -100px;
  right: 0px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  background-color: white;
  height: 100px;
  z-index: 10;
  font-weight: 700;
  box-shadow: 10px 5px 5px #00000070;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ScanArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const PartnershipLogo = styled.img`
  width: 700px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

export default Partners;
