import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { InsetBlock } from '../../components/InsetBlock';
import { Divider } from '../../components/Divider';
import { ContactForm } from '../../components/ContactForm';

const IndexPage: React.FC = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader image={headerImage} />

      <ContentBlock>
        <TextBlock>
          <h1>We're Here to Help!</h1>
          <p>
            If you have any questions, concerns, or need information about camp dates and availability, our friendly
            team is ready to assist you. Use any of the following avenues to directly contact our Camp Manager, Erica
            Leeds.
          </p>
          <InsetBlock>
            <h4>Call or text:</h4>
            <p>
              <a href="tel:8288173708">(828) 817-3708</a>
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
      {/*<ContentBlock background={'light'}>*/}
      {/*  <TextBlock>*/}
      {/*    <h2>Message us directly</h2>*/}
      {/*    <p>Coming soon..</p>*/}
      {/*  </TextBlock>*/}
      {/*</ContentBlock>*/}
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

export const Head = () => <Seo title="Contact" />;

export default IndexPage;
