﻿import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Tile } from './Tile';

interface Props {
  image?: IGatsbyImageData;
  title: string;
  description: string;
  action: React.ReactNode;
  orientation: 'left' | 'right';
}

export const ImageSpotlight: React.FC<Props> = ({ image, title, description, action, orientation }) => {
  const isSmall = useMediaQuery('(max-width: 700px)');

  if (!image) return <div>No image</div>;

  if (isSmall)
    return (
      <div style={{ marginBottom: 48 }}>
        <Tile image={image} title={title} description={description} action={action} />
      </div>
    );

  return (
    <Container className={`image-spotlight--${orientation}`}>
      <GatsbyImage alt={title} image={image} className="image-spotlight__image" />

      <div className="image-spotlight__body">
        <div className="image-spotlight__content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="image-spotlight__action">{action}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0px auto 128px;
  display: flex;
  align-items: center;

  &.image-spotlight--left {
    flex-direction: row-reverse;

    .image-spotlight__image {
      margin-left: -70px;
      margin-right: 0;
    }

    .image-spotlight__body {
      margin-right: -70px;
      margin-left: 0;
    }
  }

  .image-spotlight__image {
    flex: 3;
    margin-right: -70px;
    height: 480px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 #00000014;
  }

  .image-spotlight__body {
    flex: 2;
    margin-left: -70px;
    z-index: 1;
    background-color: var(--color-blank);
    box-shadow: 0 4px 20px 0 #00000014;
    padding: 8px 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
  }

  .image-spotlight__content {
    flex: 1;
    min-height: 0;
    padding: 0 48px;
  }

  .image-spotlight__action {
    flex-shrink: 0;
    padding: 12px 28px;
  }
`;