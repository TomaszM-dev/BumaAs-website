import kledning from "../img/tjenester/kledning.png";
import lage_gulv from "../img/tjenester/lage_gulv.webp";
import maling_fasade from "../img/tjenester/maling_fasade.webp";
import maling_tre_fasade from "../img/tjenester/maling_tre_fasade.png";
import innvendig_maling from "../img/tjenester/innvendig_maling.webp";
import maling_vinduer from "../img/tjenester/maling_vinduer.webp";
import snekkerarbeid from "../img/tjenester/snekkerarbeid.webp";
import sparkling_tapetsering from "../img/tjenester/sparkling_tapetsering.webp";
import utskifting_takrenner from "../img/tjenester/utskifting_takrenner.webp";
import utskifting_vinduer_dorer from "../img/tjenester/utskifting_vinduer_dorer.webp";
import rehabilitering_maling from "../img/tjenester/rehabilitering_maling.png";
import rigge_stillas from "../img/tjenester/rigge_stillas.png";
import vask_fasade from "../img/tjenester/vask_fasade.png";

export const OutdoorData = () => {
  return [
    {
      img: vask_fasade,
      title: "Vask av fasade og tak",
      category: ["outdoor"],
    },
    {
      img: utskifting_vinduer_dorer,
      title: "Utskifting av vinduer og dorer",
      category: ["indoor", "outdoor"],
    },
    {
      img: utskifting_takrenner,
      title: "Utskifting av takrenner",
      category: ["outdoor"],
    },
    {
      img: sparkling_tapetsering,
      title: "Sparkling og taptesering",
      category: ["indoor"],
    },
    {
      img: rigge_stillas,
      title: "Rigge stillas og bruk av lift",
      category: ["outdoor"],
    },
    {
      img: rehabilitering_maling,
      title: "Rehabilitering av trappeoppganger",
      category: ["indoor"],
    },
    {
      img: snekkerarbeid,
      title: "Snekkerarbeid",
      category: ["indoor"],
    },
    {
      img: maling_vinduer,
      title: "Maling av vinduer og dorer",
      category: ["outdoor", "indoor"],
    },
    {
      img: kledning,
      title: "Bytte av kledning",
      category: ["indoor"],
    },
    {
      img: lage_gulv,
      title: "Lage gulv",
      category: ["indoor"],
    },
    {
      img: maling_fasade,
      title: "Maling av fasade",
      category: ["outdoor"],
    },
    {
      img: innvendig_maling,
      title: "Innvendig maling",
      category: ["outdoor", "indoor"],
    },
    {
      img: maling_tre_fasade,
      title: "Maling av trefasade",
      category: ["outdoor"],
    },
  ];
};
