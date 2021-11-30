import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Certificates = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "certificates section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "certificates" } } }, sort: { fields: frontmatter___cover___absolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              description
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const certificates = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Certificates>
        {certificates.map((item) => {
          const {
            id,
            frontmatter: { title, icon, description }
          } = item.node;

          return (
            <Styled.CertificateItem key={id}>
              <InfoBlock icon={icon} title={title} content={description} />
            </Styled.CertificateItem>
          );
        })}
      </Styled.Certificates>
    </Container>
  );
};

export default Certificates;
