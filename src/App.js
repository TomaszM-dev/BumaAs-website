import GlobalStyle from "./components/GlobalStyle";
import OmUss from "./pages/OmUss";
import Blogg from "./pages/Blogg";
import Prosjekter from "./pages/Prosjekter";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Tjenester from "./pages/Tjenester";
import { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./animations";
import TjenesterData from "./Data/TjenesterData";
import KontactUs from "./pages/KontactUs";
import Referencer from "./pages/Referenser";

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
        <Route path="/omuss/:id" exact element={<OmUss></OmUss>} />
        <Route path="/referenser" exact element={<Referencer />} />
        <Route path="/referenser/:id" exact element={<Referencer />} />
        <Route path="/blogg" exact element={<Blogg></Blogg>} />
        <Route path="/blogg/:id" exact element={<Blogg></Blogg>} />
        <Route path="/kontact-us" exact element={<KontactUs></KontactUs>} />
      </Routes>
    </div>
  );
}

export default App;
