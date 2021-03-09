import { Component } from 'react';

class FormClass extends Component {
    state = {
        email2: '',
        passwort2: '',
    };

    handleEmailChange = (event) => {
        /* console.log(event.target.value); */
        this.setState({ email2: event.target.value });
    };

    handlePasswortChange = (event) => {
        this.setState({ passwort2: event.target.value });
    };

    handleFormSubmit = (event) => {
        console.log('submit');
        event.preventDefault(); /*para evitar que se actualice la página cuando damos enter*/
        alert(`User: ${this.state.email2}, passwort: ${this.state.passwort2}`);
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h2>Log in</h2>
                <label htmlFor=''>
                    Email2
                    <input
                        type='email'
                        value={this.state.email2}
                        onChange={this.handleEmailChange}
                    />
                </label>
                <label htmlFor=''>
                    Passwort2
                    <input
                        type='passwort'
                        value={this.state.passwort2}
                        onChange={this.handlePasswortChange}
                    />
                </label>
                <button type='submit'>Enter</button>
            </form>
        );
    }
}

export default FormClass;
