import React, { useRef } from 'react';
import styled from 'styled-components';
import useLayeredMouseParallaxAnimation from '../../hooks/useLayeredMouseParallax';
import { COLOURS, WEIGHTS, QUERIES } from '../../constants';

const Color = require('color');

const SilhouetteText = ({
  text,
  numLayers = 7,
  scaleFactor = 0.05,
  lightenFactor = 0.1,
}) => {
  const silhouetteRefs = useRef([]);

  useLayeredMouseParallaxAnimation({
    refs: silhouetteRefs,
    limitX: 50,
    limitY: 50,
    ease: 0.1,
  });

  const silhouettes = Array(numLayers)
    .fill()
    .map((_, index) => (
      <Silhouette
        ref={(el) => (silhouetteRefs.current[index] = el)}
        key={index}
        index={index}
        zIndex={numLayers - index}
        scaleFactor={scaleFactor}
        lightenFactor={lightenFactor}
      >
        {text.split(' ').map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </Silhouette>
    ));

  return <SilhouetteWrapper>{silhouettes}</SilhouetteWrapper>;
};

const SilhouetteWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const TEXT_COLOUR = Color.hsl(COLOURS.text);
const Silhouette = styled.div`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  font-size: 5rem;
  font-weight: ${WEIGHTS.bold};
  text-align: center;
  z-index: ${(p) => -p.index};
  will-change: transform;
  transform: scale(${(p) => 1 - p.index * p.scaleFactor});
  color: ${(p) => (p.index === 0 ? COLOURS.text : COLOURS.primary)};
  text-shadow: 0 0 1px ${(p) => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
    0 1px 0 ${(p) => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
    -1px 0 0 ${(p) => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
    0 -1px 0 ${(p) => TEXT_COLOUR.lighten(p.index * p.lightenFactor)},
    1px 0 0 ${(p) => TEXT_COLOUR.lighten(p.index * p.lightenFactor)};
  text-transform: uppercase;

  @media ${QUERIES.tabletAndUp} {
    font-size: 7rem;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 9rem;
    transform: translate(calc(var(--x, 0) * 1px), calc(var(--y, 0) * 1px))
      scale(${(p) => 1 - p.index * p.scaleFactor});
  }
`;

export default SilhouetteText;
