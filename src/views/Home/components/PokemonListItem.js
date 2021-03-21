import { Link } from 'react-router-dom';

export default function PokemonListItem({ name, url }) {
    const getId = () =>
        /* console.log(url.split('/')[6]);  spliteamos la url para coger el id*/
        url.split('/')[6];
    return (
        <>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}>See details</Link>
            </button>
        </>
    );
}
