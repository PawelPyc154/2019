import React from 'react';
import styled from 'styled-components';
import { TiSocialFacebook, TiSocialTwitter, TiSocialGooglePlus } from 'react-icons/ti';

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => (
  <FooterContainer>
    <FollowUsIconeContainer>
      <FollowUs>FOLLOW US:</FollowUs>

      <IconeContainer>
        <Icone>
          <TiSocialFacebook />
        </Icone>
        <Icone>
          <TiSocialTwitter />
        </Icone>
        <Icone>
          <TiSocialGooglePlus />
        </Icone>
      </IconeContainer>
    </FollowUsIconeContainer>
    <Logo>Renome</Logo>
    <Copyright>COPYRIGHT 2015 RENOME BY ESTETIQ</Copyright>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #edeef2;
  @media screen and (min-width: 1000px) {
    justify-content: space-around;
    flex-direction: row;
    height: 100px;
  }
`;
const FollowUsIconeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    order: 3;
    flex-direction: row;
  }
`;
const FollowUs = styled.div`
  margin: 30px 0 10px;
  font-size: 1.2em;
  @media screen and (min-width: 1000px) {
    margin: 0;
  }
`;
const IconeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
  }
`;
const Icone = styled.div`
  border: 2px solid #000;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  margin: 5px;
  @media screen and (min-width: 1000px) {
    margin: 0 5px;
  }
`;
const Logo = styled.div`
  margin: 20px 0;
  font-size: 2em;
  @media screen and (min-width: 1000px) {
    margin: 0;
    order: 1;
  }
`;
const Copyright = styled.div`
  margin: 10px 0 30px 0;
  font-size: 1.2em;
  @media screen and (min-width: 1000px) {
    margin: 0;
    order: 2;
  }
`;
