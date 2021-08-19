import React, { useState, useEffect } from 'react';
import { ToggleContainer, Row, Ul, OpenButton, Content, DropList, Link } from '../../basics/basic.layout';
import { theme } from '../../basics/basic.theme'

function ThemeSwitch(props) {


    return (
        <ToggleContainer>
            <Ul>
                <DropList>
                <OpenButton>
                    {props.theme.name}
                </OpenButton>
                <Content>
                    <Link onClick={() => props.switch("light")}>Light</Link>
                    <Link onClick={() => props.switch("dark")}>Dark</Link>
                    <Link onClick={() => props.switch("solar")}>Solar</Link>
                    <Link onClick={() => props.switch("jazz")}>Jazz</Link>
                    <Link onClick={() => props.switch("grayscale")}>Grayscale</Link>
                    <Link onClick={() => props.switch("rainbow")}>Rainbow</Link>
                    <Link onClick={() => props.switch("golf")}>Golf</Link>
                </Content>
                </DropList>
            </Ul>
        </ToggleContainer>
    )
}

export default ThemeSwitch;
