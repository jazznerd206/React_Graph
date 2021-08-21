import React from 'react';
import { Element, Shade, Layer, Circle } from './animation.layout';
import IndexSwitch from '../Switches/IndexSwitch.jsx';

function LoadingAnimation(props) {
    return (
        <Element>
            <Layer>
                <Circle id="left-lens">
                    <IndexSwitch index={props.index} chooseIndex={props.chooseIndex}/>
                </Circle>
                <Circle if="right-lens" />
            </Layer>
            <Shade>
                
            </Shade>
        </Element>
    )
}

export default LoadingAnimation;
