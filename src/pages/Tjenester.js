import Nav from "../components/Nav";
import { motion } from "framer-motion";
import styled from "styled-components";
import TjenesterData from "../Data/TjenesterData";
import { Link } from "react-router-dom";
import TjenesterDetails from "../components/TjenesterDetails";
import ScrollTop from "../components/ScrollTop";

const Tjenester = ({ active, setIsActive }) => {
  const tjenesterData = TjenesterData();
  console.log(active);

  const activeHandler = (e) => {
    console.log(e.target);
    const current = tjenesterData.filter(
      (el) => el.title === e.target.dataset.set
    );

    setIsActive(current);
  };
  return (
    <Page>
      <NavTop>
        <Nav className="nav" />
      </NavTop>

      <Container>
        <SideNav>
          <ul>
            {tjenesterData?.map((el) => {
              return (
                <Link to={`/tjenester/${el.url}`}>
                  <li
                    data-set={el.title}
                    key={el.title}
                    onClick={activeHandler}
                    className={
                      active[0]?.title === el.title.toLocaleString()
                        ? "active"
                        : ""
                    }
                  >
                    <img data-set={el.title} src={el.img} alt="" />
                    <p data-set={el.title}>{el.title}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </SideNav>
        <Content>
          {active?.map((el) => {
            return (
              <TjenesterDetails
                key={el.title}
                title={el.title}
                headline1={el.headline1}
                headline2={el.headline2}
                headline3={el.headline3}
                headline4={el.headline4}
                headline5={el.headline5}
                paragraph1={el.paragraph1}
                paragraph2={el.paragraph2}
                paragraph3={el.paragraph3}
                paragraph4={el.paragraph4}
                paragraph5={el.paragraph5}
                imgD={el.imgD}
                imgD2={el.imgD2}
              ></TjenesterDetails>
            );
          })}
        </Content>
      </Container>
      <ScrollTop></ScrollTop>
    </Page>
  );
};

const Content = styled(motion.div)`
  /* width: 70%; */
  margin-left: 25rem;
  display: flex;
  flex-direction: column;
  justify-self: right;
`;

const SideNav = styled(motion.div)`
  max-width: 25rem;
  height: 100%;

  background: white;
  display: flex;
  position: fixed;
  box-shadow: 0 0 1.4rem #d5d3d3;

  img {
    margin-right: 2rem;
    width: 2.5rem;
    align-self: center;
    position: relative;
  }

  li {
    padding-left: 3rem;
    display: flex;
    cursor: pointer;

    p {
      font-size: 1.3rem;
      font-weight: 00;
      padding: 1.4rem;
      position: relative;
    }

    &:hover {
      background: #ebebeb;
    }

    &.active {
      color: blue;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
  }
`;
const NavTop = styled(motion.div)`
  width: 100%;
  height: 9.1rem;
`;
const Container = styled(motion.div)`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 90%;
`;

const Page = styled(motion.div)`
  flex-direction: column;
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;

  /* height: 100vh; */
`;

export default Tjenester;
