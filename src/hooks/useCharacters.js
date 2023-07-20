import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
          air_date
          episode
        }
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  return {
    error,
    loading,
    data,
  };
};
