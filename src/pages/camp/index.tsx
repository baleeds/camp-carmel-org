import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { ImageSpotlight } from '../../components/ImageSpotlight';
import { InverseContentBlock } from '../../components/InverseContentBlock';
import { LinkButton } from '../../components/LinkButton';
import { ArrowRight } from 'react-bootstrap-icons';

const IndexPage: React.FC = () => {
  const { header, curriculum, activities, service, cabin } = useStaticQuery(query);

  const headerImage = getImage(header);
  const curriculumImage = getImage(curriculum);
  const activitiesImage = getImage(activities);
  const cabinImage = getImage(cabin);
  const serviceImage = getImage(service);

  return (
    <Layout>
      <PageHeader title="Life at Camp" image={headerImage} />

      <ContentBlock background={'light'} style={{ paddingBottom: 24, marginBottom: 64 }}>
        <TextBlock>
          <h1>Home away from home</h1>
          <p>
            Camp Carmel is nestled in the small town of Linville, NC. Our campus spans 48 acres of mountainous terrain,
            surrounded by the natural beauty of the Blue Ridge Mountains, and boasts a variety of hiking trails, unique
            natural landmarks, and access to the pristine Linville River.
          </p>
        </TextBlock>
      </ContentBlock>

      <ContentBlock>
        <ImageSpotlight image={cabinImage} title="Cabin Life" orientation="left">
          <p>
            Our cozy and rustic cabins are the perfect place for campers to rest and recharge after a day of fun and
            adventure. Each cabin is designed to house up to 10 campers and 2 leaders, ensuring that campers have a safe
            and comfortable space to call home during their stay.
          </p>
          <p>
            Our cabins are located in two different areas: an area for boys and an area for girls. Each area has a
            well-maintained, climate controlled bathhouse for showering and other hygiene needs.
          </p>
        </ImageSpotlight>

        <ImageSpotlight
          id="activities"
          image={activitiesImage}
          title="Activities"
          orientation="right"
          action={<LinkButton to="./schedule" text="View a sample schedule" RightIcon={ArrowRight} />}
        >
          <p>
            Camp Carmel offers a wide range of activities to keep our campers engaged and entertained. We have plenty of
            natural activities like hiking, swimming, and fishing, as well as outdoor group games like gaga ball,
            nine-square, volleyball, and basketball.
          </p>
          <p>
            In addition to recreation, we also believe in nurturing the spiritual growth of our campers. Campers
            participate in engaging Bible-focused learning during the first part of the day. Our goal is to develop a
            deeper understanding of God's love and purpose for their lives.
          </p>
          <p>
            Afternoons activities will largely consist of organized group games and challenges that are designed to
            encourage team work and comradery among campers.
          </p>
        </ImageSpotlight>
      </ContentBlock>

      <InverseContentBlock>
        <ImageSpotlight image={serviceImage} title="Servant Leadership" orientation="left">
          <p>
            Because of our Brethren roots, we believe that leadership is best developed through service to others, just
            as Jesus led his disciples by serving them. That's why we provide opportunities for campers to engage in
            community service projects off-campus, working alongside local organizations to make a difference in our
            world.
          </p>
          <p>
            Additionally, our camp is built around a culture of responsibility and accountability. Campers are assigned
            to cabin groups and are responsible for keeping their cabins and the surrounding area clean and tidy. They
            also take turns helping with mealtime cleanup and other duties around the camp.
          </p>
        </ImageSpotlight>

        <ImageSpotlight
          image={curriculumImage}
          title="Bible Curriculum"
          orientation="right"
          action={<LinkButton to="/history#theological-beliefs" text="See our beliefs" RightIcon={ArrowRight} />}
        >
          <p>
            Spiritual growth is just as important as physical and mental growth. We have an ecumenical Bible curriculum
            that is engaging, thought-provoking, and age-appropriate. Our curriculum includes interactive lessons, small
            group discussions, and individual reflections.
          </p>
          <p>
            Through our Bible curriculum, campers will learn about the teachings of Jesus and explore how to apply them
            to their everyday lives. It is designed to encourage campers to develop a deeper relationship with God and
            to inspire them to become servant leaders in their own communities.
          </p>
        </ImageSpotlight>
      </InverseContentBlock>

      <ContentBlock>
        <TextBlock>
          <StaticImage
            id="nutrition"
            src="../../images/camp-carmel-2017-699.jpg"
            alt="Directors & Counselors"
            imgStyle={{ borderRadius: 8 }}
          />
          <h2>Food & Nutrition</h2>
          <p>
            We take pride in providing well-balanced meals that are sure to satisfy even the pickiest of eaters. While
            our food is simple in nature, we make sure that each meal includes a variety of vegetables and other healthy
            options.
          </p>
          <p>
            We serve a full breakfast to get our campers fueled up for a fun-filled day, and meals are served
            cafeteria-style. Besides breakfast, lunch, and supper, campers receive a snack in the evening to help tide
            them over until breakfast. We understand that campers work up quite an appetite during their time here, and
            we make sure that they leave each meal feeling full and satisfied.
          </p>
          {/*<p>*/}
          {/*  <LinkButton to="./menu" style="outline" text="View a sample menu" RightIcon={ArrowRight} />*/}
          {/*</p>*/}
        </TextBlock>
      </ContentBlock>

      <ContentBlock background={'light'}>
        <TextBlock>
          <StaticImage
            id="counselors"
            src="../../images/junior-camp-630.jpg"
            alt="Directors & Counselors"
            imgStyle={{ borderRadius: 8 }}
          />

          <h2>Directors & Counselors</h2>
          <h3>From the Camp Community</h3>
          <p>
            Our volunteer directors and counselors are an integral part of the community and are carefully chosen based
            on their biblical standards and dedication to our mission. We know each of them personally and they undergo
            strict background checks before being accepted as staff.
          </p>
          <h3>Prepared for Success</h3>
          <p>
            To ensure that they are fully prepared for their role, our directors and counselors attend a comprehensive
            training workshop focused on safety, facilitation, and leadership. With their extensive training and
            experience, our team is equipped to provide a positive and transformative experience for each and every
            camper.
          </p>
        </TextBlock>
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "camp-carmel-2017-698.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    curriculum: file(relativePath: { eq: "junior-camp-carmel-2017-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    cabin: file(relativePath: { eq: "camp-carmel-2024-364.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    activities: file(relativePath: { eq: "junior-camp-611.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    service: file(relativePath: { eq: "young-adult-2022-697.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Life at Camp"
    description="Discover the exciting and fulfilling life at Camp Carmel with our engaging activities, bible curriculum, and servant leadership development. Experience summer camp in the Blue Ridge Mountains."
  />
);

export default IndexPage;
