import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { Divider } from '../../components/Divider';
import { InverseContentBlock } from '../../components/InverseContentBlock';
import { ImageSpotlight } from '../../components/ImageSpotlight';
import { ArrowRight } from 'react-bootstrap-icons';
import { LinkButton } from '../../components/LinkButton';

const IndexPage: React.FC = () => {
  const { header, register } = useStaticQuery(query);

  const headerImage = getImage(header);
  const registerImage = getImage(register);

  return (
    <Layout>
      <PageHeader title="Dates & Rates" image={headerImage} />

      <ContentBlock>
        <TextBlock>
          <h1>2026 Summer Sessions</h1>
          <p>
            We are excited to offer a range of camp sessions, designed to provide a unique and engaging experience, with
            activities and programming tailored to the interests and needs of different age groups.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Traditional Summer Camps</h2>
          <p>
            Each traditional summer camp session is a wonderful opportunity to experience Christ-like community in a
            beautiful camp setting, while developing personally and spiritually.
          </p>
          <p>
            Our grade ranges are based on a student's currently enrolled grade. If a parent feels that their child would
            thrive in a session different than their designated grade, exceptions can be made on a case-by-case basis.
          </p>

          <Divider />

          <h3>Kiddie Camp</h3>
          <h4 className="subtext">
            <em>Kindergarten - 2nd grade (approx. ages 5-7)</em>
          </h4>
          <h4>July 5th - 9th | $150</h4>
          <p>
            Kiddie Camp is a part-week camp, providing a way for young children to dip their toes into the camp
            lifestyle. We focus on age-appropriate activities and hands-on learning to help these campers thrive.
          </p>

          <Divider />

          <h3>Junior Camp</h3>
          <h4 className="subtext">
            <em>3rd - 5th grade (approx. ages 8-10)</em>
          </h4>
          <h4>June 28th - July 4th | $180</h4>
          <p>
            Junior Camp is designed to provide a safe and supportive environment where children can grow and explore
            their faith in a fun and engaging way.
          </p>

          <Divider />

          <h3>Junior High Camp</h3>
          <h4 className="subtext">
            <em>6th - 8th grade (approx. ages 11-13)</em>
          </h4>
          <h4>June 21st - 27th | $180</h4>
          <p>
            Junior High Camp is focused on helping campers discover who they are in Christ and how they can be a
            positive force among their peers and in their communities.
          </p>

          <Divider />

          <h3>Youth Camp</h3>
          <h4 className="subtext">
            <em>9th - 12th grade (approx. ages 14-18)</em>
          </h4>
          <h4>June 14th - 20th | $180</h4>
          <p>
            While at Youth Camp, campers will participate in a variety of activities that are designed to help them
            develop key character traits, such as compassion, resilience, and self-discipline.
          </p>
        </TextBlock>
        <TextBlock>
          <h2>Specialty Camps</h2>
          <p>
            Our specialty camps are designed to offer unique experiences for campers who are interested in a specific
            topic or activity. Campers who attend a traditional summer camp session are welcomed and encouraged to
            attend a specialty camp as well.
          </p>

          <Divider />

          <h3>High Adventure Camp</h3>
          <h4 className="subtext">
            <em>Ages 12-18</em>
          </h4>
          <h4>July 27th - 31st | $230</h4>
          <p>
            High Adventure Camp is a collaborative overnight camp with other Church of the Brethren affiliated camps
            throughout the Eastern United States. High Adventure camp is an outdoor adventure based camp where we spend
            the majority of our day off-campus experiencing the beauty of the Blue Ridge Mountains.
          </p>

          <Divider />

          <h3>Work Camp</h3>
          <h4 className="subtext">
            <em>Ages 12-18</em>
          </h4>
          <h4>July 12th - 16th | $130</h4>
          <p>
            This is a unique opportunity for campers to make a difference in the community while developing important
            leadership skills by engaging in hands-on service projects. Campers at this session cap the week off with a
            candle-lit steak dinner, where they reflect with their peers on the meaningful experiences they've shared
            together.
          </p>

          <Divider />

          <h3>Young at Heart Camp</h3>
          <h4 className="subtext">
            <em>Adults 18 years and older</em>
          </h4>
          <h4>July 31st - August 2nd | By donation</h4>
          <p>
            Rejuvenate and recharge at Young at Heart Camp, where adults have the opportunity to build deep connections
            to God and each other through devotion, prayer, outdoor activities, and unique games. Enjoy our natural
            setting and embrace a break from the stresses of daily life.
          </p>

          <Divider />

          <h3>Family Camp</h3>
          <h4 className="subtext">
            <em>All ages</em>
          </h4>
          <h4>September 4th - 7th | By donation</h4>
          <p>
            With a focus on family devotion and community, our family camp session provides a meaningful and enriching
            experience for families of all shapes and sizes. Minors must be accompanied by an adult.{' '}
          </p>
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

      <InverseContentBlock>
        <ImageSpotlight
          image={registerImage}
          title="We hope to see you soon!"
          description="If you'd like to secure a spot for your child at one of our summer sessions, please complete the flexible registration process."
          action={<LinkButton to="/registration" text="Register" RightIcon={ArrowRight} />}
          orientation="left"
        />
      </InverseContentBlock>
    </Layout>
  );
};
const query = graphql`
  query {
    header: file(relativePath: { eq: "camp-carmel-2024-368.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    register: file(relativePath: { eq: "camp-carmel-2021-183.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="2025 Dates & Rates"
    description="Explore our 2025 summer camp sessions for boys and girls in elementary, middle, and high school. Experience true Christian community this summer."
  />
);

export default IndexPage;
