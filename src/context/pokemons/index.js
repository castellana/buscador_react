import { createContext } from 'react';

/* Creamos un contexto donde vamos a guardar información y métodos que van a estar disponibles a lo largo del proyecto */
const PokemonContext = createContext('pokemons');
export default PokemonContext;
