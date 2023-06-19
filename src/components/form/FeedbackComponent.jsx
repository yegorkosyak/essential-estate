import styled from "styled-components";
import { useState } from "react";

import { device } from "../../styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";

import { send } from "emailjs-com";

import { SectionTitle } from "../../styles/components/Title";

import BrickWall from "../../assets/images/contact/brickWall.jpg";

export default function FeedbackComponent() {
  const { t } = useTranslation();
  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [hiddenText, setHiddenText] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_cjp14eh", "template_49yxbqm", toSend, "dh680qjjcTiFjyz6L")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setHiddenText(false);
        setToSend({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <FeedbackSection style={{ backgroundImage: `url(${BrickWall})` }}>
      <FeedbackContainer>
        <SectionTitle>{t(`Feedback.Title`)}</SectionTitle>
        <FeedbackGrid>
          <TextContent>
            <Text>{t(`Feedback.FirstText`)}</Text>
            <Text>{t(`Feedback.SecondText`)}</Text>
            <Text>{t(`Feedback.ThirdText`)}</Text>
          </TextContent>
          <Form method="post" enctype="text/plain" onSubmit={onSubmit}>
            <FormTable>
              <tbody>
                <Row>
                  <Cell>
                    <TextInput
                      placeholder={t(`Feedback.FirstName`)}
                      name="firstName"
                      value={toSend.firstName}
                      onChange={handleChange}
                    ></TextInput>
                  </Cell>
                  <Cell>
                    <TextInput
                      placeholder={t(`Feedback.LastName`)}
                      name="lastName"
                      value={toSend.lastName}
                      onChange={handleChange}
                    ></TextInput>
                  </Cell>
                </Row>
                <Row>
                  <Cell>
                    <TextInput
                      placeholder={t(`Feedback.PhoneNumber`)}
                      name="phoneNumber"
                      value={toSend.phoneNumber}
                      onChange={handleChange}
                    ></TextInput>
                  </Cell>
                  <Cell>
                    <TextInput
                      placeholder={t(`Feedback.Email`)}
                      name="email"
                      value={toSend.email}
                      onChange={handleChange}
                    ></TextInput>
                  </Cell>
                </Row>
                <Row>
                  <Cell colSpan="2">
                    <TextAreaInput
                      placeholder={t(`Feedback.Message`)}
                      name="message"
                      value={toSend.message}
                      onChange={handleChange}
                    ></TextAreaInput>
                  </Cell>
                </Row>
              </tbody>
            </FormTable>
            <SubmitButton type="submit" value={t(`Feedback.Submit`)} />
            <SubmittionText hidden={hiddenText}>
              {t(`FormComponent.HiddenText`)}
            </SubmittionText>
          </Form>
        </FeedbackGrid>
      </FeedbackContainer>
    </FeedbackSection>
  );
}

const FeedbackSection = styled.section`
  padding: 2rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeedbackContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeedbackGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  color: ${(props) => props.theme.brandBlack};
  padding: 0 4rem;
  @media ${device.laptopS} {
    padding: 0 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.weightXLight};
  background-color: ${(props) => props.theme.brandBlack};
  color: ${(props) => props.theme.brandWhite};
  border: 2px solid ${(props) => props.theme.brandWhite};
  padding: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.laptopS} {
    margin: 0 2rem;
  }
  @media ${device.laptop} {
    margin: 0 1rem;
  }
`;

const FormTable = styled.table`
  border-spacing: unset;
  background-color: ${(props) => props.theme.brandBlack};
`;

const Row = styled.tr``;

const Cell = styled.td`
  border: 1px solid ${(props) => props.theme.brandWhite};
  padding: unset;
  height: 1px;
`;

const TextInput = styled.input`
  width: calc(100% - 40px);
  padding: 20px;
  border: unset;
  min-height: 100%;
  font-style: italic;
  background-color: unset;
  color: ${(props) => props.theme.brandWhite};
`;

const TextAreaInput = styled.textarea`
  width: calc(100% - 40px);
  padding: 20px;
  resize: none;
  height: 200px;
  border: unset;
  background-color: unset;
  font-style: italic;
  color: ${(props) => props.theme.brandWhite};
`;

const SubmitButton = styled.input`
  width: 100%;
  color: ${(props) => props.theme.brandWhite};
  background-color: ${(props) => props.theme.brandBlack};
  border: 1px solid ${(props) => props.theme.brandWhite};
  padding: 1rem 0;
  border-top: unset;
`;

const SubmittionText = styled.div`
  background-color: ${(props) => props.theme.brandBlack};
  padding: 1rem;
  color: ${(props) => props.theme.brandWhite};
  text-align: center;
`;
