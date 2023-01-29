import styled from "styled-components";

import { LayoutContainer } from "../../styles/components/LayoutContainer";
import { SectionTitle } from "../../styles/components/Title";
import { device } from "../../styles/utility/media-breakpoints.mjs";

import romb from "../../assets/images/contact/romb.png";
import telegram from "../../assets/svg/telegram.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <ContactSection id="contact">
      <LayoutContainer>
        <SectionTitle>{t(`Contact.Title`)}</SectionTitle>
        <ContactContainer>
          <TitleWrap>
            <ContactTitle>{t(`Contact.Subtitle`)}</ContactTitle>
          </TitleWrap>
          <DetailContainer>
            <DetailWrap>
              <DetailTitle>{t(`Contact.Phone`)}</DetailTitle>
              <Detail href="tel:+48 730 951 369">+48 730 951 369</Detail>
              <Detail href="tel:+48 578 412 576">+48 578 412 576</Detail>
              <Detail href="tel:+48 730 887 965">+48 730 887 965</Detail>
              <Detail href="tel:+48 517 397 643">+48 517 397 643</Detail>
            </DetailWrap>
            <DetailWrap>
              <DetailTitle>{t(`Contact.Social`)}</DetailTitle>
              <Detail href="">Facebook</Detail>
              <Detail href="">Instagram</Detail>
              <Detail href="">Google</Detail>
            </DetailWrap>
            <DetailWrap>
              <DetailTitle>{t(`Contact.Email`)}</DetailTitle>
              <Detail>someessential@gmail.com</Detail>
            </DetailWrap>
          </DetailContainer>
          <LinksContainer>
            <LinkWrap
              onClick={() =>
                (window.location = "https://t.me/essential_estate")
              }
            >
              <LinkLogo>
                <Logo src={telegram} />
              </LinkLogo>
              <LinkName>Telegram</LinkName>
            </LinkWrap>
          </LinksContainer>
          <FormContainer>
            <FormTitle>Fill out the feedback form</FormTitle>
            <Form
              action="mailto:yegorkosyak32@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <Lablel htmlFor="full-name">Full Name</Lablel>
              <TextInput type="text" name="full-name" />
              <Lablel htmlFor="phone">Phone</Lablel>
              <TextInput type="number" name="phone" />
              <Lablel htmlFor="Message">Ask a question</Lablel>
              <Textarea name="message" placeholder="Optional" rows="5" />
              <FormButton type="submit" value="Submit" />
            </Form>
          </FormContainer>
        </ContactContainer>
      </LayoutContainer>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  padding: 30px 0;
  background-color: ${(props) => props.theme.brandWhite};
  @media ${device.laptop} {
    padding: 30px;
  }
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
  grid-template-rows: 1fr 0.5fr 1.5fr;
  @media ${device.laptop} {
    padding: 20px;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 60px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "contact"
      "links";
    grid-template-rows: auto;
    padding: 50px;
    gap: 30px;
  }
  @media ${device.mobileL} {
    padding: 2rem;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: title;
  @media ${device.laptop} {
    padding: 0 5%;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`;

const DetailContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const DetailWrap = styled.div`
  min-width: 45%;
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.p`
  color: ${(props) => props.theme.brandGrey};
  font-size: 1.5rem;
  position: relative;
  font-weight: ${(props) => props.theme.weightLight};
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
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

const Detail = styled.a`
  color: ${(props) => props.theme.brandWhite};
  font-weight: ${(props) => props.theme.weightLight};
  padding: 5px;
  text-decoration: none;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;

const LinksContainer = styled.div`
  grid-area: links;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;
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

const FormContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormTitle = styled.div`
  color: ${(props) => props.theme.brandWhite};
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const TextInput = styled.input`
  margin-bottom: 1rem;
  height: 2rem;
  background-color: ${(props) => props.theme.brandBlack};
  color: ${(props) => props.theme.brandWhite};
  border: 0.5px solid ${(props) => props.theme.brandWhite};
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.brandBlack};
  color: ${(props) => props.theme.brandWhite};
  border-color: ${(props) => props.theme.brandWhite};
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Lablel = styled.label`
  color: ${(props) => props.theme.brandWhite};
  margin-bottom: 0.5rem;
`;

const FormButton = styled.input`
  height: 3rem;
  width: 50%;
  background-color: ${(props) => props.theme.brandWhite};
  margin: 0 auto;
  font-size: 1.5rem;
  @media ${device.tablet} {
    width: 100%;
  }
`;
