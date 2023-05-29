import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import WhatWeOffer from "./pages/WhatWeOffer";
import Credentials from "./pages/Credentials";
import ContactUs from "./pages/ContactUs";
// import { motion } from "framer-motion";
// import styled from "styled-components";

function App({ renderBg }) {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
      <WhatWeDo />
      <WhatWeOffer />
      <Credentials />
      <ContactUs />
    </div>
  );
}

export default App;
