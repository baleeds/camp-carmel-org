import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { Divider } from '../../components/Divider';

const IndexPage: React.FC = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader image={headerImage} title="History & Beliefs" />

      <ContentBlock>
        <TextBlock>
          <h1>Christ-centered Since 1952</h1>
          <p>
            The mission of our camps is to provide a spiritually enthusiastic environment that brings adults, children,
            and youth into a loving relationship with God and others through Jesus Christ.
          </p>
        </TextBlock>
      </ContentBlock>
      <ContentBlock background={'light'}>
        <TextBlock>
          <StaticImage
            src="../../images/junior-camp-carmel-2017-4.jpg"
            alt="Our beliefs are the bedrock of our mission"
            imgStyle={{ borderRadius: 8 }}
            style={{ marginBottom: 24 }}
          />

          <h1 id="theological-beliefs">Theological Beliefs</h1>
          <p>
            These beliefs are essential as they serve as the bedrock of our mission, shaping our approach to serving,
            teaching, and fostering spiritual growth within our community.
          </p>

          <Divider />

          <h3>God</h3>
          <p>
            We believe in one Almighty God, who exists eternally in three distinct Persons: God the Father, God the Son,
            and God the Holy Spirit. We affirm the deity of Jesus Christ, His virgin birth, sinless life, sacrificial
            death, bodily resurrection, ascension to glory, and promised return. Additionally, we acknowledge the
            present ministry of the Holy Spirit, empowering believers to live godly lives.{' '}
          </p>

          <Divider />

          <h3>The Bible</h3>
          <p>
            We believe the sixty-six books of the Old and New Testaments are fully inspired by God, without error, and
            completely trustworthy. God has faithfully preserved His Word, which is fully authoritative and our ultimate
            source for understanding Him and guiding our lives.
          </p>

          <Divider />

          <h3>Salvation</h3>
          <p>
            We believe all people are created in God's image, yet due to Adam's disobedience, humanity has fallen into
            sin and is separated from God. God, rich in mercy, provided salvation through faith in Jesus Christ's
            sacrificial death on the cross. The gospel offers hope, declaring that all who repent and confess Jesus as
            Lord and Savior will be received by God.
          </p>
        </TextBlock>
      </ContentBlock>
      <ContentBlock>
        <TextBlock>
          <StaticImage
            src="../../images/fall-hike-645.jpg"
            alt="Erica Leeds, Camp Carmel Director"
            imgStyle={{ borderRadius: 8 }}
            style={{ marginBottom: 24 }}
          />

          <h1>Our Manager</h1>
          <p>
            Meet Erica Leeds, our passionate and experienced Camp Manager. With a lifelong connection to camp and years
            of leadership experience, Erica brings a wealth of knowledge and enthusiasm to camp. Holding a bachelor's
            degree in Parks and Recreation from NC State University and a master's degree in Outdoor Ministry from
            Liberty University, she is deeply committed to fostering meaningful experiences for campers.
          </p>
          <p>
            Erica feels closest to the Lord when exploring nature through hiking and engaging in outdoor adventures.
            Alongside her husband Benjamin and their son Amos, Erica resides in Boone, NC, where they actively serve as
            foster parents, embodying a spirit of compassion and community.
          </p>
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

export const Head = () => (
  <Seo
    title="History & Beliefs"
    description="Explore our foundational theological beliefs that guide our ministry's mission and values, shaping our approach to serving and nurturing spiritual growth within our community."
  />
);

export default IndexPage;
