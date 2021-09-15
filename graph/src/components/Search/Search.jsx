import React, { useState, useEffect } from 'react'
import { Row, Label, UserInput, List, Option, Submit, I } from '../../basics/basic.layout.jsx';
import { SearchContainer } from './search.layout.jsx';

function Search({shrink, value, onChange, onClick, setActive, trie, insert, dropdownList}) {
    return (
        <SearchContainer id="search">
            <I className="fas fa-times fa-2x" onClick={()=> shrink()}></I>
            <Row id="search">
                {/* <I className="fas fa-times fa-2x" onClick={()=> shrink()}></I> */}
                <Label id="label"></Label>
                <UserInput 
                    list="symbol"
                    value={value}
                    onChange={(e) => onChange(e)}
                    // onClick={e => onClick(e, value)}
                    trie={trie} 
                    insert={insert}
                />
                <List id="symbol">
                    {dropdownList.map((symbol, index) => {
                        return <Option key={index} value={symbol}>{symbol}</Option>
                    })}
                </List>
                <Submit onClick={e => {onClick(e, value); setActive(true)}}></Submit>
            </Row>
        </SearchContainer>
    )
}

export default Search;
