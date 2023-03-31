import React from 'react';
import styled from 'styled-components';

interface Props {
  columns: number;
  children?: React.ReactNode;
  className?: string;
}

const UnstyledGridLayout: React.FC<Props> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const GridLayout = styled(UnstyledGridLayout)`
  display: grid;
  grid-gap: 56px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    grid-template-rows: auto;
  }
`;
