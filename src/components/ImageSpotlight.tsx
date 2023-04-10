import React, { CSSProperties } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface Props {
  id?: string;
  image: IGatsbyImageData | undefined;
  title: string;
  description: string;
  children?: JSX.Element;
  action: React.ReactNode;
  orientation: 'left' | 'right';
  style?: CSSProperties;
}

export const ImageSpotlight: React.FC<Props> = ({
  id,
  image,
  title,
  description,
  action,
  orientation,
  style,
  children,
}) => {
  if (!image) return null;

  return (
    <Container
      id={id}
      className={`image-spotlight--${orientation} image-spotlight--${children ? 'large' : 'small'}`}
      style={style}
    >
      <GatsbyImage alt={title} image={image} className="image-spotlight__image" />

      <div className="image-spotlight__body">
        <div className="image-spotlight__content">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          {children}
        </div>
        <div className="image-spotlight__action">{action}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto 128px;
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

  &.image-spotlight--large {
    .image-spotlight__body {
      flex: 3;
    }
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

  // Mobile
  @media screen and (max-width: 700px) {
    flex-direction: column !important;
    margin-bottom: 92px;

    .image-spotlight__image {
      margin-left: -20px !important;
      margin-right: -20px !important;
      margin-bottom: -70px;
      border-radius: 0 !important;
      box-shadow: none !important;
    }

    .image-spotlight__body {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .image-spotlight__content {
      padding: 0 20px !important;
    }

    .image-spotlight__action {
      padding: 0 !important;
    }
  }
`;
