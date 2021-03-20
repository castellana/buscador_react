import './App.css';
import FormFunctional from './views/Ejercicios/components/FormFunctional';
import FormClass from './views/Ejercicios/components/FormClass';
/* import Ciclos from './views/Ejercicios/components/Ciclos'; */
import Search from './views/Search';

import Routes from './routes';
import PokemonsProvider from './context/pokemons/Provider';

function App() {
    return (
        <>
            <PokemonsProvider>
                {/*todas las rutas que estén englobadas en este componente, podrán usar este provider*/}
                <Routes />
                <div className='App'>
                    {/*             <FormFunctional />
            <FormClass /> */}
                    {/*  <Ciclos /> */}
                    <Search />
                </div>
            </PokemonsProvider>
        </>
    );
}

export default App;
