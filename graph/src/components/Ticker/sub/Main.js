import React from 'react'

function Main(props) {

    console.log('main')

//     console.log(`props from main page: \n`, props)
//     // console.log(`props.data2.description`, props.data2.description)

//     let x = props.data.exchange === undefined ? 'No Data' : props.data.exchange;
//     let exc = x.substr(0, x.indexOf(' ')) === 'NEW' ? 'NYSE' : x.substr(0, x.indexOf(' '));
    
//     return (
//         <div className="main-handle">
//             <div className="row">
//                 <h1>{props.data.FMPdata.companyName}</h1>
//             </div>
//             <div className="row spacer">
//                 <div className="box logo">
//                 </div>
//                 <div className="box">
//                     <div className="row logo">
//                         <img src={props.data.logo}></img>
//                     </div>
//                     <div className="row exchange">
//                         <span>{exc}</span>
//                     </div>
//                     <div className="row sector">
//                         <span>{props.data.finnhubIndustry}</span>
//                     </div>
//                 </div>
//                 <div className="box profile">
//                     <div className="row">
//                         {props.data2 === undefined ? null :
//                             <span>{props.data2.description}</span>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Main


// import React from 'react'

// function Main(props) {
    
    return (
        <div className="main-handle">
            <div className="row">
                <h1>{props.data.FMPdata.companyName}</h1>
            </div>
            <div className="row spacer">
                <div className="box">
                    <div className="row logo">
                        <a href={props.data.FMPdata.website} rel="noreferrer" target="_blank">
                            <img src={props.data.FMPdata.image}></img>
                        </a>
                    </div>
                    <div className="row address">
                        <span>{props.data.FMPdata.city}, {props.data.FMPdata.state.substring(0,2)}, {props.data.FMPdata.country}</span>
                    </div>
                    <div className="row exchange">
                        <span>{props.data.FMPdata.exchangeShortName}</span>
                    </div>
                    <div className="row sector">
                        <span>{props.data.FMPdata.industry}</span>
                    </div>
                </div>
                <div className="box profile">
                    <div className="row">
                        {props.data.FMPdata === undefined ? null :
                            <span>{props.data.FMPdata.description}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;