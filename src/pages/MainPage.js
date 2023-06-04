import Nav from "../components/Nav";
import Home from "./Home";
import WhatWeDo from "./WhatWeDo";
import WhatWeOffer from "./WhatWeOffer";
import Credentials from "./Credentials";
import ContactUs from "./ContactUs";
import Form from "../components/Form";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <Nav />
      <Home />
      <WhatWeDo />
      <WhatWeOffer />
      <Credentials />
      <ContactUs />
      <Form />
      <Footer />
    </>
  );
};

export default MainPage;
