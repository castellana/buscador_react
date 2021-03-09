import { useState, useEffect } from 'react';

const CiclosFunctional = () => {
    const [name, setName] = useState('');

    /**como si fuera un componentDidupdate */
    useEffect(() => {
        console.log('didUpdate effect');
    });

    useEffect(() => {
        console.log('didMount effect');

        return () => {
            console.log('willUnmount');
        };
    }, []);

    return (
        <div>
            <input
                value={name}
                onChange={({ target: { value } }) => setName(value)}
            />
        </div>
    );
};
