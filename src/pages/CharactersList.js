import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

export default function CharactersList() {
    const { error, loading, data } = useQuery(GET_CHARACTERS);

    console.log({ error, loading, data });

    if (loading) return <div>Spinner</div>;
    if (error) return <div>Something went wrong</div>;

    return (
        <div className="CharacterList">
            {data.characters.results.map((character) => {
                return (
                    <div>
                        <h3>{character.name}</h3>
                        <img src={character.image} />
                    </div>
                );
            })}
        </div>
    );
}
