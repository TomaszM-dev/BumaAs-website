import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import WhatWeOffer from "./pages/WhatWeOffer";
import Credentials from "./pages/Credentials";
import ContactUs from "./pages/ContactUs";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OmUss from "./pages/OmUss";
import Blogg from "./pages/Blogg";
import Prosjekter from "./pages/Prosjekter";
// import { motion } from "framer-motion";
// import styled from "styled-components";

function App({ renderBg }) {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Home></Home>
              <WhatWeDo></WhatWeDo>
              <WhatWeOffer></WhatWeOffer>
              <Credentials></Credentials>
              <ContactUs></ContactUs>
            </>
          }
        />
        <Route path="/prosjekter" exact element={<Prosjekter></Prosjekter>} />
        <Route path="/omuss" exact element={<OmUss></OmUss>} />
        <Route path="/blogg" exact element={<Blogg></Blogg>} />
      </Routes>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
