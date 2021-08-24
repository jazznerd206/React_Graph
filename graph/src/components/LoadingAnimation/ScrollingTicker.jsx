import React from 'react';
import { Scroll } from '../../basics/basic.keyframes.jsx';
import { ScrollChild, Title, Change, Price } from './animation.layout.jsx';

function ScrollingTicker(props) {
    return (
        <Scroll>
            {props.query === 'x' ?
                <div>this</div>
                :
                props.current.newStocks !== undefined && props.current.newStocks.map((el, index) => {
                    return (
                        <ScrollChild key={index}>
                            <Title className="name">
                                {el.ticker.toUpperCase()}
                            </Title>
                            <Change className="delta">
                                {el.changes}%
                            </Change>
                            <Price className="current">
                                ${el.price}
                            </Price>
                        </ScrollChild>
                    )
                })
            }
            
        </Scroll>
    )
}

export default ScrollingTicker
