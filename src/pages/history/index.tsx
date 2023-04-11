import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';

const IndexPage: React.FC = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader image={headerImage} title="History & Beliefs" />

      <ContentBlock>
        <TextBlock>
          <h1>Living in Community Since 1952</h1>
          <p>Coming soon...</p>
        </TextBlock>
      </ContentBlock>
      <ContentBlock background={'light'}>
        <TextBlock>
          <h2>Beliefs</h2>
          <p>Coming soon..</p>
        </TextBlock>
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "junior-camp-606.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => <Seo title="History & Beliefs" />;

export default IndexPage;
