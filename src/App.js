import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import styled from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
