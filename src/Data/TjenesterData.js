import kledning from "../img/tjenester/kledning.png";

import lage_gulv from "../img/tjenester/lage_gulv.png";

import maling_fasade from "../img/tjenester/maling_fasade.png";
import maling_tre_fasade from "../img/tjenester/maling_tre_fasade.png";
// import innvendig_maling from "../img/tjenester/innvendig_maling.webp";
import innvendig_maling from "../img/tjenester/innvendig_maling.png";

import maling_vinduer from "../img/tjenester/maling_vinduer.png";
// import snekkerarbeid from "../img/tjenester/snekkerarbeid.webp";
import snekkerarbeid from "../img/tjenester/snekkerarbeid.png";
// import sparkling_tapetsering from "../img/tjenester/sparkling_tapetsering.webp";
import sparkling_tapetsering from "../img/tjenester/sparkling_tapetsering.png";
// import utskifting_takrenner from "../img/tjenester/utskifting_takrenner.webp";
import utskifting_takrenner from "../img/tjenester/utskifting_takrenner.png";
// import utskifting_vinduer_dorer from "../img/tjenester/utskifting_vinduer_dorer.webp";
import utskifting_vinduer_dorer from "../img/tjenester/utskifting_vinduer_dorer.png";
import rehabilitering_maling from "../img/tjenester/rehabilitering_maling.png";
import rigge_stillas from "../img/tjenester/rigge_stillas.png";
import vask_fasade from "../img/tjenester/vask_fasade.png";

export const TjenesterData = () => {
  return [
    {
      img: vask_fasade,
      title: "Vask av fasade og tak",
      category: ["outdoor"],
      url: "vask-fasade",
    },
    {
      img: utskifting_vinduer_dorer,
      title: "Utskifting av vinduer og dorer",
      category: ["indoor", "outdoor"],
      url: "ustkiftin_vinduer_dorer",
    },
    {
      img: utskifting_takrenner,
      title: "Utskifting av takrenner",
      url: "utskifting-av-takrenner",
      category: ["outdoor"],
    },
    {
      img: sparkling_tapetsering,
      title: "Sparkling og taptesering",
      category: ["indoor"],
      url: "sparkling-og-taptesering",
    },
    {
      img: rigge_stillas,
      title: "Rigge stillas og bruk av lift",
      category: ["outdoor"],
      url: "rigge-stillas",
    },
    {
      img: rehabilitering_maling,
      title: "Rehabilitering av trappeoppganger",
      category: ["indoor"],
      url: "reabilitering-av-trappeoppganger",
    },
    {
      img: snekkerarbeid,
      title: "Snekkerarbeid",
      category: ["indoor"],
      url: "snekkerarbeid",
    },
    {
      img: maling_vinduer,
      title: "Maling av vinduer og dorer",
      category: ["outdoor", "indoor"],
      url: "maling-av-vindurer-og-dorer",
    },
    {
      img: kledning,
      title: "Bytte av kledning",
      category: ["indoor"],
      url: "bytte-av-kledning",
    },
    {
      img: lage_gulv,
      title: "Lage gulv",
      category: ["indoor"],
      url: "lage-gulv",
    },
    {
      img: maling_fasade,
      title: "Maling av fasade",
      category: ["outdoor"],
      url: "maling-av-fasade",
    },
    {
      img: innvendig_maling,
      title: "Innvendig maling",
      category: ["outdoor", "indoor"],
      url: "innvendig-maling",
    },
    {
      img: maling_tre_fasade,
      title: "Maling av trefasade",
      category: ["outdoor"],
      url: "maling-av-trefasade",
    },
  ];
};

export default TjenesterData;
