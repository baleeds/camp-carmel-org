import * as React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const TextSpotlight: React.FC<Props> = ({ title, children }) => (
  <Container>
    <div className="text-spotlight--title">
      <h1>{title}</h1>
    </div>
    <div className="text-spotlight--text">
      <p>{children}</p>
    </div>
  </Container>
);

const Container = styled.div`
  padding: 124px 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }

  .text-spotlight--title {
    max-width: 390px;
    margin-right: 24px;

    h1 {
      margin-top: 0;
    }
  }

  .text-spotlight--text {
    max-width: 525px;

    p {
      margin-top: 0;
    }
  }
`;
