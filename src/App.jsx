import React, { useState } from "react";
import "./App.css";
import Animalshow from "./Animalshow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};
const App = () => {
  const [Animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...Animals, getRandomAnimal()]);
  };
  const renderedAnimal = Animals.map((animal, index) => {
    return <Animalshow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <div className="btn">
        {" "}
        <button onClick={handleClick}>click here</button>
      </div>

      <div className="animal">{renderedAnimal}</div>
    </div>
  );
};

export default App;
