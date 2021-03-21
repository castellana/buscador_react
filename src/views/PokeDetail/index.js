import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useContext } from 'react';
import PokemonContext from '../../context/pokemons';

export default function PokeDetail() {
    const {
        id,
    } = useParams(); /*cómo usar el destructuring aquí? vemos ejemplo en: https://reactrouter.com/web/guides/quick-start (al final de la pág)*/
    /* console.log(id); */
    const { getPokemonDetail, pokemonDetail, isLoading } = useContext(
        PokemonContext
    );
    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);
    /*  console.log(pokemonDetail); */
    if (isLoading) {
        return <p>Pokemon is loading...</p>;
    }
    return (
        <div>
            {/* nos fijamos en qué datos obtenemos de cada pokemon en la consola y ejegimos algunos */}
            <p>{`Name: ${pokemonDetail?.name}`}</p>
            <p>{`Weight: ${pokemonDetail?.weight} kgs`}</p>
            <p>{`Height: ${pokemonDetail?.height} cms`}</p>
        </div>
    );
}
