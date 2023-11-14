import React from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Seo } from '../../components/Seo';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { ContentBlock } from '../../components/ContentBlock';
import { InverseTextBlock, TextBlock } from '../../components/TextBlock';
import { Divider } from '../../components/Divider';
import { LinkButton } from '../../components/LinkButton';
import { ArrowRight, Geo, Paperclip } from 'react-bootstrap-icons';
import { InverseContentBlock } from '../../components/InverseContentBlock';
import { InsetBlock } from '../../components/InsetBlock';
import { ImageSpotlight } from '../../components/ImageSpotlight';
import { CollapsibleSection } from '../../components/CollapsibleSection';

const IndexPage: React.FC = () => {
  const { header, winterCamp, winterRetreat } = useStaticQuery(query);

  const headerImage = getImage(header);
  const winterCampImage = getImage(winterCamp);
  const winterRetreatImage = getImage(winterRetreat);

  return (
    <Layout>
      <PageHeader image={headerImage} />

      <ContentBlock background="light">
        <TextBlock>
          <h1>Winter Camps</h1>
          <p>
            Join us for a memorable retreat filled with snow-dusted adventures, heartwarming fellowship, and a deeper
            connection with your faith.
          </p>
        </TextBlock>
      </ContentBlock>

      <ContentBlock style={{ marginTop: 64 }}>
        <ImageSpotlight
          image={winterCampImage}
          orientation="left"
          title="Winter Camp"
          subtitle="December 27th - 30th"
          action={<LinkButton to="#registration" text="Register for winter camp" RightIcon={ArrowRight} />}
        >
          <p>
            Our Winter Camp offers a unique opportunity to enjoy the serene beauty of the season while strengthening
            your relationship with God and forging lasting friendships.
          </p>
          <p>
            <em>For campers ages 13 to 18. Cost is $100.</em>
          </p>
        </ImageSpotlight>

        <ImageSpotlight
          image={winterRetreatImage}
          orientation="right"
          title="Winter Young Adult Retreat"
          subtitle="January 5th - 7th, 2024"
          action={<LinkButton to="#registration" text="Register for winter retreat" RightIcon={ArrowRight} />}
        >
          <p>
            Winter's serene beauty provides the perfect backdrop for spiritual reflection and reconnection with God.
          </p>
          <p>
            <em>For adults ages 18 to 30. Recommended donation is $50.</em>
          </p>
        </ImageSpotlight>
      </ContentBlock>

      <ContentBlock background="light">
        <TextBlock style={{ marginBottom: 0, paddingBottom: 72 }}>
          <h1>Preparing for Winter</h1>
          <p>
            We understand that sending your child to camp can be a big step, and we want to provide you with all the
            information you need to help your child have a fun, safe, and memorable time at camp.
          </p>
          <Divider style={{ marginTop: 48 }} />
          <CollapsibleSection header={<h2>What happens if it snows?</h2>}>
            <p>
              Our area of the Blue Ridge Mountains is known for unpredictable winter weather. In case of ice or snow
              that makes it dangerous for campers or parents to travel to Linville, NC, Winter Camp may be canceled,
              postponed, or moved to an alternate location.
            </p>
            <p>
              All pre-registered campers’ parents will be notified promptly of any weather-related changes. Please use
              extra caution when driving in the winter, regardless of weather conditions.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>What should I pack for winter camp?</h2>}>
            <p>
              Packing for winter camp can be an exciting and sometimes overwhelming experience. In this section, we will
              provide you with a comprehensive guide on how to pack.
            </p>
            <h4>What to bring?</h4>
            <ul>
              <li>Warm bedding for a twin-size bed (sheets, blanket or sleeping bag, pillow)</li>
              <li>Toiletries (soap, shampoo, toothbrush, deodorant)</li>
              <li>Towels for showers and swimming in the river</li>
              <li>Shoes (snow-worthy boots for activities and hiking, shower shoes, casual shoes)</li>
              <li>
                Warm clothing, hats, gloves, and coats (campers will be spending time outdoors with temperatures between
                10 and 50 degrees.)
              </li>
              <li>Appropriate, warm sleepwear</li>
              <li>Medications (in original bottles with clear instructions)</li>
              <li>Bible (or use community Bibles)</li>
              <li>Flashlight or headlamp</li>
              <li>Water bottle</li>
              <li>Backpack or day bag</li>
            </ul>
            <h4>What not to bring?</h4>
            <ul>
              <li>Snacks (restricting snacks in cabins protects us from critters)</li>
              <li>Electronics (cell phones, tablets, music players, etc.)</li>
              <li>Weapons (knives, guns, etc.)</li>
              <li>Alcohol or drugs (or any clothing that promotes it)</li>
              <li>Clothing that does not reflect Christian values</li>
            </ul>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>Where will campers stay during winter camp?</h2>}>
            <p>
              All campers will sleep in the main lodge. Girls and female leaders will all stay upstairs, boys and male
              leaders will all stay downstairs.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>Are campers allowed to have cell phones at camp?</h2>}>
            <p>
              We believe in the importance of unplugging and being present in the moment. That's why we are proud of our
              phone-free policy. If your camper wishes to have their phone for the trip to and from camp, we can store
              cell phones securely from check-in to check-out.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>What should I expect at drop-off & pick-up?</h2>}>
            <p>
              All campers must be checked in and out at the lodge on top of the hill. The lodge is easily accessible
              from the main entrance of the camp.
            </p>
            <p>
              Winter camp drop-off time is at 5 pm on the first day of camp. For safety reasons, we require that parents
              or guardians accompany their children during the check-in process. During check-in, our staff will collect
              any medications, dietary needs, or other important information about your child.
            </p>
            <p>
              Pick-up time is at 10 am on the last day of your child's session. We ask that you arrive promptly to pick
              up your child. If you need to make special arrangements for pick-up, please let us know in advance.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>What if my camper has dietary restrictions?</h2>}>
            <p>
              We believe that healthy food is an important part of your child's experience at camp and we take pride in
              providing nutritious and delicious meals. If your child has any allergies or dietary needs, please let us
              know during the registration process so that we can make the necessary arrangements well in advance.
            </p>
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection header={<h2>What if my camper has medications?</h2>}>
            <p>
              If your child has any medications that they need to take while at camp, we ask that you send them in their
              originally prescribed container, clearly labeled with your child's name, dosage instructions, and the name
              of the medication. This helps us ensure that your child is receiving the correct medication at the correct
              time.
            </p>
          </CollapsibleSection>
        </TextBlock>
      </ContentBlock>

      <InverseContentBlock id="registration">
        <InverseTextBlock>
          <h2>Register for Winter Camp and Winter Retreat</h2>
          <p>
            To ensure that we have all the necessary information to give you or your child a wonderful experience at
            camp, complete our Winter Camp Registration Packet which can be downloaded below.
          </p>
          <p>
            <LinkButton
              isAnchor
              blank
              to="/downloads/Winter Camp Registration Forms.pdf"
              style="inverseOutline"
              text="Winter Registration Packet"
              LeftIcon={Paperclip}
            />
          </p>
        </InverseTextBlock>
      </InverseContentBlock>

      <ContentBlock>
        <TextBlock>
          <StaticImage
            src="../../images/winter-retreat-39.jpg"
            alt="Camp is for everyone"
            imgStyle={{ borderRadius: 8 }}
          />

          <h2>Camp is For Everyone</h2>
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

      <InverseContentBlock background="none">
        <InverseTextBlock>
          <h2>We're Here to Help</h2>
          <p>
            If you have any questions or concerns about the registration process, camp activities, or any other aspect
            of our program, please feel free to reach out to our Camp Manager. We are more than happy to provide you
            with the information and guidance you need to make the registration process as smooth and enjoyable as
            possible.
          </p>
          <LinkButton to="/contact" text="Get in touch" style={'inverse'} />
        </InverseTextBlock>
      </InverseContentBlock>
    </Layout>
  );
};

const query = graphql`
  query {
    header: file(relativePath: { eq: "winter-retreat-16-7.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    winterCamp: file(relativePath: { eq: "winter-retreat-33.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    winterRetreat: file(relativePath: { eq: "winter-retreat-16-6.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Winter Camps"
    description="Snow-dusted adventures, heart-warming friendships, and Christ-centered growth"
  />
);

export default IndexPage;
