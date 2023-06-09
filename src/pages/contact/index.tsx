﻿import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { InsetBlock } from '../../components/InsetBlock';
import { ContactForm } from '../../components/ContactForm';

const IndexPage: React.FC = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader image={headerImage} />

      <ContentBlock background={'light'}>
        <TextBlock>
          <h1>We're Here to Help!</h1>
          <p>
            If you have any questions, concerns, or need information about camp dates and availability, our friendly
            team is ready to assist you. Use any of the following avenues to directly contact our Camp Manager, Erica
            Leeds.
          </p>
          <InsetBlock>
            <h4>Phone number:</h4>
            <p>
              <a href="tel:8287332480">(828) 733-2480</a>
            </p>

            <h4>Email:</h4>
            <p>
              <a href="mailto:campcarmel1952@gmail.com">campcarmel1952@gmail.com</a>
            </p>
          </InsetBlock>

          <InsetBlock style={{ marginTop: 24 }}>
            <ContactForm />
          </InsetBlock>
        </TextBlock>
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "junior-camp-591.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Contact"
    description="Contact our friendly team if you have any questions, concerns, or need information about camp dates and availability."
  />
);

export default IndexPage;
