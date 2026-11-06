import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface Props {
  image?: IGatsbyImageData;
  title: string;
  description: string;
  action: React.ReactNode;
}

export const Tile: React.FC<Props> = ({ image, title, description, action }) => {
  if (!image) return <div>No image</div>;

  return (
    <Container>
      <GatsbyImage
        alt={title}
        image={image}
        className="tile__image"
      />

      <div className="tile__body">
        <div className="tile__content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="tile__action">{action}</div>
      </div>
    </Container>
  );
};

// Tiles sit on the dark teal band, so the copy is light and there is no card behind it.
const Container = styled.div`
  display: flex;
  min-height: 0;
  flex-direction: column;

  .tile__image {
    flex-basis: 260px;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: var(--radius);
    isolation: isolate;
  }

  .tile__body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  .tile__content {
    flex: 1;
    min-height: 0;

    h2 {
      color: var(--color-blank);
      font-size: clamp(24px, 1vw + 18px, 30px);
      margin-bottom: 12px;
    }

    p {
      color: rgb(255 255 255 / 85%);
      margin-top: 0;
    }
  }

  .tile__action {
    flex-shrink: 0;
    margin-left: -20px;

    a {
      color: #f3d9b8;

      &:hover {
        color: var(--color-blank);
      }
    }
  }
`;
