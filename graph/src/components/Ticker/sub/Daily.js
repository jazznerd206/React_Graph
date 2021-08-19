import React, { useEffect, useState } from 'react';
import Open from './partials/Open';
import Closed from './partials/Closed';

function Daily(props) {

    const [ mktOpen, setMktOpen ] = useState(false);
    const [ openAlert, setOpenAlert ] = useState(false);

    const isOpen = () => {
        let d = new Date();
        if (d.getDay() === 0 || d.getDay() === 6) return false;
        let time = d.getHours();
        if (time < 6 || time > 15) {
            setOpenAlert(false);
            return false
        }
        if (time === 6) {
            if (d.getMinutes() < 30) {
                setOpenAlert(true);
                return false
            };
            return true;
        }
        if (time === 14) {
            if (d.getMinutes() < 30) return true;
            setOpenAlert(false);
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (isOpen()) setMktOpen(true);
    }, [])

    return (
        <div className="row mobile-daily">
            {/* {mktOpen !== true && (
                <Closed
                    open={mktOpen}
                    openAlert={openAlert} 
                    data={props.data}
                />
            )}
            {mktOpen === true && (
                <Open 
                    symbol={props.symbol}
                    data={props.data}
                />
            )} */}
        </div>
    )
}

export default Daily
