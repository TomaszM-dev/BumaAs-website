import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Filter = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  workData,
}) => {
  useEffect(() => {
    const filtered = workData.filter((el) =>
      el.category.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <Links>
      <button
        className={activeCategory === "outdoor" ? "active" : ""}
        onClick={() => setActiveCategory("outdoor")}
      >
        Outdoor Work
      </button>
      <button
        className={activeCategory === "indoor" ? "active" : ""}
        onClick={() => setActiveCategory("indoor")}
      >
        Indoor Work
      </button>
    </Links>
  );
};

const Links = styled(motion.div)`
  display: flex;
  width: 55%;
  margin: 0 auto;

  button {
    margin-top: 3rem;
    border-radius: 0px;
    color: black;
    font-size: 1.8rem;
    width: 50%;
    background: transparent;

    &.active {
      color: blue;
      border-bottom: 1px solid blue;
    }
  }
`;

export default Filter;
