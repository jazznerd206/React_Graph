import React, { useState, useEffect } from 'react'
import { AnimContainer } from './loader.layout';
import { Field } from './data/Field';

function Loader() {

    let field = new Field(window.innerHeight, window.innerWidth);

    const [ stack, setStack ] = useState([]);

    // useful
    useEffect(() => {
        let container = document.getElementById('animation-container');
        container.append(field.domField);
        field.create(1000);
        field.run();
        // console.log(field.calledEvents);
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
