import React, { useState, useEffect } from 'react'
import { AnimContainer } from './loader.layout';
import { Field } from './data/Field';

function Loader() {

    let field = new Field(window.innerHeight, window.innerWidth);

    const [ stack, setStack ] = useState([]);

    // useful
    useEffect(() => {
        let container = document.getElementById('animation-container');
        console.log(`field.domField`, container)
        // container.append(field.domField);
    }, [])

    // useless
    // useEffect(() => {
    //     console.log(`field`, field)
    // }, [field])

    return (
        <AnimContainer id="animation-container">

        </AnimContainer>
    )
}

export default Loader
