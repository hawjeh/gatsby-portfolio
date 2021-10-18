import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, keywords, image, lang, meta, title }) => {
  const { site, profileImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        profileImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const metaKeywords = keywords || '';
  description = description ? description + ' | Haw Jeh' : description;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image ? `${window.location.origin}${image}` : `${window.location.origin}${profileImage.childImageSharp.fluid.src}`;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: metaKeywords ? `Haw Jeh, Portfolio, Software Developer, ${metaKeywords}` : 'Haw Jeh, Portfolio, Software Developer'
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: `${metaImage}`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: ``
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.any,
  title: PropTypes.string.isRequired
};

export default SEO;
