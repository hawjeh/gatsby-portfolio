import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

const Showcases = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "showcase section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "showcases" } } }, sort: { fields: frontmatter___cover___absolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              url
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const showcases = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Showcases>
        <Carousel>
          {showcases.map((item) => {
            const {
              id,
              frontmatter: { cover, title, url }
            } = item.node;

            return (
              <Styled.Showcase key={id}>
                <Styled.Link {...(url ? {href: url} : {})} rel="noreferrer noopener" {...(url ? {target: '_blank'} : {})}>
                  <Styled.Image>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} />
                  </Styled.Image>
                  <Styled.Title>{title}</Styled.Title>
                </Styled.Link>
              </Styled.Showcase>
            );
          })}
        </Carousel>
      </Styled.Showcases>
    </Container>
  );
};

export default Showcases;
