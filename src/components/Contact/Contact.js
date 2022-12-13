import React from 'react';
import styled from 'styled-components';

import { QUERIES } from '../../constants';

const Contact = () => {
  return (
    <section>
      <ContactTitle>Let's Build Something Together!</ContactTitle>
      <Email href="mailto:benchong1999@yahoo.com.au" target="_blank">
        benchong1999@yahoo.com.au
      </Email>
    </section>
  );
};

const ContactTitle = styled.h2`
  text-align: center;
`;

const Email = styled.a`
  font-size: 1.5rem;
  display: block;
  text-align: center;
  color: unset;

  @media ${QUERIES.tabletAndUp} {
    font-size: 2rem;
  }
`;

export default Contact;
