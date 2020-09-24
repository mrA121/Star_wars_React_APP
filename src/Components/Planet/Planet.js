import React from "react";

function Planet({ name, population }) {
  const getSize = (number) => {
    if (number > 2000000000) {
      return {
        fontSize: "5rem",
      };
    } else if (number > 100000000) {
      return {
        fontSize: "4rem",
      };
    } else if (number > 6000000) {
      return {
        fontSize: "3rem",
      };
    } else {
      return {
        fontSize: "1rem",
      };
    }
  };

  return (
    <div className="card blue-grey darken-2 col s12">
      <div className="card-content white-text">
        <h4 style={getSize(population)}>{name}</h4>
        <p>Population: {population}</p>
        <div className="right-align">Planet</div>
      </div>
    </div>
  );
}

export default Planet;