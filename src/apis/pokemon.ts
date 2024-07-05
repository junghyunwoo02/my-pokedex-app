import { Pokemon } from "@/types/pokemon";

export const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);

  return response.json();
};

export const fetchInitData = async () => {
  const response = await fetch("api/pokemons");
  const data: Pokemon[] = await response.json();
  return data;
};
fetchInitData();
