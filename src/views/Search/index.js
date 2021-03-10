import { useState } from 'react';
import SearchBox from './components/SearchBox';
import './style.css';
import data from '../../data/proyects.json';
import SearchResults from './components/SearchResults';

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const [proyectsData, setProyectsData] = useState(
        data
    ); /* No la estamos usando de momento, la podríamos borrar */
    /* console.log(proyectsData); */
    const [results, setResults] = useState([]);

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
