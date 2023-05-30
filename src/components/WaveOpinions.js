import styled from "styled-components";
import { motion } from "framer-motion";

const WaveOpinions = () => {
  return (
    <WaveSvg
      viewBox="0 0 3206 2273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_44_294)">
        <path
          d="M3185 1230.93C3079.53 -387.642 2552.2 -387.642 1603 1230.93C730.762 2587.02 203.429 2587.02 21.0001 1230.93"
          stroke="#0943F4"
          stroke-width="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_44_294"
          x="0.0090332"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.1125 0 0 0 0 0.0975 0 0 0 0 0.0975 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_44_294"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_44_294"
            result="shape"
          />
        </filter>
      </defs>
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  top: 10rem;

  width: 100%;

  left: 0;
`;
export default WaveOpinions;
