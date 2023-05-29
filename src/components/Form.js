import { motion } from "framer-motion";
import styled from "styled-components";
import logoBlue from "../img/buma-logo-blue.png";

import hero from "../img/buma-hero.avif";

const Form = () => {
  return (
    <Container>
      <FormStyle>
        <img src={logoBlue} alt="" />
        <form>
          <div className="form-group">
            <label for="name"></label>
            <input type="name" id="name" placeholder="Navn*:" />
          </div>
          <div className="form-group">
            <label for="email"></label>
            <input type="email" id="email" placeholder="Email*:" />
          </div>
          <div className="form-group">
            <label for="telephone"></label>
            <input type="number" id="telephone" placeholder="Telefon:" />
          </div>
          <div className="form-group">
            <label for="description"></label>
            <textarea
              name="description"
              id="description"
              cols="18"
              rows="10"
              placeholder="Beskrivelse*"
            ></textarea>
            <button>send</button>
          </div>
        </form>
      </FormStyle>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 20rem;

  position: relative;
  object-fit: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    opacity: 0.8;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${hero}) no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }

  &:after {
    box-shadow: inset 0px 3000px 4px rgba(59, 57, 154, 0.631);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const FormStyle = styled(motion.div)`
  width: 46%;
  margin-top: 18rem;
  border-radius: 10px;
  background: #ffffffb3;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  img {
    width: 20rem;
    margin-top: 1.4rem;
  }

  form {
    width: 70%;
    margin: 0 auto;

    input {
      font-size: 1.5rem;
      margin-top: 1.5rem;
      width: 100%;
      border: none;
      border-radius: 5px;
      padding: 1.8rem 0.5rem;
      display: flex;
      align-items: center;

      &::placeholder {
        font-size: 1.5rem;
      }
    }

    textarea {
      border: none;
      margin-top: 2rem;
      font-family: inherit;
      font-weight: 500;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 1.5rem;
      width: 100%;
    }

    button {
      width: 100%;
      font-size: 1.7rem;
      font-weight: 500;
      margin-bottom: 2rem;
      border-radius: 5px;
    }
  }
`;

export default Form;
