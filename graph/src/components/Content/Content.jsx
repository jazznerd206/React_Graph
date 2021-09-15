import React, { useState, useEffect } from 'react';
import { Page, Row, UserInput, List, Option, Label, Submit, I } from '../../basics/basic.layout';
import { Radio } from '../LoadingAnimation/animation.layout';
import { Upper, Lower, Data, Close, FlexiBoi, GrabBar, FlexiTitle } from './content.layout';
import Search from '../Search/Search';
import News from '../News/News';
import Graph from '../Graph/Graph';
import CompanyData from '../CompanyData/CompanyData';


function Content(props) {

    const [ value, setValue ] = useState('');
    const [ active, setActive ] = useState(false);
    const [ dropdownList, setDropdownList ] = useState([]);
    const [ current, setCurrent ] = useState({});
    const [ d, setD ] = useState([]);
    const [ currentSymbol, setCurrentSynbol ] = useState('');

    const onChange = event => {
        event.preventDefault();
        let searchResults = props.search(props.trie, event.target.value);
        if (searchResults === undefined) {
            setDropdownList(['Loading...']);
        } else {
            setDropdownList(searchResults);
        }
        setValue(event.target.value);
        return;
    }

    const grow = query => {
        console.log(query);
        let _N = document.getElementById('news');
        let _NB = document.getElementById('news-bar');
        let _G = document.getElementById('graph');
        let _GB = document.getElementById('idx-bar');
        let _S = document.getElementById('search');
        let _SB = document.getElementById('search-bar');
        let _SHRINK = document.getElementById('shrink')
        switch(query) {
            case 'news':
                _N.style.flexGrow = 1;
                _G.style.flexGrow = 0;
                _S.style.flexGrow = 0;
                _GB.style.display = 'none';
                _SB.style.display = 'none';
                break;
            case 'graph':
                _N.style.flexGrow = 0;
                _G.style.flexGrow = 1;
                _S.style.flexGrow = 0;
                _NB.style.display = 'none';
                _SB.style.display = 'none';
                break;
            case 'search':
                _S.style.flexGrow = 1;
                _N.style.flexGrow = 0;
                _G.style.flexGrow = 0;
                _NB.style.display = 'none';
                _GB.style.display = 'none';
                break;
            default:
                break;
        }
    }

    const shrink = () => {
        console.log('shrink');
        let _N = document.getElementById('news');
        _N.style.flexGrow = 0;
        let _NB = document.getElementById('news-bar');
        _NB.style.display = 'flex';
        let _G = document.getElementById('graph');
        _G.style.flexGrow = 0;
        let _GB = document.getElementById('idx-bar');
        _GB.style.display = 'flex';
        let _S = document.getElementById('search');
        _S.style.flexGrow = 0;
        let _SB = document.getElementById('search-bar');
        _SB.style.display = 'flex';
    }

    useEffect(() => {
        const upper = document.getElementById('upper');
        const lower = document.getElementById('lower');
        const label = document.getElementById('label');
        const button = document.getElementById('close');
        const companyData = document.getElementById('company');
        if (active === true) {
            label.innerHTML = '';
            companyData.style.display = 'flex';
            companyData.style.flexGrow = 1;
            lower.style.display = 'flex';
            lower.style.flexGrow = 1;
            upper.style.flexGrow = 0;
            upper.style.display = 'none';
            button.style.display = 'flex';
        } else if (active === false) {
            // label.innerHTML = ' stock symbol -> ';
            button.style.display = 'none';
            lower.style.flexGrow = 0;
            upper.style.display = 'flex';
            upper.style.flexGrow = 1;
            companyData.style.flexGrow = 0;
            companyData.style.display = 'none';
        }
    }, [active])

    useEffect(() => {
        setD(props.indices);
    }, [props.indices])

    return (
        <Page id="content">
            <Upper id="upper">
                <FlexiBoi id='graphs'>
                    <GrabBar
                        id='search-bar'
                        onClick={() => grow('search')}
                    >
                        <FlexiTitle>Search</FlexiTitle>
                        {/* <I className="fas fa-times fa-2x" onClick={()=> shrink()}></I> */}
                    </GrabBar>
                    <Search 
                        shrink={shrink}
                        value={value}
                        onChange={onChange}
                        onClick={props.onClick}
                        trie={props.trie}
                        insert={props.insert}
                        dropdownList={dropdownList}
                        setActive={setActive}
                    />
                    <GrabBar
                        id='news-bar'
                        onClick={() => grow('news')}
                    >
                        <FlexiTitle>News</FlexiTitle>

                    </GrabBar>
                    <News  
                        stories={props.stories} 
                        shrink={shrink}
                    />
                    <GrabBar
                        id="idx-bar"   
                        onClick={() => grow('graph')}
                    >
                        <FlexiTitle>Indices</FlexiTitle>
                    </GrabBar>
                    <Graph 
                        id="graph" 
                        indices={props.indices} 
                        shrink={shrink}
                    />
                </FlexiBoi>
                {window.localStorage.getItem('ticker') !== null ? <I className="fas fa-chevron-up fa-3x" onClick={() => setActive(true)}></I> : null}
            </Upper>
            <Lower id="lower">
                <Data>
                    <Close>
                        <I id="close" onClick={() => {setActive(false); setValue('');}} className="fas fa-times fa-2x"></I>
                    </Close>
                    <CompanyData 
                        data={props.data}
                        theme={props.theme}
                    />
                </Data>
            </Lower>
        </Page>
    )
}

export default Content;