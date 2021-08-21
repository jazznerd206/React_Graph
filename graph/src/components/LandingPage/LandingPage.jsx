import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Page, Row, HiddenBonus, I, LandingTitle } from '../../basics/basic.layout';
import { Flash } from '../../basics/basic.keyframes';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { theme } from '../../basics/basic.theme';
import { DropDownLi } from '../../basics/basic.layout';


function LandingPage(props) {

    console.log('props :>> ', props);

    return (
        <Page>
            <HiddenBonus>
                <LoadingAnimation index={props.index} chooseIndex={props.chooseIndex} />
            </HiddenBonus>
            <Row>
                <LandingTitle>charge your knowledge</LandingTitle>
                <I className="fas fa-chevron-right fa-1x"></I>
            </Row>
            <Row>
                <LandingTitle>stock with intent</LandingTitle>
                <Flash>
                    <Link style={{color: "inherit"}} to="#stocker">
                        <I className="fas fa-chevron-down fa-1x"></I>
                    </Link>
                </Flash>
            </Row>
        </Page>
    )
}

export default LandingPage;
