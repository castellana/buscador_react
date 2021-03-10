import { useState } from 'react';
import './style.css';

export default function SearchBox({ onSearch, onClose, isSearching }) {
    /*SearchBox recibe los props de su padre*/
    const [searchText, setSearchText] = useState('');

    /*quiero que el botón close me cierre la ventana pero además me limpie el input:*/
    const handleSearchClick = () => {
        setSearchText('');
        onClose();
    };
    return (
        <div className='search-box'>
            <h2 className='search-box-title'>Buscador de proyectos</h2>
            <div className='search-box-buttons'>
                <label>
                    <input
                        value={searchText}
                        onChange={({ target: { value } }) =>
                            setSearchText(value)
                        }
                        className='search-box-input'
                    />
                </label>
                <button
                    onClick={() => onSearch(searchText)}
                    disabled={!searchText.length}
                >
                    Buscar
                </button>
                {isSearching && (
                    <button
                        onClick={handleSearchClick}
                        disabled={!searchText.length}
                    >
                        Cerrar
                    </button>
                )}
            </div>
        </div>
    );
}
