import React from "react"
import styled from "styled-components"

import Button from "../Button"

const Header = () => {
    return (
        <Wrapper>
            <Button href='/resume.pdf'>Resume</Button>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    justify-content: flex-end;
`

export default Header