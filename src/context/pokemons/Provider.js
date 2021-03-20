/* /va a tener la información que va a ir a indexjs. El componente que va a englobar a los componentes que van a usarlo */
import PokemonContext from './index';
import { useState } from 'react';

import apiCall from '../../api';

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const getPokemons = async () => {
        try {
            const pokemonsResult = await apiCall({
                url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
            });

            setPokemons(
                pokemonsResult.results
            ); /*.results porque sólo queremos aquellos datos*/
        } catch (error) {
            setPokemons([]);
        }
    };
    return (
        <PokemonContext.Provider value={{ getPokemons, pokemons }}>
            {children} {/* le pasamos la propiedad default "children" */}
        </PokemonContext.Provider>
    );
}
