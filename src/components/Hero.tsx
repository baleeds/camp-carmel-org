import React from 'react';
import BackgroundImg from 'gatsby-background-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
}

export const Hero: React.FC<Props> = ({ title, subTitle, children }): JSX.Element => {
  const { file } = useStaticQuery(query);
  const image = getImage(file);
  const bgImage = convertToBgImage(image);

  return (
    <div>
      <BackgroundImg
        style={{
          width: '100%',
          height: 650,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        {...bgImage}
      >
        <Container>
          <h2>{subTitle}</h2>
          <h1>{title}</h1>
          <div className="actions">{children}</div>
        </Container>
      </BackgroundImg>
    </div>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "junior-camp-638.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

const Container = styled.div`
  max-width: var(--site-width);
  width: 100%;
  padding: 0px 20px 48px 20px;

  h1,
  h2 {
    color: var(--color-blank);
    text-shadow: 0px 4px 10px 0px #00000040;
    max-width: 800px;
  }
`;
