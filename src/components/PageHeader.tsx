import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface Props {
  image?: IGatsbyImageData;
  title?: string;
}

export const PageHeader: React.FC<Props> = ({ image, title }) => {
  if (!image) return null;

  return (
    <Container>
      <GatsbyImage image={image} alt="" className="page-header__image" loading="eager" />
      <div className="page-header__scrim" />
      <div className="page-header__content">{title && <h1>{title}</h1>}</div>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 350px;
  overflow: hidden;
  background-color: var(--color-primary-dark);

  @media screen and (min-width: 700px) {
    height: 500px;
  }

  .page-header__image {
    position: absolute !important;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .page-header__scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgb(8 30 38 / 70%) 0%, rgb(8 30 38 / 0%) 45%);
  }

  .page-header__content {
    position: relative;
    max-width: var(--site-width);
    width: 100%;
    padding: 0 20px;

    h1 {
      color: var(--color-blank);
      max-width: 800px;
    }
  }
`;
