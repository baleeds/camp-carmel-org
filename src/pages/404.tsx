import * as React from 'react';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { PageHeader } from '../components/PageHeader';
import { ContentBlock } from '../components/ContentBlock';
import { TextBlock } from '../components/TextBlock';

const NotFoundPage = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader title="We can't find what you're looking for." image={headerImage} />

      <ContentBlock>
        <TextBlock></TextBlock>
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "junior-camp-carmel-2017-66.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => <Seo title="Page Not Found" />;

export default NotFoundPage;
