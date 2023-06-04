import GlobalStyle from "./components/GlobalStyle";

import OmUss from "./pages/OmUss";
import Blogg from "./pages/Blogg";
import Prosjekter from "./pages/Prosjekter";
import MainPage from "./pages/MainPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { motion } from "framer-motion";
// import styled from "styled-components";

function App({ renderBg }) {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <MainPage />
            </>
          }
        />
        <Route
          path="/:id"
          exact
          element={
            <>
              <MainPage />
            </>
          }
        />
        <Route path="/prosjekter" exact element={<Prosjekter></Prosjekter>} />
        <Route path="/omuss" exact element={<OmUss></OmUss>} />
        <Route path="/blogg" exact element={<Blogg></Blogg>} />
      </Routes>
    </div>
  );
}

export default App;
