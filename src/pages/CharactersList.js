import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Card } from "../components/Card";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  console.log({ error, loading, data });

  if (loading)
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="CharacterList container justify-content-center">
      <div className="row row-cols-4">
        {data.characters.results.map((character) => {
          return (
            <Card character={character} key={character.id} />
          );
        })}
      </div>
    </div>
  );
}
