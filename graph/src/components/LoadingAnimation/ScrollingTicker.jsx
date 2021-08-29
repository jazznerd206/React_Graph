import React from 'react';
import { Scroll } from '../../basics/basic.keyframes.jsx';
import { ScrollChild, Title, Change, Price } from './animation.layout.jsx';

function ScrollingTicker(props) {

    return (
        <Scroll>
            {props.query === 'x' && props.current.newStocks !== undefined && props.current.newStocks.map((el, index) => {
                    return (
                        <ScrollChild key={index}>
                            <Title className="name">
                                {el.symbol}
                            </Title>
                            <Change className="delta">
                                {el.changesPercentage}%
                            </Change>
                            <Price className="current">
                                ${el.price}
                            </Price>
                        </ScrollChild>
                    )
                })}
            {props.query === 'gainers' && props.current.newStocks !== undefined && props.current.newStocks.map((el, index) => {
                    return (
                        <ScrollChild key={index}>
                            <Title className="name">
                                {el.ticker}
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
            {props.query === 'losers' && props.current.newStocks !== undefined && props.current.newStocks.map((el, index) => {
                    return (
                        <ScrollChild key={index}>
                            <Title className="name">
                                {el.ticker}
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
            {/* {props.query === 'x' ?
                props.current.newStocks !== undefined && props.current.newStocks.map((el, index) => {
                    return (
                        <ScrollChild key={index}>
                            <Title className="name">
                                {el.symbol.toUpperCase()}
                            </Title>
                            <Change className="delta">
                                {el.changesPercentage}%
                            </Change>
                            <Price className="current">
                                ${el.price}
                            </Price>
                        </ScrollChild>
                    )
                })
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
            } */}
            
        </Scroll>
    )
}

export default ScrollingTicker
