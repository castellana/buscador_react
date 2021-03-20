import React from 'react';

export default function PokemonList({ pokemons }) {
    return (
        <div>
            {pokemons?.map((pokemon, index) => (
                <PokemonListItem key={index} {...pokemon} />
            ))}
        </div>
    );
}
