import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  image: IGatsbyImageData | undefined;
}

export const Hero: React.FC<Props> = ({ title, subTitle, image, children }) => {
  if (!image) return null;

  return (
    <Container>
      <GatsbyImage image={image} alt="" className="hero__image" loading="eager" />
      <div className="hero__scrim" />
      <div className="hero__content">
        {subTitle && <p className="eyebrow">{subTitle}</p>}
        <h1>{title}</h1>
        <div className="hero__actions">{children}</div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 560px;
  height: 82vh;
  max-height: 760px;
  overflow: hidden;
  background-color: var(--color-primary-dark);

  .hero__image {
    position: absolute !important;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hero__scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgb(8 30 38 / 85%) 0%,
      rgb(8 30 38 / 55%) 35%,
      rgb(8 30 38 / 0%) 70%
    );
  }

  .hero__content {
    position: relative;
    max-width: var(--site-width);
    width: 100%;
    padding: 0 20px 64px;
  }

  .eyebrow {
    color: #f3d9b8;
  }

  h1 {
    color: var(--color-blank);
    max-width: 760px;
    margin: 0 0 32px;
    font-size: clamp(36px, 3.4vw + 20px, 64px);
  }

  :focus-visible {
    outline-color: #f3d9b8;
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media screen and (max-width: 550px) {
    min-height: 520px;
    height: 88vh;

    .hero__content {
      padding-bottom: 40px;
    }
  }
`;
