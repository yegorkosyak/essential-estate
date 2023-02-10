import styled from "styled-components";
import { useState } from "react";

import { device } from "../../styles/utility/media-breakpoints.mjs";

import { useTranslation } from "react-i18next";

import { send } from "emailjs-com";

export default function FormComponent() {
  const { t } = useTranslation();
  const [toSend, setToSend] = useState({
    full_name: "",
    phone_number: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ntio5jp", "template_49yxbqm", toSend, "dh680qjjcTiFjyz6L")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <FormSection id="form">
      <FormContainer>
        <FormTitle>Fill out the feedback form</FormTitle>
        <Form method="post" enctype="text/plain" onSubmit={onSubmit}>
          <Lablel htmlFor="full-name">Full Name</Lablel>
          <TopTextInput
            type="text"
            name="full_name"
            id="full-name"
            value={toSend.full_name}
            onChange={handleChange}
          />
          <Lablel htmlFor="phone-number">Phone</Lablel>
          <TextInput
            type="number"
            name="phone_number"
            id="phone-number"
            value={toSend.phone_number}
            onChange={handleChange}
          />
          <Lablel htmlFor="message">Ask a question</Lablel>
          <Textarea
            name="message"
            id="message"
            placeholder="Optional"
            rows="10"
            value={toSend.message}
            onChange={handleChange}
          />
          <FormButton type="submit" value="Submit" />
        </Form>
      </FormContainer>
    </FormSection>
  );
}

const FormSection = styled.section`
  padding: 5rem 0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormTitle = styled.h2`
  color: ${(props) => props.theme.brandWhite};
  margin: 2rem 0;
  font-size: 1.6rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media ${device.laptop} {
    width: 70%;
  }
  @media ${device.tablet} {
    width: 90%;
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

const TopTextInput = styled(TextInput)`
  border-top-left-radius: 2vh;
  border-top-right-radius: 2vh;
`;

const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.brandBlack};
  color: ${(props) => props.theme.brandWhite};
  border-color: ${(props) => props.theme.brandWhite};
  padding: 0.5rem;
  border-bottom-left-radius: 2vh;
  border-bottom-right-radius: 2vh;
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
  border-bottom-left-radius: 2vh;
  border-bottom-right-radius: 2vh;
  border: 1px solid white;
  @media ${device.laptop} {
    width: 70%;
  }
`;
