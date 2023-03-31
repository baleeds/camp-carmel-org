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
      <GatsbyImage alt={title} image={image} className="tile__image" />

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

const Container = styled.div`
  border-radius: 8px;
  display: flex;
  min-height: 0;
  flex-direction: column;
  box-shadow: 0 4px 20px 0 #00000014;
  overflow: hidden;

  .tile__image {
    flex-basis: 250px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .tile__body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    background-color: white;
  }

  .tile__content {
    flex: 1;
    min-height: 0;
    padding: 0 20px;
  }

  .tile__action {
    flex-shrink: 0;
  }
`;
