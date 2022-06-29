import React from "react"
import styled from "styled-components"

import Button from "../Button"

const Header = () => {
    return (
        <HeaderWrapper>
            <Button href='/resume.pdf'>Resume</Button>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-end;
`

export default Header