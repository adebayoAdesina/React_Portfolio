import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <StyledContact>
      <ContactLeft>
        <span>Get in touch</span>
        <span>Contact me</span>
      </ContactLeft>
      <ContactRight>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" className="" name="user_name" placeholder="Name" />
          <input
            type="text"
            className=""
            name="user_email"
            placeholder="Email"
          />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Send" className="button" />
        <span>{done && 'Thanks for contacting'}</span>
        </form>
      </ContactRight>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  padding: 0rem 3rem;
  display: flex;
  height: 80vh;
  margin-top: 4rem;
`;
const ContactLeft = styled.div`
  & > * {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

  span:nth-of-type(2) {
    color: var(--orange);
  }
`;
const ContactRight = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    input,
    textarea {
      width: 20rem;
      height: 2rem;
      padding: 0.3rem;
      outline: none;
      border: 2px solid var(--orange);
      border-radius: 8px;
      font-size: 16px;
    }
    textarea {
      height: 4rem;
    }
  }
`;
export default Contact;
