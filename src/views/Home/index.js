import { useContext, useEffect } from 'react';
/* Con useContext buscamos el context que vamos a usar en este componente */
import PokemonContext from '../../context/pokemons';
import PokemonList from './components/PokemonList';
export default function Home() {
    /*     const myContext = useContext(PokemonsContext); */

    /*destructuramos lo  de arriba:*/

    const { getPokemons, pokemons, isLoading } = useContext(PokemonContext);
    /* console.log(myContext); */
    /*  console.log(showAlert); */
    /*  console.log(getPokemons); */
    console.log(pokemons);
    useEffect(() => {
        getPokemons().catch(null);
    }, []); /*solo quiero que se carguen los datos cuando la pagina se cargue*/

    if (isLoading) {
        return <p>Results loading</p>;
    }
    return <PokemonList pokemons={pokemons} />;
}
