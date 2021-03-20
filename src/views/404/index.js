import PokemonContext from '../../context/pokemons';
import { useContext } from 'react';
export default function FourOFour() {
    const { pokemons } = useContext(PokemonContext);
    console.log(pokemons);
    return (
        <div>
            <p> Sorry, I can´t find this page</p>
        </div>
    );
}
