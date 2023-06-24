import { motion } from "framer-motion";
import styled from "styled-components";
import logoBlue from "../img/utilities/buma-logo-blue.png";
import hero from "../img/utilities/buma-hero.avif";

const Form = () => {
  return (
    <FormStyle id="form">
      <img src={logoBlue} alt="" />
      <form>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="name" id="name" placeholder="Navn*:" />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Email*:" />
        </div>
        <div className="form-group">
          <label htmlFor="telephone"></label>
          <input type="number" id="telephone" placeholder="Telefon:" />
        </div>
        <div className="form-group">
          <label htmlFor="description"></label>
          <textarea
            name="description"
            id="description"
            cols="14"
            rows="7"
            placeholder="Beskrivelse*"
          ></textarea>
          <button>send</button>
        </div>
      </form>
    </FormStyle>
  );
};

const FormStyle = styled(motion.div)`
  width: 50%;
  border-radius: 10px;
  background: #ffffffb3;
  z-index: 10;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 952px) {
    margin-bottom: 10rem;
    height: 55rem;
  }

  @media (max-width: 752px) {
    width: 60%;
  }

  @media (max-width: 652px) {
    width: 70%;
  }

  @media (max-width: 452px) {
    width: 80%;
  }

  img {
    width: 20rem;
    margin-top: 1.4rem;
  }

  form {
    width: 75%;
    margin: 0 auto;

    input {
      font-size: 1.3rem;
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
