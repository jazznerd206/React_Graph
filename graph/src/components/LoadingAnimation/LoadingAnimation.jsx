import React from 'react';
import { Element, Shade, Layer, Circle } from './animation.layout';

function LoadingAnimation() {
    return (
        <Element>
            <Layer>
                <Circle id="left-lens" />
                <Circle if="right-lens" />
            </Layer>
            <Shade>
                
            </Shade>
        </Element>
    )
}

export default LoadingAnimation;
