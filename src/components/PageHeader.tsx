import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import BackgroundImg from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import styled from 'styled-components';

interface Props {
  image?: IGatsbyImageData;
  title?: string;
}

export const PageHeader: React.FC<Props> = ({ image, title }) => {
  const bgImage = convertToBgImage(image);

  if (!image) return null;

  return (
    <div>
      <Background {...bgImage}>
        <Shadow />
        <Container>{title && <h1>{title}</h1>}</Container>
      </Background>
    </div>
  );
};

const Background: any = styled(BackgroundImg)`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media screen and (min-width: 700px) {
    height: 500px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(360deg, rgb(2 0 36 / 53%) 0%, rgba(0, 0, 0, 0) 36%);
`;

const Container = styled.div`
  max-width: var(--site-width);
  width: 100%;
  padding: 0 20px;
  position: absolute;

  h1,
  h2 {
    color: var(--color-blank);
    text-shadow: 0px 4px 3px #00000080;
    max-width: 800px;
  }
`;
