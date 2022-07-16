import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (
        <Wrapper>
            <Links>
                <Link
                    href="https://github.com/chonginator"
                    target="_blank">GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/benhchong"
                    target="_blank"
                >
                    LinkedIn
                </Link>
            </Links>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    display: flex;
    justify-content: flex-end;
    gap: 1em;
`

const Links = styled.div`
    display: flex;
    gap: 1em;
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    
    :hover {
        text-decoration: revert;
    }
`

export default Footer