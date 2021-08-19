import React, { useState, useEffect } from 'react';
import { Page, Container, Row, Ul, OpenButton, Content, DropList, Link } from '../../basics/basic.layout';
import { theme } from '../../basics/basic.theme'
import { DropDownLi } from '../../basics/basic.layout';


function LandingPage({name}) {


    return (
        <Page>
            <Row>
                <h1>{name}</h1>
            </Row>
        </Page>
    )
}

export default LandingPage;
