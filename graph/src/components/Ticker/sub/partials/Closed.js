import React, { useState, useEffect } from 'react'

function Closed(props) {

    const [ time, setTime ] = useState('');

    let start = new Date();
    start.setHours(6, 30, 0); // 630 am PST
    const pad = num => {
        return ("0" + parseInt(num)).substr(-2);
    }
    const tick = () => {
        var now = new Date();
        if (now > start) {
          start.setDate(start.getDate() + 1);
        }
        var remain = ((start - now) / 1000);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
        setTime(mm + ":" + ss)
        setTimeout(tick, 1000);
    }

    useEffect(() => {
        if (props.openAlert === true) {
            tick();
        }
    }, [props.openAlert])
    
    if (props.openAlert === true) {
        return (
            <div className="row closed">
                <div className="box current">
                    <span>Markets open in:</span>
                    <h1>{time}</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row closed">
                <div className="box current">
                    <span>Markets closed</span>
                </div>
            </div>
        )
    }
}

export default Closed
