import React, { createContext, useRef } from 'react';

const PEOPLE_DATA_URL = 'https://swapi.co/api/people/';

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children, ...props }) => {
  const cache = useRef([]);

  async function getCharacters(ids) {
    const { cachedCharacters, missingIds } = ids.reduce(
      (result, id) => {
        const cachedCharacter = cache.current.find((character) => character.id === id);
        if (cachedCharacter) {
          result.cachedCharacters.push(cachedCharacter);
        } else {
          result.missingIds.push(id);
        }
        return result;
      },
      { cachedCharacters: [], missingIds: [] }
    );
    const newCharacters = await Promise.all(
      missingIds.map((id) => {
        const url = `${PEOPLE_DATA_URL}${id}`;
        return fetch(url)
          .then((response) => response.json())
          .then((character) => {
            character.id = id;
            return character;
          });
      })
    );
    cache.current = [...cache.current, ...newCharacters];
    return [...cachedCharacters, ...newCharacters];
  }

  return <CharactersContext.Provider value={{ getCharacters }}>{children}</CharactersContext.Provider>;
};
