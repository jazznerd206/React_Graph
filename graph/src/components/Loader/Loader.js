import React, { useState, useEffect } from 'react'
import { AnimContainer } from './loader.layout';
import { Field } from './data/Field';

function Loader({theme, units, reveal, remove, id}) {

    let field = new Field(window.innerHeight, window.innerWidth, theme, reveal, remove);

    const [ stack, setStack ] = useState([]);

    // useful
    useEffect(() => {
        let container = document.getElementById('animation-container');
        container.append(field.domField);
        field.create(units);
        field.run();
    }, [])

    return (
        <div id={id}>
            <AnimContainer id="animation-container" units={units} reveal={reveal} remove={remove} >
            </AnimContainer>
        </div>
    )
}

export default Loader
