import Nav from "../components/Nav";
import Home from "./Home";
import WhatWeDo from "./WhatWeDo";
import WhatWeOffer from "./WhatWeOffer";
import Credentials from "./Credentials";
import ContactUs from "./ContactUs";
import FormFaq from "./FormFaq";
import Footer from "../components/Footer";

const MainPage = ({ setIsActive, active }) => {
  return (
    <>
      <Nav />
      <Home />
      <WhatWeDo />
      <WhatWeOffer setIsActive={setIsActive} active={active} />
      <Credentials />
      <ContactUs />
      <FormFaq />
    </>
  );
};

export default MainPage;
