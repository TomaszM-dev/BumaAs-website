import Nav from "../components/Nav";
import Home from "./Home";
import WhatWeDo from "./WhatWeDo";
import WhatWeOffer from "./WhatWeOffer";
import Credentials from "./Credentials";
import ContactUs from "./ContactUs";
import FormFaq from "./FormFaq";
import Footer from "../components/Footer";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const MainPage = ({ setIsActive, active }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Nav />
      <Home />
      <WhatWeDo />
      <WhatWeOffer setIsActive={setIsActive} active={active} />
      <Credentials />
      <ContactUs />
      <FormFaq />
    </motion.div>
  );
};

export default MainPage;
