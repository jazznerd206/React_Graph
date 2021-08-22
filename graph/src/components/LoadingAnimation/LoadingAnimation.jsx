import React, { useState, useEffect } from 'react';
import { Element, Shade, Layer, Circle, Radio } from './animation.layout';
import IndexSwitch from '../Switches/IndexSwitch.jsx';
import ScrollingTicker from './ScrollingTicker';
import { ticker } from '../../utils/fetchAPI';

function LoadingAnimation(props) {
    
    const [ active, setActive ] = useState('');
    const [ current, setCurrent ] = useState([]);

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

    useEffect(() => {
        setActive('new');
    }, [])

    useEffect(() => {
        let f = async () => {
            let temp = await ticker(active);
            console.log(`temp from loading animation component => `, temp)
            setCurrent(temp);
        };
        f();
    }, [active])

    return (
        <Element>
            <Layer>
                <Circle id="left-lens">
                    <Radio className="radio" onClick={() => handleClick('gainers')} id="gainers">Gainers</Radio>
                    <Radio className="radio" onClick={() => handleClick('losers')} id="losers">Losers</Radio>
                    <Radio className="radio" onClick={() => handleClick('x')} id="x">Indices</Radio>
                    {/* <IndexSwitch query={props.query} chooseIndex={props.chooseIndex}/> */}
                </Circle>
                <Circle id="right-lens">
                    <ScrollingTicker query={props.query} current={current}/>
                </Circle>
            </Layer>
            <Shade>
                
            </Shade>
        </Element>
    )
}

export default LoadingAnimation;
