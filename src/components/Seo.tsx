/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title: string;
  description: string;
  includeSiteNameInTitle?: boolean;
  children?: React.ReactNode;
}

export function Seo({ description, title, includeSiteNameInTitle = true, children }: Props): JSX.Element {
  return (
    <>
      <title>
        {title}
        {includeSiteNameInTitle ? ' | Camp Carmel' : ''}
      </title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Camp Carmel" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  );
}
