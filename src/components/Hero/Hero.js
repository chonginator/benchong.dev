import React from "react"
import styled from "styled-components"

import SilhouetteText from "../SilhouetteText"

const Hero = () => {
    return (
        <HeroSection>
            <SilhouetteText text="Hello, World!"/>
            <p>I'm a frontend developer who loves making useful, beautiful things with code</p>
        </HeroSection>
    )
}

const HeroSection = styled.section`
    /* border: 1px solid red; */
    height: 100vh;
`

export default Hero