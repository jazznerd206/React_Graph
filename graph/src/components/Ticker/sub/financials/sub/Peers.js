import React, { useState, useEffect } from 'react';
import { buildURL } from '../../../../../hooks/buildURL';
import './styles.css';

function Peers(props) {

    let s = props.symbol;
    const [peerList, setPeerList] = useState([]);

    useEffect(() => {
        fetch(buildURL(s, 'peers', 'FINN'))
            .then((res) => res.json())
            .then(data => {
                // console.log(`data`, data)
                setPeerList(data);
            })
    }, [s])

    return (
        <div className="peerList-container">
            <h1>market equivalents</h1>
            <ul>
                {peerList.map((comp, index) => (
                    <li
                        key={index}
                        value={comp}
                        onClick={e => props.peerClick(e, comp)}
                    >
                        {comp}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Peers
