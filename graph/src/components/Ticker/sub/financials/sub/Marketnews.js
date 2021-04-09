import React, { useState, useEffect } from 'react';
import './styles.css';

function Marketnews(props) {

    const [data, setData] = useState([]);

    const buildDate = () => {
        let d = new Date();
        let year = d.getFullYear().toString();
        let month = d.getMonth().toString();
        let day = d.getDay().toString();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        let d2 = new Date(d.getMonth() - 1);
        let year2 = d.getFullYear().toString();
        let month2 = d.getMonth().toString();
        let day2 = d.getDay().toString();
        if (month2.length < 2) month2 = '0' + month2;
        if (day2.length < 2) day2 = '0' + day2;
        let to = year + '-' + month + '-' + day;
        let from = year2 + '-' + month2 + '-' + day2;
        let dateArray = [to, from];
        return dateArray;
    }

    const buildURL = (ticker) => {
        let dates = buildDate();
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
                // console.log(`data`, data);
                setData(data);
            })
    }
    useEffect(() => {
        if (props.symbol === '') return;
        fetchURL();
    }, [props.symbol])
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

export default Marketnews
