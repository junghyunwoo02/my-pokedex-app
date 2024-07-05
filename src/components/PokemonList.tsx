"use client";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { fetchInitData } from "@/apis/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchdata = async () => {
      const data = await fetchInitData();
      setPokemons(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto">
      {pokemons.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="pokemon p-4 border-2 border-[#6081d6] rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center"
            >
              <Link href={`/pokemon/${[pokemon.id]}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={125}
                  height={125}
                  className="mb-2"
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호 : {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
