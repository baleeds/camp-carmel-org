﻿import styled from 'styled-components';
import { ContentBlock } from './ContentBlock';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const InverseContentBlock: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <ContentBlock background={'none'}>{children}</ContentBlock>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-primary);
  background-image: url('/images/mountains-bg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 64px 0;
  width: 100%;
  background-size: cover;
`;
