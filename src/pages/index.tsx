import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { Hero } from '../components/Hero';
import { LinkButton } from '../components/LinkButton';
import { ArrowRight } from 'react-bootstrap-icons';
import { ContentBlock } from '../components/ContentBlock';
import { TextSpotlight } from '../components/TextSpotlight';

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: 'Examples',
    url: 'https://github.com/gatsbyjs/gatsby/tree/master/examples',
    description:
      'A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
  },
];

const samplePageLinks = [
  {
    text: 'Page 2',
    url: 'page-2',
    badge: false,
    description: 'A simple example of linking to another page within a Gatsby site',
  },
  { text: 'TypeScript', url: 'using-typescript' },
  { text: 'Server Side Rendering', url: 'using-ssr' },
  { text: 'Deferred Static Generation', url: 'using-dsg' },
];

const moreLinks = [
  { text: 'Join us on Discord', url: 'https://gatsby.dev/discord' },
  {
    text: 'Documentation',
    url: 'https://gatsbyjs.com/docs/',
  },
  {
    text: 'Starters',
    url: 'https://gatsbyjs.com/starters/',
  },
  {
    text: 'Showcase',
    url: 'https://gatsbyjs.com/showcase/',
  },
  {
    text: 'Contributing',
    url: 'https://www.gatsbyjs.com/contributing/',
  },
  { text: 'Issues', url: 'https://github.com/gatsbyjs/gatsby/issues' },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
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
    </ContentBlock>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />;

export default IndexPage;

const old = (
  <>
    <div>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p>
        <b>Example pages:</b>{' '}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text} ↗</a>
          <p>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </>
);
