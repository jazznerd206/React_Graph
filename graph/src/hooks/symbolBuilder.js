import React, { useState, useEffect } from 'react';
import { sBuilder } from '../utils/fetchAPI';

export const SymbolBuilder = () => {

    const [ symbols, setSymbols ] = useState([]);

    useEffect(() => {
        const f = async () => {
            const data = await sBuilder();
            const d = []
            for (let i = 0; i < data.data.length; ++i) {
                const item = data.data[i];
                if (item.exchange.includes("New York") || item.exchange.includes('Nasdaq')) {
                    d.push(item.symbol);
                }
            }
            setSymbols(d);
        }
        f();
    }, [])
    
    return symbols;

}