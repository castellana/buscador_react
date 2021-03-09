import { useState } from 'react';

function FormFunctional() {
    const [email, setEmail] = useState('');
    const [passwort, setPasswort] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const handleEmailChange = (event) => {
        /* console.log(event.target.value); */
        setEmail(event.target.value);
    };
    console.log(email);

    /*   o también haciendo destructuring: */
    /*     const handlePasswortChange = ({ target: { value } }) => {
        setPasswort(value);
    }; */
    /*esta misma frase podemos reducirla quitando los paréntesis:*/
    const handlePasswortChange = ({ target: { value } }) => setPasswort(value);

    const handleFormSubmit = (event) => {
        console.log('submit');
        event.preventDefault(); /*para evitar que se actualice la página cuando damos enter*/
        alert(`User: ${email}, passwort: ${passwort}`);
    };

    const handleLoginClick = () => {
        setIsLogged(true);
    };

    return (
        <div className='formFunctional'>
            <form onSubmit={handleFormSubmit}>
                <h2>Log in</h2>
                <label htmlFor=''>
                    Email
                    <input
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label htmlFor=''>
                    Passwort
                    <input
                        type='passwort'
                        value={passwort}
                        onChange={handlePasswortChange}
                    />
                </label>
                <button type='submit'>Enter</button>

                <button onClick={handleLoginClick}>Iniciar sesión</button>
                {/* conditional con operador ternario: */}
                {isLogged ? <h2>Logeado exitosamente</h2> : undefined}

                {/* conditional usando && */}
                {isLogged && <h2>Logeado exitosamente</h2>}

                {/*también podríamos usar && para renderizar otro componente: */}
                {/*  {isLogged && <MyComponent />} */}
            </form>
        </div>
    );
}

export default FormFunctional;
