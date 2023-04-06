import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { Divider } from '../../components/Divider';
import { Seo } from '../../components/Seo';
import { CollapsibleSection } from '../../components/CollapsibleSection';

const IndexPage: React.FC = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader title="Parent Info" image={headerImage} />

      <ContentBlock>
        <TextBlock style={{ marginBottom: 0 }}>
          <h1>Getting Prepared</h1>
          <p>
            We understand that sending your child to camp can be a big step, and we want to provide you with all the
            information you need to help your child have a fun, safe, and memorable time at camp.
          </p>
        </TextBlock>
        <TextBlock style={{ marginBottom: 24, marginTop: 0, paddingTop: 0 }}>
          <Divider />
          <CollapsibleSection header={<h2>Packing for Camp</h2>}>
            <p>
              Packing for summer camp can be an exciting and sometimes overwhelming experience. As you prepare to send
              your child off for a week, it's important to make sure they have everything they need to make the most of
              their time at camp. In this section, we will provide you with a comprehensive guide on what to pack for
              summer camp.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>Proudly Screen Free</h2>}>
            <p>
              We believe in the importance of unplugging and being present in the moment. That's why we are proud of our
              screen-free policy. If your camper wishes to have their phone for the trip to and from camp, we can store
              cell phones securely from check-in to check-out.
            </p>
          </CollapsibleSection>
          <Divider />
        </TextBlock>
      </ContentBlock>

      <ContentBlock background={'light'}>
        <TextBlock>
          <StaticImage
            src="../../images/camp-carmel-2019-20.jpg"
            alt="Camp is for everyone"
            imgStyle={{ borderRadius: 8 }}
          />

          <h2>Camp is For Everyone</h2>
          <h3>Keeping Costs Down</h3>
          <p>
            We are able to keep our costs low thanks to the generous support of our partner churches, who donate funds
            to help subsidize the cost of camp. Additionally, our dedicated volunteer counselors and cooks help us to
            maintain a high-quality camp experience while keeping our operating expenses low.
          </p>
          <p>
            By making our camp affordable, we are able to welcome a diverse group of campers from all backgrounds and
            walks of life. We believe that this diversity enriches the camp experience for everyone and helps to create
            a vibrant and unified community in Christ.
          </p>

          <h3>Financial Aid</h3>
          <p>
            Camp Carmel believes that every child should have the opportunity to attend and experience the joy and
            growth that come from a summer camp experience. That's why we are grateful for the generosity of our donors
            who provide camp scholarships to families who may not be able to afford the cost of camp. Please contact our
            director, Erica Leeds, at <a href="mailto:campcarmel1952@gmail.com">campcarmel1952@gmail.com</a> for more
            information.
          </p>
        </TextBlock>
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "junior-camp-619.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => <Seo title="2023 Dates & Rates" />;

export default IndexPage;
