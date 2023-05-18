import { useState, useRef, useEffect, Suspense } from "react";
import styled from "styled-components";
import { Row, Column } from "./element";
import { FaServer, FaTimes, FaEllipsisH } from "react-icons/fa";
import Logo from "./assets/image/logo.jpg";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Link from "next/link";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const mouseMenu = useRef<any>();

  const toggleMenu = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };
  const toggleMenu2 = () => {
    toggle2 === false ? setToggle2(true) : setToggle2(false);
  };
  const closeOpenMenus = (e: MouseEvent) => {
    if (
      mouseMenu.current &&
      toggle &&
      !mouseMenu?.current?.contains(e.target as Node)
    ) {
      setToggle(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);
  toggle
    ? disableBodyScroll(document as unknown as HTMLElement)
    : enableBodyScroll(document as unknown as HTMLElement);

  return (
    <Wrapper>
      <WrapperContent>
        <Link href="/home">
          <BackImage src={Logo.src} />
        </Link>
        <MenuContent>
          <MenuContentItem href="/home#ourstory">ABOUT US</MenuContentItem>
          <MenuContentItem href="/home#team">FOUNDING MOLLUSKS</MenuContentItem>
          <MenuContentItem href="/home#faq">FAQs</MenuContentItem>
          {!toggle2 ? (
            <FaEllipsisH onClick={toggleMenu2} />
          ) : (
            <DropGroup ref={mouseMenu}>
              <FaTimes onClick={toggleMenu2} />
              <DropdownMenu2>
                <MenuContent3>
                  <MenuContentItem href="/minting">MINT</MenuContentItem>
                  <MenuContentItem href="/home#utillfaq">
                    UTILITY
                  </MenuContentItem>
                  <MenuContentItem href="/whitelist">WHITELIST</MenuContentItem>
                </MenuContent3>
              </DropdownMenu2>
            </DropGroup>
          )}
        </MenuContent>
        <MobileResponsive>
          <WalletMultiButton />
        </MobileResponsive>
        <ButtonGroup>
          <WalletMultiButton />
          {!toggle ? (
            <FaServer onClick={toggleMenu} />
          ) : (
            <DropGroup ref={mouseMenu}>
              <FaTimes onClick={toggleMenu} />
              <DropdownMenu>
                <MenuContent2>
                  <MenuContentItem
                    href="/home#ourstory"
                    onClick={() => setToggle(false)}
                  >
                    ABOUT US
                  </MenuContentItem>
                  <MenuContentItem
                    href="/home#team"
                    onClick={() => setToggle(false)}
                  >
                    FOUNDING MOLLUSKS
                  </MenuContentItem>
                  <MenuContentItem
                    href="/home#faq"
                    onClick={() => setToggle(false)}
                  >
                    FAQs
                  </MenuContentItem>
                  <MenuContentItem href="/whitelist">WhiteList</MenuContentItem>
                  {/* <MenuContentItem href="/minting">MINT</MenuContentItem>
                  <MenuContentItem href="/home#utillfaq">
                    UTILITY
                  </MenuContentItem>
                  <MenuContentItem href="/whitelist">WHITELIST</MenuContentItem> */}
                </MenuContent2>
              </DropdownMenu>
            </DropGroup>
          )}
        </ButtonGroup>
      </WrapperContent>
    </Wrapper>
  );
};
const Wrapper = styled(Row)`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;
const WrapperContent = styled(Row)`
  max-width: 1300px;
  width: 100%;
  padding: 5px 20px;
  margin: auto;
  justify-content: space-between;
  color: #5b463f;
`;

const BackImage = styled.img`
  width: 100px;
  @media screen and (max-width: 350px) {
    width: 70px;
  }
`;
const MobileResponsive = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MenuContent = styled(Row)`
  font-size: 30px;
  gap: 40px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const MenuContentItem = styled(Link)`
  letter-spacing: 1.5px;
  font-size: 18px;
  color: #5b463f;
  line-height: 1.3em;
  white-space: nowrap;
  text-align: right;
`;

const MenuContent2 = styled(Column)`
  font-size: 16px;
  gap: 50px;
  width: 100%;
`;
const MenuContent3 = styled(Column)`
  font-size: 16px;
  gap: 30px;
  width: 100%;
`;

const ButtonGroup = styled(Row)`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    font-size: 30px;
    gap: 10px;
  }
`;
const DropGroup = styled(Row)`
  position: relative;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 77px;
  background-color: #fdf9e5;
  z-index: 999;
  padding: 50px;
  width: 200px;
  right: -20px;
  height: 100vh;
  backdrop-filter: blur(46px);
  box-shadow: rgb(173 181 189 / 12%) 5px -8px 16px;
  transition: all 0.5s ease-in-out 0s;
`;
const DropdownMenu2 = styled(DropdownMenu)`
  height: 100px;
  padding: 20px;
  top: 50px;
`;
