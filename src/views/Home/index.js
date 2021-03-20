import { useContext, useEffect } from 'react';
/* Con useContext buscamos el context que vamos a usar en este componente */
import PokemonContext from '../../context/pokemons';
export default function Home() {
    /*     const myContext = useContext(PokemonsContext); */

    /*destructuramos lo  de arriba:*/

    const { getPokemons, pokemons } = useContext(PokemonContext);
    /* console.log(myContext); */
    /*  console.log(showAlert); */
    /*  console.log(getPokemons); */
    console.log(pokemons);
    useEffect(() => {
        getPokemons().catch(null);
    }, []); /*solo quiero que se carguen los datos cuando la pagina se cargue*/
    return <div>Home</div>;
}
