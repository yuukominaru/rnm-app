import React from "react";

export const Card = ({ character }) => {
  return (
    <div className="col">
      <div className="card m-3">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h3>{character.name}</h3>
        </div>
      </div>
    </div>
  );
};
