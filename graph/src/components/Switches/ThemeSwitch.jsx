import React from 'react';
import { themes } from '../../basics/basic.theme';
import { ToggleContainer, Ul, OpenButton, Content, DropList, Link } from '../../basics/basic.layout';

function ThemeSwitch(props) {


    return (
        <ToggleContainer>
            <Ul>
                <DropList>
                <OpenButton>
                    {props.theme.name}
                </OpenButton>
                <Content>
                    {Object.keys(themes).map(t => {
                        return(
                            <Link key={`theme${t}`} onClick={() => props.switch(t)}>{t}</Link>
                        )
                    })}
                </Content>
                </DropList>
            </Ul>
        </ToggleContainer>
    )
}

export default ThemeSwitch;
