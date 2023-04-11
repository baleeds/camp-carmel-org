import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { InverseContentBlock } from '../../components/InverseContentBlock';
import { ImageSpotlight } from '../../components/ImageSpotlight';
import { ArrowRight } from 'react-bootstrap-icons';
import { LinkButton } from '../../components/LinkButton';

const IndexPage: React.FC = () => {
  const { header, beliefs } = useStaticQuery(query);

  const headerImage = getImage(header);
  const beliefsImage = getImage(beliefs);

  return (
    <Layout>
      <PageHeader title="A Typical Schedule" image={headerImage} />

      <ContentBlock background={'light'} style={{ paddingBottom: 24, marginBottom: 64 }}>
        <TextBlock>
          <h1>Always Fresh</h1>
          <p>
            We mix up the schedule every day to keep campers engaged and having fun. While there are classics that our
            campers look forward to, we always ensure that we balance the activity levels, providing high-energy games,
            crafts, and collaborative activities that everyone can enjoy.
          </p>
        </TextBlock>
      </ContentBlock>

      <ContentBlock>
        <TextBlock>
          <StaticImage
            id="nutrition"
            src="../../images/camp-carmel-2019-21.jpg"
            alt="Directors & Counselors"
            imgStyle={{ borderRadius: 8 }}
          />
          <h2>Every Day is Different</h2>
          <p>
            Camp schedules vary by age-group, camp theme, day, and many other factors. To help illustrate what camper's
            day may look like, we've distilled this schedule.
          </p>
          <p>
            <ul>
              <li>7:15am - Rise & Shine</li>
              <li>8:00am - Morning Watch (wake-up songs and a short morning devotion)</li>
              <li>8:15am - Breakfast</li>
              <li>9:00am - Cabin Cleanup and Responsibilities</li>
              <li>9:30am - Team Building Activity</li>
              <li>10:15am - Large Group Bible Lesson</li>
              <li>10:45am - Small Group Interactive Activity</li>
              <li>11:15am - Large Group Recap</li>
              <li>11:30am - High-energy Free Play</li>
              <li>12:00pm - Lunch</li>
              <li>12:45pm - Free Play</li>
              <li>1:30pm - Nature Activity (hike, swim, etc.)</li>
              <li>3:00pm - Hands-on Craft Time (painting, origami, lanyards, etc.)</li>
              <li>4:00pm - High-energy Structured Activity</li>
              <li>5:00pm - Wind-down Activity</li>
              <li>5:45pm - Dinner</li>
              <li>6:30pm - Evening Worship and Devotion</li>
              <li>7:15pm - High-energy Structured Activity</li>
              <li>8:45pm - Snack</li>
              <li>9:15pm - Campfire Songs and Daily Reflection</li>
              <li>10:00pm - Evening Wind-down</li>
              <li>10:30pm - Cabin Devotion</li>
              <li>11:00pm - Lights Out</li>
            </ul>
          </p>
        </TextBlock>
      </ContentBlock>

      <InverseContentBlock>
        <ImageSpotlight
          style={{ marginBottom: 0 }}
          image={beliefsImage}
          title="What do campers learn?"
          description="We believe that our Bible curriculum provides a valuable foundation for campers to grow spiritually and personally. We are excited to see campers engage with the material and develop a stronger understanding of their faith."
          action={<LinkButton to="/history" text="See our beliefs" RightIcon={ArrowRight} />}
          orientation="right"
        />
      </InverseContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "junior-camp-625.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    beliefs: file(relativePath: { eq: "camp-carmel-summer16-49.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => <Seo title="Schedule" />;

export default IndexPage;
