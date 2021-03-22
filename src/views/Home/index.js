import { useContext, useEffect } from 'react';
/* Con useContext buscamos el context que vamos a usar en este componente */
import PokemonContext from '../../context/pokemons';
import PokemonList from './components/PokemonList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

export default function Home() {
    /*     const myContext = useContext(PokemonsContext); */

    /*destructuramos lo  de arriba:*/

    const {
        getPokemons,
        pokemons,
        isLoading,
        hasError,
        errorMessage,
    } = useContext(PokemonContext);
    /* console.log(myContext); */
    /*  console.log(showAlert); */
    /*  console.log(getPokemons); */
    console.log(pokemons);
    useEffect(() => {
        getPokemons().catch(null);
    }, []); /*solo quiero que se carguen los datos cuando la pagina se cargue*/

    if (isLoading) {
        /*   return <p>Results loading</p>; */
        return <Loading title='Results are loading...' />;
    }
    return (
        <>
            {hasError ? (
                <ErrorMessage message={errorMessage} />
            ) : (
                <PokemonList pokemons={pokemons} />
            )}
        </>
    );
}
