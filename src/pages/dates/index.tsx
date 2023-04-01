import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { Divider } from '../../components/Divider';
import { InverseContentBlock } from '../../components/InverseContentBlock';
import { css } from 'styled-components';

const IndexPage: React.FC = () => {
  const { family } = useStaticQuery(query);

  const familyImage = getImage(family);

  return (
    <Layout>
      <PageHeader title="Dates & Rates" image={familyImage} />

      <ContentBlock>
        <TextBlock>
          <h1>2023 Summer Sessions</h1>
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

          <h3>
            Kiddie Camp <em>(Pre K - 1st grades)</em>
          </h3>
          <h4>July 2nd - 6th | $150</h4>
          <p>
            Kiddie Camp is a part-week camp, providing a way for young children to dip their toes into the camp
            lifestyle. We focus on age-appropriate activities and hands-on learning to help these campers thrive.
          </p>

          <Divider />

          <h3>
            Kiddie Camp <em>(Pre K - 1st grades)</em>
          </h3>
          <h4>July 2nd - 6th | $150</h4>
          <p>
            Kiddie Camp is a part-week camp, providing a way for young children to dip their toes into the camp
            lifestyle. We focus on age-appropriate activities and hands-on learning to help these campers thrive.
          </p>

          <Divider />

          <h3>
            Junior Camp <em>(2nd - 4th grades)</em>
          </h3>
          <h4>July 9th - 15th | $180</h4>
          <p>
            Junior Camp is designed to provide a safe and supportive environment where children can grow and explore
            their faith in a fun and engaging way.
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

          <h3>
            High Adventure Camp <em>(12 - 18 years old)</em>
          </h3>
          <h4>July 24th - 28th | $230</h4>
          <p>
            Adventure Camp is a collaborative overnight camp with other Church of the Brethren affiliated camps
            throughout the Eastern United States. High Adventure camp is an outdoor adventure based camp where we spend
            the majority of our day off-campus experiencing the beauty of the Blue Ridge Mountains.
          </p>

          <Divider />

          <h3>
            Work Camp <em>(12 - 18 years old)</em>
          </h3>
          <h4>July 16th - 20th | $130</h4>
          <p>
            This is a unique opportunity for campers to make a difference in the community while developing important
            leadership skills by engaging in hands-on service projects. Campers at this session cap the week off with
            candle-lit steak dinner, where they reflect with their peers on the meaningful experiences they've shared
            together.
          </p>

          <Divider />

          <h3>
            Young at Heart Camp <em>(18 years old and older)</em>
          </h3>
          <h4>July 28th - 30th | By donation</h4>
          <p>
            Rejuvenate and recharge at Young at Heart Camp, where adults have the opportunity to build deep connections
            to God and each other through devotion, prayer, outdoor activities, and unique games. Enjoy our natural
            setting and embrace a break from the stresses of daily life.{' '}
          </p>

          <Divider />

          <h3>
            Family Camp <em>(All ages)</em>
          </h3>
          <h4>September 1st - 4th | By donation</h4>
          <p>
            With a focus on family devotion and community, our family camp session provides a meaningful and enriching
            experience for families of all shapes and sizes. Minors must be accompanied by an adult.{' '}
          </p>
        </TextBlock>
      </ContentBlock>

      <ContentBlock background={'light'}>
        <TextBlock>
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
            director, Erica Leeds, at <a href="mailto:campcarmel1952@gmail.com">campcarmelt1952@gmail.com</a> for more
            information.
          </p>
        </TextBlock>
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    family: file(relativePath: { eq: "camp-carmel-2019-27.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => <Seo title="2023 Dates & Rates" />;

export default IndexPage;
