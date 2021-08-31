import React, { useState, useEffect } from 'react'
import { AnimContainer } from './loader.layout';
import { Field } from './data/Field';

function Loader() {

    let field = new Field(100, window.innerHeight, window.innerWidth);

    const [ stack, setStack ] = useState([]);

    const generateStack = () => {
        field.create();
    }

    // useful
    useEffect(() => {
        let container = document.getElementById('animation-container');
        container.append(field.domField);
        generateStack();
    }, [])

    // useless
    useEffect(() => {
        console.log(`field`, field)
    }, [field])

    return (
        <AnimContainer id="animation-container">

        </AnimContainer>
    )
}

export default Loader
