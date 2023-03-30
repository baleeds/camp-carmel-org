import styled from 'styled-components';
import { ContentBlock } from './ContentBlock';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const InverseContentBlock: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <ContentBlock>{children}</ContentBlock>
    </Container>
  );
};

export const Container = styled.div`
  background-color: var(--color-primary);
  background-image: url('images/mountains-bg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 20px;
  width: 100%;
`;
