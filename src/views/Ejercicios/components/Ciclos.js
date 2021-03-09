import { Component } from 'react';

class Ciclos extends Component {
    /* 1. el constructor puede estar o no estar*/
    contructor(props) {
        /* super(props); */
        console.log('Constructor');
        this.state = {
            name: '',
        };
    }

    /*2. DidMount, para APIs*/
    componentDidMount() {
        console.log('did Mount');
    }

    /*3. DID UPDATE, se ejecuta cuando actualizamos el componente. Pej cada letra que escribamos en el input*/
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did Update');
    }

    /*4. Should Component Update: si es falso, le estamos diciendo: nunca permitas actualizarte. O sea, no nos dejará escribir nada. Podemos usarlo cuando queramos evitar que un componente se renderice muchas veces, sin deber hacerlo*/
    shouldComponentUpdate() {
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.name}
                    onChange={({ target: { value } }) =>
                        this.setState({ name: value })
                    }
                />
            </div>
        );
    }
}

export default Ciclos;
