import { useState } from "react";
import "./AnimalShow.css";
import heart from "./assets/heart.svg";
import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import horse from "./assets/horse.svg";

const mapSvg = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const Animalshow = ({ type }) => {
  const [click, setClick] = useState(0);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClick(click + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div onClick={handleClick} className="show">
      {type}
      <img src={mapSvg[type]} className="img" />
      <img
        src={heart}
        alt="heart"
        className={`heart ${clicked ? "clicked" : ""}`}
        style={{ width: `${10 + 10 * click}px` }}
      />
    </div>
  );
};

export default Animalshow;
