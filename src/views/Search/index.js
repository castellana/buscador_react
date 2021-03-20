import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import './style.css';
import data from '../../data/proyects.json';
import SearchResults from './components/SearchResults';
import axios from 'axios';

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(
        false
    ); /* No la estamos usando de momento, la podríamos borrar */
    const [proyectsData, setProyectsData] = useState(
        data
    ); /* console.log(proyectsData); */
    const [results, setResults] = useState([]);

    /*probamos a usar fecth*/
    /*     useEffect(() => {
        const getUsers = async () => {
            fetch('https://jsonplaceholder.tyicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        };
        getUsers().catch(null);
    }, []); */

    /*probamos a usar axios*/
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            console.log(response);
        };
        getUsers().catch(null);
    }, []);
    /* forma reducida, 2 funciones en 1: */
    const handleCloseSearch = () => {
        setIsAtTop(false); /*sólo queremos que cierre*/
        setResults([]);
    };
    const handleSearchClick = (searchText) => {
        setIsAtTop(
            true
        ); /*cuando hagamos búsqueda, quiero que la pág se vea desde el top*/
        if (proyectsData?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = proyectsData.filter((value) => {
                return (
                    value.title.toLowerCase().includes(searchTextMinus) ||
                    value.tags.toLowerCase().includes(searchTextMinus)
                );
            });
            /*  console.log(filteredData); */
            setResults(filteredData);
        }
    };
    /*forma larga, 2 funciones separadas, que hacen los mismo*/
    /*     const handleSearchClick = () => {
        setIsAtTop(!isAtTop);
    };
    const handleCloseClick = () => {
        setIsAtTop(!isAtTop);
    }; */

    console.log(results);
    return (
        <div className={`search ${isAtTop ? 'search--top' : 'search--center'}`}>
            {/* le agrego clases condicionales */}
            <SearchBox
                /* onSearch={handleSearchClick}
                onClose={handleCloseClick} */

                /* forma reducida, 1 sola funcion */
                onSearch={handleSearchClick}
                onClose={handleCloseSearch}
                isSearching={isAtTop}
            />
            {/* le paso al hijo SearchBox 2 eventos como props */}
            <SearchResults results={results} isSearching={isAtTop} />{' '}
            {/* ponemos esto porque, si está at Top, es porque está buscando */}
        </div>
    );
}
