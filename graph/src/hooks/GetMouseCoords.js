import { useState, useEffect } from 'react'


export const GetPosition = () => {
    
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const [ z, setZ ] = useState(0);

    useEffect(() => {
        document.addEventListener('mousemove', event => {
            setX(event.clientX);
            setY(event.clientY);
            setZ(0);
        })
    })

    return { x, y, z };

}
