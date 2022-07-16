import React from "react"
import styled from "styled-components"

import SilhouetteText from "../SilhouetteText"

const Hero = () => {
    return (
        <section>
            <SilhouetteText text="Hello, World!"/>
            <SubHeading>I'm Ben Chong, a frontend developer who loves making useful, beautiful things with code.</SubHeading>
        </section>
    )
}

const SubHeading = styled.p`
    text-align: center;
`

export default Hero