import React, { useState, useEffect } from 'react';
import './styles.css';
import { ohShitWhatUpItsDatDate } from '../../../../../hooks/getDate';

function Marketnews(props) {

    const [data, setData] = useState([]);

    const buildURL = (ticker) => {
        let dates = ohShitWhatUpItsDatDate();
        // console.log(`dates`, dates)
        let fetchInfo = "https://finnhub.io/api/v1/company-news?symbol=";
        fetchInfo += ticker;
        fetchInfo += "&from" + dates[1];
        fetchInfo += "&to" + dates[0];
        fetchInfo += "&token=";
        fetchInfo += process.env.REACT_APP_FINNKEY;
        return fetchInfo;
    }

    const fetchURL = () => {
        let URL = buildURL(props.symbol);
        fetch(`${URL}`)
            .then((res) => res.json())
            .then(data => {
                // console.log(`data: `, data)
                setData(data);
            })
    }
    useEffect(() => {
        if (props.symbol === '') return;
        fetchURL();
        let titles = document.querySelectorAll('h1');
        titles.forEach(title => {
            title.classList.add('flash');
        })
        setTimeout(() => {
            titles.forEach(title => {
                title.classList.remove('flash');
            })
            }, 3000);
    }, [props.symbol])

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
