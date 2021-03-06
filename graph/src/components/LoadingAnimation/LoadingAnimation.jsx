import React, { useState, useEffect } from 'react';
import { Element, Shade, Layer, Circle, Radio } from './animation.layout';
import ScrollingTicker from './ScrollingTicker';
import { ticker } from '../../utils/fetchAPI';
import { GetPosition } from '../../hooks/GetMouseCoords';

function LoadingAnimation() {
    
    const [ active, setActive ] = useState('');
    const [ current, setCurrent ] = useState([]);
    const coords = GetPosition();
    const height = window.innerHeight;
    const width = window.innerWidth;

    // handles click, you dumb fuck
    const handleClick = data => {
        setActive(data);
        const els = document.getElementsByClassName('radio')
        for (let i = 0; i < els.length; ++i) {
            if (els[i].id === data) {
                setActive(els[i].id);
                els[i].innerHTML = els[i].innerHTML.toUpperCase();
            } else {
                els[i].innerHTML = els[i].innerHTML.toLowerCase();
            }
        }
    }

    // handles initial state
    useEffect(() => {
        setActive('x');
    }, [])

    // handles reveal
    useEffect(() => {
        const shade = document.getElementById('shade');
        if (coords.x >= width - width / 4 && coords.y <= height / 4) {
            shade.style.transform = 'translate(100%, -200%)';
        } else {
            shade.style.transform = 'translate(0%, 0%)';
        }
    }, [ coords, height, width ])

    // handles data grab
    useEffect(() => {
        let f = async () => {
            let temp = await ticker(active);
            setCurrent(temp);
        };
        f();
    }, [ active ])

    return (
        <Element>
            <Layer>
                <Circle id="left-lens">
                    <Radio className="radio" onClick={() => handleClick('gainers')} id="gainers">Gainers</Radio>
                    <Radio className="radio" onClick={() => handleClick('losers')} id="losers">Losers</Radio>
                    <Radio className="radio" onClick={() => handleClick('x')} id="x">Indices</Radio>
                </Circle>
                <Circle id="right-lens">
                    <ScrollingTicker query={active} current={current}/>
                </Circle>
            </Layer>
            <Shade id="shade">
                
            </Shade>
        </Element>
    )
}

export default LoadingAnimation;
