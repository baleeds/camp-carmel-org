import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { ContentBlock } from '../../components/ContentBlock';
import { TextBlock } from '../../components/TextBlock';
import { Divider } from '../../components/Divider';
import { Seo } from '../../components/Seo';
import { CollapsibleSection } from '../../components/CollapsibleSection';
import { ImageSpotlight } from '../../components/ImageSpotlight';
import { ArrowRight } from 'react-bootstrap-icons';
import { LinkButton } from '../../components/LinkButton';

const IndexPage: React.FC = () => {
  const { header, additionalQuestions } = useStaticQuery(query);

  const headerImage = getImage(header);
  const additionalQuestionsImage = getImage(additionalQuestions);

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
              Packing for summer camp can be an exciting and sometimes overwhelming experience. In this section, we will
              provide you with a comprehensive guide on what to pack for summer camp.
            </p>
            <h4>What to bring?</h4>
            <ul>
              <li>Bedding (sheets, blanket or sleeping bag, pillow)</li>
              <li>Toiletries (soap, shampoo, toothbrush, deodorant)</li>
              <li>Towels for showers and swimming in the river</li>
              <li>Shoes (close-toed for activities and hiking, shower shoes, casual shoes)</li>
              <li>Clothing (layers for temperatures between 60 and 80 degrees)</li>
              <li>Appropriate sleepwear</li>
              <li>Swim clothes (girls must wear one-piece suits)</li>
              <li>Medications (in original bottles with clear instructions)</li>
              <li>Insect repellent</li>
              <li>Bible (or use community Bibles)</li>
              <li>Flashlight or headlamp</li>
              <li>Water bottle</li>
            </ul>
            <h4>What not to bring</h4>
            <ul>
              <li>Electronics (cell phones, tablets, music players, etc.)</li>
              <li>Weapons (knives, guns, etc.)</li>
              <li>Alcohol or drugs (or any clothing that promotes it)</li>
              <li>Clothing that does not reflect Christian values (bikinis, short shorts, halter tops, etc.)</li>
            </ul>
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
          <CollapsibleSection header={<h2>Staying in Touch</h2>}>
            <p>
              We understand that being away from your child during summer camp can be difficult, but we want to
              encourage you to allow your child to fully immerse themselves in the camp experience. Homesickness is a
              common feeling for many campers, and we have found that constant communication with parents can actually
              worsen these feelings.
            </p>
            <p>
              However, we understand that sometimes there may be circumstances that require communication with your
              child. If this is the case, please contact the camp director to arrange a time for a phone call.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>What if my kid gets homesick?</h2>}>
            <p>
              We understand that homesickness can be a common concern for parents and campers alike, especially during
              the first few days of camp. Rest assured that our staff is trained to coach campers through this
              adjustment period and help them overcome any feelings of homesickness.
            </p>
            <p>
              If for any reason we notice that your child is having difficulty adjusting to camp life, we will be sure
              to notify you immediately. We believe that communication between parents and staff is crucial to the
              success of our program, and we want to work together to ensure that your child has the best possible
              experience at camp.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>Pick-up & drop-off</h2>}>
            <p>
              All campers must be checked in and out at the lodge on top of the hill. The lodge is easily accessible
              from the main entrance of the camp.
            </p>
            <p>
              Unless otherwise noted, drop-off time is at 3 pm on the first day of your child's session. For safety
              reasons, we require that parents or guardians accompany their children during the check-in process. During
              check-in, our staff will collect any medications, dietary needs, or other important information about your
              child.
            </p>
            <p>
              Pick-up time is at 11 am on the last day of your child's session. We ask that you arrive promptly to pick
              up your child. If you need to make special arrangements for pick-up, please let us know in advance.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>Dietary needs</h2>}>
            <p>
              We believe that healthy food is an important part of your child's experience at camp and we take pride in
              providing nutritious and delicious meals. If your child has any allergies or dietary needs, please let us
              know during the registration process so that we can make the necessary arrangements
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>Medical needs</h2>}>
            <p>
              If your child has any medications that they need to take while at camp, we ask that you send them in their
              original container, clearly labeled with your child's name, dosage instructions, and the name of the
              medication. This helps us ensure that your child is receiving the correct medication at the correct time.
            </p>
          </CollapsibleSection>
          <Divider />
        </TextBlock>
      </ContentBlock>
      <ContentBlock background={'light'} style={{ padding: '72px 0' }}>
        <ImageSpotlight
          title="Additional questions?"
          description="We want to ensure that you and your child have all the information you need to have a
            positive experience at camp. If you have any additional questions or concerns about coming to camp, please do not hesitate to contact
            our camp director."
          action={<LinkButton to="/contact" text="Get in touch" RightIcon={ArrowRight} />}
          orientation="left"
          image={additionalQuestionsImage}
          style={{ marginBottom: 0 }}
        />
      </ContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "camp-carmel-summer16-8.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    additionalQuestions: file(relativePath: { eq: "junior-camp-carmel-2017-68.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => <Seo title="Parent Info" />;

export default IndexPage;
