/* /va a tener la información que va a ir a indexjs. El componente que va a englobar a los componentes que van a usarlo */
import PokemonContext from './index';
import { useState } from 'react';

import apiCall from '../../api';

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    /*creo 2 funciones para llamar la api: getPokemons y getPokemonDetail*/
    const getPokemons = async () => {
        try {
            setIsLoading(true);
            setErrorMessage('');
            setHasError(false);

            /* throw new Error('hey!'); */
            const pokemonsResult = await apiCall({
                url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
            });

            setPokemons(
                pokemonsResult.results
            ); /*.results porque sólo queremos aquellos datos*/
        } catch (error) {
            setPokemons([]);
            setErrorMessage('Something went wrong');
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject('Id is required');
        try {
            /*primero quiero que la información del pokemon anterior que se guardó, desaparezca*/
            setIsLoading(true);
            setErrorMessage('');
            setHasError(false);

            /*  throw new Error('hey!'); */
            const pokemonDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            });
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail({});
            setErrorMessage('Something went wrong');
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <PokemonContext.Provider
            value={{
                getPokemons,
                pokemons,
                getPokemonDetail,
                pokemonDetail,
                isLoading,
                errorMessage,
                hasError,
                /*estas banderas van a ser pasadas a todos los componentes que estén consumiendo el provider o el contexto*/
            }}
        >
            {children} {/* le pasamos la propiedad default "children" */}
        </PokemonContext.Provider>
    );
}
