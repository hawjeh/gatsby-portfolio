import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

// import * as Styled from './styles';

const ConctactInfo = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: frontmatter___cover___absolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  // const contacts = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div style={{ width: '100%' }}><p class="text-center">Nothing Special</p></div>
      {/* {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, icon, content }
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <InfoBlock icon={icon} title={title} content={content} center />
          </Styled.ContactInfoItem>
        );
      })} */}
    </Container>
  );
};

export default ConctactInfo;
