import React from "react";
import MainLogo from "/public/assets/logo.png";
import CartIcon from "/public/assets/cart-icon.png";
import HamburgerIcon from "/public/assets/hamburger-icon.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <MainHeader>
      <MainNav>
        <NavContents>
          <LogoImage src={MainLogo} alt="main-logo" width={154.5} height={50} />
          <RightAside>
            <Link href={"/bookPurchase"}>도서구매</Link>
            <div>
              <Link href={"/myCart"}>장바구니</Link>
            </div>
            <div>|</div>
            <Link href={"/myPage"}>이용권 관리</Link>
            <Link href={"/login"}>로그인/회원가입</Link>
          </RightAside>
          <SmallSize>
            <Link href={"/myCart"} passHref={true}>
              <div>
                <Image src={CartIcon} alt="cart-icon" width={24} height={24} />
              </div>
            </Link>
            <HamburgerImage
              src={HamburgerIcon}
              alt="hamburger-icon"
              width={24}
              height={24}
            />
          </SmallSize>
        </NavContents>
      </MainNav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: fixed;
  z-index: 5;
  padding: 0 20px;
  background-color: #fff;
  transition: all 0.5s ease 0s;
  box-shadow: rgb(0 0 0 / 3%) 0px 30px 30px 0px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

const MainNav = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    width: 100%;
    height: 90px;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 90px;
  }
`;

const NavContents = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled(Image)`
  width: 111.2px;
  height: 36px;
  cursor: pointer;
  backface-visibility: hidden;

  @media (min-width: 768px) {
    width: 154.5px;
    height: 50px;
  }

  @media (min-width: 1200px) {
    width: 154.5px;
    height: 50px;
  }
`;

const RightAside = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    display: none;
  }

  > :nth-child(1) {
    position: relative;
    font-size: 16px;
    color: rgb(51, 51, 51);
    text-decoration: none;
    margin-right: 50px;
  }

  > :nth-child(2) {
    position: relative;

    > a {
      font-size: 16px;
      color: rgb(51, 51, 51); /* props 받아서 스크롤 할때는 하얀색으로 */
      text-decoration: none;
    }
  }

  > :nth-child(3) {
    color: rgb(51, 51, 51); /* color: rgb(255, 255, 255); */
    margin: 0px 50px 2px;
    width: 1.5px;
    align-items: center;
    opacity: 0.5;
    font-weight: bold;
  }

  > :nth-child(4) {
    background: none;
    position: relative;
    font-size: 16px;
    color: rgb(51, 51, 51);
    margin-right: 50px;
  }

  > :nth-child(5) {
    position: relative;
    font-size: 16px;
    color: rgb(51, 51, 51);
  }
`;

const SmallSize = styled.div`
  display: none;

  div {
    position: relative;
    margin-right: 20px;
  }

  @media (max-width: 1199px) {
    display: flex;
  }
`;

const HamburgerImage = styled(Image)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default Header;
