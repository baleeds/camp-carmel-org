import styled from 'styled-components';
import { ContentBlock } from './ContentBlock';
import React from 'react';

interface Props {
  id?: string;
  background?: 'mountains' | 'none';
  children: React.ReactNode;
}

export const InverseContentBlock: React.FC<Props> = ({ id, background = 'mountains', children }) => {
  return (
    <Container id={id} style={{ backgroundImage: backgroundImageMap[background] }}>
      <ContentBlock background={'none'}>{children}</ContentBlock>
    </Container>
  );
};

const backgroundImageMap = {
  mountains: "url('/images/mountains-bg.svg')",
  none: 'unset',
};

const Container = styled.div`
  background-color: var(--color-primary);
  background-image: url('/images/mountains-bg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 64px 0;
  width: 100%;
  background-size: cover;

  :focus-visible {
    outline-color: #f3d9b8;
  }

  // Spotlights on the dark band drop their card, so their copy needs to be light.
  // '&&' doubles the class so this always beats ImageSpotlight's own heading color.
  && .image-spotlight__content {
    h2,
    h3,
    p,
    li {
      color: var(--color-blank);
    }

    p,
    li {
      color: rgb(255 255 255 / 85%);
    }

    a {
      color: #f3d9b8;
    }
  }

  && .image-spotlight__action a {
    color: #f3d9b8;

    &:hover {
      color: var(--color-blank);
    }
  }
`;
