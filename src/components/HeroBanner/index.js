import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

const HeroBanner = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
        }
      }
    }
  `);

  const heroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default HeroBanner;
