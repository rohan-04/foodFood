import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  Indian: [
    {
      name: "Palak paneer",
      rating: "5/5"
    },
    {
      name: "Crisp papadum",
      rating: "4.3/5"
    },
    {
      name: "Chana masala",
      rating: "4/5"
    },
    {
      name: "Chicken tikka masala",
      rating: "3.9/5"
    },
    {
      name: "Fish curry",
      rating: "3/5"
    }
  ],
  German: [
    {
      name: " Labskaus",
      rating: "4.4/5"
    },
    {
      name: "Sausages",
      rating: "3.7/5"
    },
    {
      name: "Schnitzel",
      rating: "3.7/5"
    },
    {
      name: "Rouladen",
      rating: "3.5/5"
    },
    {
      name: "Maultaschen",
      rating: "3/5"
    }
  ],
  Korean: [
    {
      name: "Kimchi",
      rating: "5/5"
    },
    {
      name: "Bibimbap",
      rating: "4.3/5"
    },
    {
      name: "Red rice cakes (tteokbokki)",
      rating: "4/5"
    },
    {
      name: "Bulgogi",
      rating: "3.9/5"
    },
    {
      name: "Korean stew (jjigae)",
      rating: "3/5"
    }
  ],
  Vietnamese: [
    {
      name: "Pho",
      rating: "4/5"
    },
    {
      name: "Cha ca",
      rating: "4.3/5"
    },
    {
      name: "Banh xeo",
      rating: "3.6/5"
    },
    {
      name: " Ga tan",
      rating: "3.9/5"
    },
    {
      name: "Bun bo nam bo",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedCuisine, setSelectedCuisine] = useState("Indian");

  function onClickHandler(cuisine) {
    setSelectedCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1>🍜 foodFood </h1>
      <small>Delicious Types of Cuisine You Should Try</small>
      <div>
        {Object.keys(foodDB).map((cuisine) => {
          return (
            <button
              key={cuisine}
              onClick={() => onClickHandler(cuisine)}
              className="btn"
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <hr />

      <div className="container">
        <ul>
          {foodDB[selectedCuisine].map((cuisine) => {
            return (
              <li key={cuisine.name}>
                <div className="lrg">{cuisine.name}</div>
                <div className="sml">{cuisine.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
