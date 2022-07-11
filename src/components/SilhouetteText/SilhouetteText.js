import React from "react"
import styled from "styled-components"

import { COLOURS, WEIGHTS } from "../../constants"
const Color = require("color")

const SilhouetteText = ({
    text,
    numLayers=5,
    scaleFactor=.05,
    lightenFactor=.10
}) => {
    const silhouettes = new Array(numLayers).fill(text).map(
        (text, index) =>
            <Silhouette
                className="silhouette"
                key={index}
                index={index}
                numLayers={numLayers}
                scaleFactor={scaleFactor}
                lightenFactor={lightenFactor}
            >
                {text.split(' ').map(word =>
                    <>
                        {word}
                        <br></br>
                    </>    
                )}
            </Silhouette>
    )

    return (
        <SilhouetteWrapper>
            {silhouettes}
        </SilhouetteWrapper>
    )
}

const SilhouetteWrapper = styled.div`
    display: grid;
    justify-content: center;
`

const TEXT_COLOUR = Color.hsl(COLOURS.text)
const Silhouette = styled.div`
    grid-column: 1;
    grid-row: 1;
    font-size: 5rem;
    font-weight: 700; 
    text-align: center;
    z-index: ${p => p.numLayers - p.index};
    transform: scale(${p => 1 - (p.index * p.scaleFactor)});
    color: ${p => p.index === 0 ? COLOURS.text : COLOURS.primary};
    text-shadow:
        0 0 1px ${p => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
        0 1px 0 ${p => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
        -1px 0 0 ${p => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
        0 -1px 0 ${p => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
        1px 0 0 ${p => TEXT_COLOUR.lighten(p.index * p.lightenFactor)};
    text-transform: uppercase;
`

export default SilhouetteText