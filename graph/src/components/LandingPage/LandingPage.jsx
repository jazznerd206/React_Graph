import React, { useState, useEffect } from 'react';
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
                <LoadingAnimation />
            </HiddenBonus>
            <Row>
                <LandingTitle>charge your knowledge</LandingTitle>
                <Flash>
                    <I className="fas fa-chevron-right fa-1x"></I>
                </Flash>
            </Row>
            <Row>
                <LandingTitle>stock with intent</LandingTitle>
                <Flash>
                    <I className="fas fa-chevron-down fa-1x"></I>
                </Flash>
            </Row>
        </Page>
    )
}

export default LandingPage;
