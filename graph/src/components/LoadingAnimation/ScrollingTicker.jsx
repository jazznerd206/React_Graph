import React, { useState, useEffect } from 'react';
import { Scroll } from '../../basics/basic.keyframes.jsx';
import { ScrollChild, Title, Change, Price } from './animation.layout.jsx';

function ScrollingTicker(props) {

    console.log('props.query :>> ', props.query);

    return (
        <Scroll>
            {props.current.newStocks !== undefined && props.current.newStocks.map(el => {
                return (
                    <ScrollChild>
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
            })}
        </Scroll>
    )
}

export default ScrollingTicker
