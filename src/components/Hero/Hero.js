import React from "react"
import styled from "styled-components"

import SilhouetteText from "../SilhouetteText"

const Hero = () => {
    return (
        <HeroSection>
            <SilhouetteText text="Hello, World!"/>
            <SubHeading>I'm Ben Chong, a frontend developer who loves making useful, beautiful things with code.</SubHeading>
        </HeroSection>
    )
}

const HeroSection = styled.section`
    height: 100vh;
`

const SubHeading = styled.p`
    font-size: 1.125rem;
    text-align: center;
`

export default Hero