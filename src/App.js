import GlobalStyle from "./components/GlobalStyle";

import OmUss from "./pages/OmUss";
import Blogg from "./pages/Blogg";
import Prosjekter from "./pages/Prosjekter";
import MainPage from "./pages/MainPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Tjenester from "./pages/Tjenester";
import { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./animations";

import TjenesterData from "./Data/TjenesterData";

function App() {
  const tjenesterData = TjenesterData();
  const [active, setIsActive] = useState([tjenesterData[0]]);

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <MainPage setIsActive={setIsActive} active={active} />
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
        <Route
          path="/prosjekter/:id"
          exact
          element={<Prosjekter></Prosjekter>}
        />
        <Route
          path="/tjenester"
          exact
          element={
            <Tjenester setIsActive={setIsActive} active={active}></Tjenester>
          }
        />
        <Route
          path="/tjenester/:id"
          exact
          element={
            <Tjenester setIsActive={setIsActive} active={active}></Tjenester>
          }
        />
        <Route
          path="/omuss"
          exact
          element={
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <OmUss></OmUss>
            </motion.div>
          }
        />
        <Route path="/blogg" exact element={<Blogg></Blogg>} />
        <Route path="/blogg/:id" exact element={<Blogg></Blogg>} />
      </Routes>
    </div>
  );
}

export default App;
