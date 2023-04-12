import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { Hero } from '../components/Hero';
import { LinkButton } from '../components/LinkButton';
import { ArrowRight } from 'react-bootstrap-icons';
import { ContentBlock } from '../components/ContentBlock';
import { TextSpotlight } from '../components/TextSpotlight';
import { ImageSpotlight } from '../components/ImageSpotlight';
import { InverseContentBlock } from '../components/InverseContentBlock';
import { Tile } from '../components/Tile';
import { GridLayout } from '../components/GridLayout';

const IndexPage = () => {
  const { family, holySpirit, roots, whatToBring, leaders, dayInTheLife, food } = useStaticQuery(query);

  const familyImage = getImage(family);
  const holySpiritImage = getImage(holySpirit);
  const rootsImage = getImage(roots);
  const whatToBringImage = getImage(whatToBring);
  const leadersImage = getImage(leaders);
  const dayInTheLifeImage = getImage(dayInTheLife);
  const foodImage = getImage(food);

  return (
    <Layout>
      <Hero
        title="Camp Carmel is an overnight summer camp tucked away in Western North Carolina that has been offering Christ-centered camps since 1952."
        subTitle="Welcome to Camp Carmel"
      >
        <LinkButton to="dates" text="View our dates and rates" style="inverse" RightIcon={ArrowRight} />
      </Hero>

      <ContentBlock>
        <TextSpotlight title="Community how God designed it.">
          Community is at the heart of everything we do. Camp Carmel is designed to give campers an engaging space to
          experience the joys of community living without the distractions and stresses of everyday life.
        </TextSpotlight>

        <ImageSpotlight
          image={familyImage}
          title="Discover new family"
          description="Whether you're a first-time camper or a returning veteran, we invite you to come and be a part of the Camp Carmel family that has been growing together in Christ for over 70 years."
          action={<LinkButton to="/dates" text="Explore our summer sessions" RightIcon={ArrowRight} />}
          orientation="right"
        />

        <ImageSpotlight
          image={holySpiritImage}
          title="Encounter the Holy Spirit"
          description="At our camp, we aim to create an environment where campers can experience God's love and grace. We provide opportunities for spiritual growth and exploration through daily bible study, worship, and prayer."
          action={<LinkButton to="/history" text="What we stand for" RightIcon={ArrowRight} />}
          orientation="left"
        />

        <ImageSpotlight
          image={rootsImage}
          title="Get back to your roots"
          description="Enjoy hiking through Rhododendron groves to Vespers Rock, casting a line into the Linville River, or hammocking under a mountain canopy. Camp Carmel offers countless ways to experience God through His creation."
          action={<LinkButton to="/camp" text="Life at camp" RightIcon={ArrowRight} />}
          orientation="right"
        />
      </ContentBlock>

      <InverseContentBlock>
        <GridLayout columns={2}>
          <Tile
            image={whatToBringImage}
            title="What to bring to camp?"
            description="The right gear can make all the difference in creating a comfortable and enjoyable camp environment. Our packing list includes all the supplies you'll need to make memories that last a lifetime!"
            action={<LinkButton to="/parent-info#packing-list" text="Check the list" RightIcon={ArrowRight} />}
          />
          <Tile
            image={leadersImage}
            title="Trustworthy leadership"
            description="At our camp, we believe that good leadership starts with leading by example. Our counselors are trained in creating a safe, supportive, and fun environment for campers."
            action={<LinkButton to="/camp#counselors" text="Learn about our training" RightIcon={ArrowRight} />}
          />
          <Tile
            image={dayInTheLifeImage}
            title="A day in the life of a camper"
            description="Each day is a unique opportunity to learn, grow, and create memories. Starting with morning watch and ending around a campfire, campers will engage in a variety of activities from hiking and swimming to arts and crafts and team-building games."
            action={<LinkButton to="/camp/schedule" text="View a sample schedule" RightIcon={ArrowRight} />}
          />
          <Tile
            image={foodImage}
            title="Food and lodging"
            description="Food and lodging play a critical role in ensuring that campers have the energy and rest they need to make the most of their camp experience. That's why at our camp, we strive to provide balanced meals and comfortable accommodations."
            action={<LinkButton to="/camp#nutrition" text="Read about our nutrition" RightIcon={ArrowRight} />}
          />
        </GridLayout>
      </InverseContentBlock>
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
    holySpirit: file(relativePath: { eq: "junior-camp-617.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    roots: file(relativePath: { eq: "junior-camp-carmel-2017-85.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    whatToBring: file(relativePath: { eq: "junior-camp-carmel-2017-57.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    leaders: file(relativePath: { eq: "junior-camp-605.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    dayInTheLife: file(relativePath: { eq: "junior-camp-634.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    food: file(relativePath: { eq: "junior-camp-600.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo description="Welcome to Camp Carmel, a Christian summer camp nestled in the mountains of North Carolina. Explore our 2023 summer sessions for boys and girls, ages 5 to 18." />
);

export default IndexPage;
