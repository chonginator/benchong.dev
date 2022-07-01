import React from "react"
import styled from "styled-components"

import { COLOURS, WEIGHTS } from "../../constants"

const Button = ({ href, children }) => {
    return (
        <ButtonWrapper
            href={href}
            target="_blank"
            as={href ? 'a' : 'button'}>
            { children }
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    font-size: 1.25rem;
    font-weight: ${WEIGHTS.bold};
    color: ${COLOURS.primary};
    background-color: ${COLOURS.highlight};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.5em 1em;
    text-decoration: none;

    :hover,
    :focus {
        opacity: 0.9;
    }
`

export default Button