import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useContext } from 'react';
import PokemonContext from '../../context/pokemons';
import PokeStats from './components/PokeStats';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

export default function PokeDetail() {
    const {
        id,
    } = useParams(); /*cómo usar el destructuring aquí? vemos ejemplo en: https://reactrouter.com/web/guides/quick-start (al final de la pág)*/
    /* console.log(id); */
    const {
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        hasError,
        errorMessage,
    } = useContext(PokemonContext);
    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);
    /*  console.log(pokemonDetail); */
    if (isLoading) {
        /* return <p>Pokemon is loading...</p>; */
        return <Loading title='Pokemon is loading...' />;
    }
    return (
        <div>
            {hasError ? (
                <ErrorMessage message={errorMessage} />
            ) : (
                <>
                    <h3 style={{ marginTop: 15, marginBottom: 15 }}>
                        General Information
                    </h3>
                    {/* nos fijamos en Network qué datos obtenemos de cada pokemon en la consola y elegimos algunos */}
                    <p>{`Name: ${pokemonDetail?.name}`}</p>
                    <p>{`Weight: ${pokemonDetail?.weight} kgs`}</p>
                    <p>{`Height: ${pokemonDetail?.height} cms`}</p>
                    <div>
                        <h3 style={{ marginTop: 30, marginBottom: 15 }}>
                            Abilities
                        </h3>

                        <PokeStats stats={pokemonDetail?.stats ?? []} />
                    </div>
                </>
            )}
        </div>
    );
}
