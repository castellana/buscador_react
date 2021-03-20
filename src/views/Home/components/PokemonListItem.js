import React from 'react';

export default function PokemonListItem({ name, url }) {
    return (
        <>
            <p>{name}</p>
            <button>See details</button>
        </>
    );
}
