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
import { Paperclip } from 'react-bootstrap-icons';
import { InverseContentBlock } from '../../components/InverseContentBlock';
import { InsetBlock } from '../../components/InsetBlock';

const IndexPage: React.FC = () => {
  const { header } = useStaticQuery(query);

  const headerImage = getImage(header);

  return (
    <Layout>
      <PageHeader image={headerImage} />

      <ContentBlock>
        <TextBlock>
          <h1>Registration is Easy</h1>
          <p>
            We're thrilled that you're considering joining us for an unforgettable summer experience. Our registration
            process is flexible and easy, designed to make it convenient for you to secure a spot for your child.
          </p>
        </TextBlock>
      </ContentBlock>
      <ContentBlock background={'light'}>
        <TextBlock>
          <h2>Step 1: Fill out the 2023 Registration Packet</h2>
          <p>
            To ensure that we have all the necessary information to give your child a wonderful week at camp, parents
            are required to complete our 2023 Registration Packet which can be downloaded below.
          </p>
          <p>
            <LinkButton
              isAnchor
              blank
              to="/downloads/Camp Carmel - 2023 Registration Packet.pdf"
              style="outline"
              text="2023 Registration Packet"
              LeftIcon={Paperclip}
            />
          </p>

          <Divider />

          <h2>Step 2: Submit the Completed Packet</h2>
          <p>
            A completed registration packet may be mailed or emailed to us using the contact information in the next
            section.
          </p>

          <Divider />

          <h2>Step 3: Provide Payment (Now or Later)</h2>
          <p>
            Summer session costs can be found on our <Link to="/dates">Dates & Rates</Link> page.
          </p>

          <p>
            If you would like to make payment ahead of time, you can send a check to Camp Carmel at the mailing address
            provided below. If the payment is separate from the registration packet, kindly include the camper's full
            name and the summer session in the memo line.
          </p>

          <p>
            Please note that payment is not required at the time of submitting the registration packet. Alternatively,
            you can make payment during check-in using cash or check, with checks being the preferred method. We strive
            to make the payment process as convenient as possible for our families.
          </p>

          <p>
            Thank you for your cooperation, and we look forward to welcoming your child to an enriching experience at
            our camp!
          </p>

          <InsetBlock style={{ marginTop: 48 }}>
            <h4>Email Address</h4>
            <p>
              <a href="mailto:campcarmel1952@gmail.com">campcarmel1952@gmail.com</a>
            </p>
            <h4>Mailing Address</h4>
            <p>
              Camp Carmel <br />
              P.O. Box 884 <br />
              Linville, NC 28646
            </p>
          </InsetBlock>
        </TextBlock>
      </ContentBlock>

      <ContentBlock>
        <TextBlock>
          <StaticImage
            src="../../images/junior-camp-carmel-2017-87.jpg"
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

      <InverseContentBlock>
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
    header: file(relativePath: { eq: "camp-carmel-summer16-12.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="Registration"
    description="Register your child for our summer camp sessions. Download and submit our 2023 Registration Packet."
  />
);

export default IndexPage;
