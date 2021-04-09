import React, { useState, useEffect } from 'react';
import './styles.css';

function Marketnews(props) {
    console.log(`props MARKET NEWS`, props);
    let d = new Date();
    let today = d.getFullYear() + d.getDate();
    console.log(`today MARKET NEWS`, today)
    return (
        <div>
            <h1>NEWS</h1>
            
        </div>
    )
}

export default Marketnews
