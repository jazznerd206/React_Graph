import React, { useState, useEffect } from 'react';
import './styles.css';
import { buildURL } from '../../../../../hooks/buildURL';

function Marketnews(props) {

    let s = props.symbol;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (s === '') return;
        fetch(buildURL(s, 'news', 'FINN'))
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
        let titles = document.querySelectorAll('h1');
        titles.forEach(title => {
            title.classList.add('flash');
        })
        setTimeout(() => {
            titles.forEach(title => {
                title.classList.remove('flash');
            })
            }, 3000);
    }, [s])

    if (data.length === 0) {
        return (
            <div>
                <h1>NO NEWS</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>news</h1>
                <div className="news-container" id="style-1">
                    {data.map(article => {
                        let h = article.headline;
                        if (h.length > 50) {
                            h = h.substr(0, 47) + '...';
                        }
                        return (
                        <div key={article.id} className="article">
                            <a href={article.url} target="_blank" rel="noreferrer noopener">
                                <p>{h}</p>
                            </a>
                        </div>
                        )
                    })}
                </div>
    
            </div>
        )
    }
}

export default Marketnews
