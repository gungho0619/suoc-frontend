import React, { useEffect } from "react";
import styled from "styled-components";
import { useModal } from "@nextui-org/react";
import HeaderImage from "../../components/assets/image/headerimage.png";
import HeaderImageMobile from "../../components/assets/image/header-image-mobile.png";
import { Column, DefaultImage } from "../../components/element";
import Faq from "../../components/Faq";
import Team from "../../components/team";
import Logo from "../../components/assets/image/logo.jpg";
import Mobile from "../../components/assets/image/mobile.png";
import General from "../../components/Faq/general";
import Utility from "../../components/Faq/utility";
import { ModalContent } from "../../components/modals";
import CapOyster from "../../components/assets/image/cap-oyster.png";

const Home = () => {
  const { setVisible, bindings } = useModal();
  useEffect(() => {
    if (localStorage.getItem("item1") !== "agree") {
      setVisible(true);
    }
  }, []);
  return (
    <Wrapper>
      <ModalContent
        setVisible={setVisible}
        bindings={bindings}
        title="Privacy Policy"
        textdata="We use cookies and similar technologies to provide certain functionalities and to improve user experiences.  By clicking on “Agree and continue”, you are providing your consent to the use of such data technologies.  You can choose to revoke your consent with effect for the future.  You can find further information in our Privacy Policy and Terms and Conditions."
        item="item1"
      />
      <WrapperContent>
        <BackImage src1={HeaderImage.src} src2={Mobile.src}>
          <img />
        </BackImage>
      </WrapperContent>
      <Content>
        <div className="about-oyster">
          <Text
            style={{ fontSize: "28px", textAlign: "left", marginLeft: "12px" }}
          >
            <h2>The Shucked Up Oyster Club</h2>
            The Shucked Up Oyster Club or SUOC for short is a collection of
            6,000 hand drawn, unique pieces of art that grant holders access to
            benefits such as corporate partnership discounts, IP rights and
            more. With art curated by professional artist esktn in collaboration
            with Ryan Khatam of Nickelodeon Studios, we encourage holders to
            explore a sustainable non-fungible experience.
          </Text>
          <img src={CapOyster.src} />
        </div>
        <BackImage2>
          <DefaultImage src={Logo.src} />
        </BackImage2>
        <Text>
          TheSUOC’s mascot, Earl, is an oyster from The Chesapeake Bay
          watershed. Oyster communities (reefs), are a fundamental part of
          healthy marine ecosystems. Similarly, we chose oysters to represent
          our dedication to our community and the environment. Our mission is to
          foster a sustainable community, grind culture and bio-based economy.
          We are doing this by partnering with corporations aligned with our
          values so holders can receive exclusive discounts on travel, wellness
          and sustainable clothing while we also allow minters the option of
          choosing their own attributes. The Shucked Up Oyster Club has a unique
          mint process, professional artists, real life utilities and are now
          exploring Solana watersheds looking for others who want to join the
          reef! The world is your oyster, and it’s a shucked up one we’re living
          in… we might as well make the most of it!
        </Text>
        <WrapperHeader id="team"> TEAM </WrapperHeader>
        <Team />
        <WrapperHeader id="faq"> FAQ </WrapperHeader> <Faq />
        <WrapperHeader id="utillfaq"> Utility</WrapperHeader> <Utility />
        <WrapperHeader> General</WrapperHeader> <General />
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

const BackImage = styled.div<{ src1: string; src2: string }>`
  background-color: #fdf9e5;
  width: 100%;
  text-align: center;

  img {
    content: url(${(p) => p.src1});
    @media screen and (max-width: 700px) {
      content: url(${(p) => p.src2});
    }
    max-width: 100%;
    height: auto;
  }
`;

const BackImage2 = styled.div`
  width: 200px;
`;

const WrapperContent = styled(Column)`
  width: 100%;
  overflow: hidden;
`;

const Content = styled(Column)`
  max-width: 1300px;
  margin: auto 20px;
  padding-bottom: 50px;
  gap: 30px;
`;
const WrapperHeader = styled.h1`
  border: 7px solid #5b463f;
  padding: 20px;
  font-size: 3em;
  margin: 0;
  line-height: 0.6em;
  color: #5b463f;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 2.6em;
  }
`;
// eslint-disable-next-line no-redeclare
const Text = styled.div`
  text-align: center;
  font-size: 22px;
  line-height: 42px;
  letter-spacing: 1.5px;
  width: 70%;
  @media screen and (max-width: 700px) {
    font-size: 18px;
    width: 90%;
  }
`;

export default Home;
