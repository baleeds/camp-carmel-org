import React, { CSSProperties, ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface Props {
  id?: string;
  image: IGatsbyImageData | undefined;
  title: string;
  subtitle?: string;
  description?: string;
  action?: React.ReactNode;
  orientation: 'left' | 'right';
  /** Show the whole image at its own shape instead of cropping it (for flyers and posters). */
  uncropped?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export const ImageSpotlight: React.FC<Props> = ({
  id,
  image,
  title,
  subtitle,
  description,
  action,
  orientation,
  uncropped,
  style,
  children,
}) => {
  if (!image) return null;

  return (
    <Container
      id={id}
      className={`image-spotlight image-spotlight--${orientation} image-spotlight--${children ? 'large' : 'small'}${
        uncropped ? ' image-spotlight--uncropped' : ''
      }`}
      style={style}
    >
      <GatsbyImage alt={title} image={image} className="image-spotlight__image" />

      <div className="image-spotlight__body">
        <div className="image-spotlight__content">
          <h2>{title}</h2>
          {subtitle && (
            <h3 className="subtext">
              <em>{subtitle}</em>
            </h3>
          )}
          {description && <p>{description}</p>}
          {children}
        </div>
        {action && <div className="image-spotlight__action">{action}</div>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto 96px;
  display: flex;
  align-items: center;
  gap: 64px;

  &.image-spotlight--left {
    flex-direction: row-reverse;
  }

  .image-spotlight__image {
    flex: 7;
    height: 480px;
    border-radius: var(--radius);
    isolation: isolate; // keeps rounded corners on the image in Safari
  }

  .image-spotlight__body {
    flex: 5;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  &.image-spotlight--large {
    .image-spotlight__image {
      flex: 6;
    }

    .image-spotlight__body {
      flex: 6;
    }
  }

  &.image-spotlight--uncropped .image-spotlight__image {
    flex: 0 0 auto;
    width: 400px;
    height: auto;
  }

  .image-spotlight__content {
    flex: 1;
    min-height: 0;

    h2 {
      margin-top: 0;
      color: var(--color-primary);
    }
  }

  .image-spotlight__action {
    flex-shrink: 0;
    margin-left: -20px; // align ghost button text with the copy above
  }

  // Tablet
  @media screen and (max-width: 950px) {
    gap: 40px;

    .image-spotlight__image {
      height: 380px;
    }

    &.image-spotlight--uncropped .image-spotlight__image {
      width: 300px;
      height: auto;
    }
  }

  // Mobile
  @media screen and (max-width: 700px) {
    flex-direction: column !important;
    align-items: stretch;
    gap: 24px;
    margin-bottom: 64px;

    .image-spotlight__image {
      flex: none;
      height: 280px;
    }

    &.image-spotlight--uncropped .image-spotlight__image {
      width: 100%;
      max-width: 400px;
      height: auto;
      align-self: center;
    }
  }
`;
