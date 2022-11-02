import styled from "styled-components";

import { LayoutContainer } from "../../styles/components/LayoutContainer";
import { SectionTitle } from "../../styles/components/Title";

import romb from "../../assets/images/contact/romb.png";
import telegram from "../../assets/svg/telegram.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

export default function Contact() {
  return (
    <ContactSection>
      <LayoutContainer>
        <SectionTitle>Contact</SectionTitle>
        <ContactContainer>
          <TitleWrap>
            <ContactTitle>
              Let us help you
              <br /> find the space of dream
            </ContactTitle>
          </TitleWrap>
          <DetailContainer>
            <DetailWrap>
              <DetailTitle>Phone</DetailTitle>
              <Detail>+48 730 951 369</Detail>
              <Detail>+48 578 412 576</Detail>
              <Detail>+48 730 887 965</Detail>
              <Detail>+48 517 397 643</Detail>
            </DetailWrap>
            <DetailWrap>
              <DetailTitle>Social Links</DetailTitle>
              <Detail>Facebook</Detail>
              <Detail>Instagram</Detail>
              <Detail>Linkedin</Detail>
              <Detail>Google</Detail>
            </DetailWrap>
            <DetailWrap>
              <DetailTitle>Email</DetailTitle>
              <Detail>someessential@gmail.com</Detail>
            </DetailWrap>
          </DetailContainer>
          <LinksContainer>
            <LinkWrap>
              <LinkLogo>
                <Logo src={telegram} />
              </LinkLogo>
              <LinkName>Telegram</LinkName>
            </LinkWrap>
            <LinkWrap>
              <LinkLogo>
                <Logo src={whatsapp} />
              </LinkLogo>
              <LinkName>Whatsapp</LinkName>
            </LinkWrap>
          </LinksContainer>
        </ContactContainer>
      </LayoutContainer>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  padding: 30px 0;
  background-color: ${(props) => props.theme.brandWhite};
`;

const ContactContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.brandBlack};
  border-radius: 40px;
  display: grid;
  grid-template-areas:
    "title contact"
    "links contact";
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr 0.5fr;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: title;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
`;

const DetailContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const DetailWrap = styled.div`
  min-width: 45%;
`;

const DetailTitle = styled.p`
  color: ${(props) => props.theme.brandGrey};
  font-size: 1.5rem;
  position: relative;
  font-weight: ${(props) => props.theme.weightLight};
  &:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 15px;
    background: no-repeat url(${romb});
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Detail = styled.p`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  font-size: 1.3rem;
`;

const LinksContainer = styled.div`
  grid-area: links;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const LinkLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.brandWhite};
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LinkName = styled.p`
  color: ${(props) => props.theme.brandWhite};
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weightLight};
`;
