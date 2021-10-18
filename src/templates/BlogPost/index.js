import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ShareTool from 'components/ShareTool';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const postFields =  pageContext.post.node.frontmatter;
  const shareTitle = `Haw Jeh | ${post.frontmatter.title}`
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={postFields.description} keywords={postFields.tags.join(', ')} image={post.frontmatter.cover.childImageSharp.fluid.src} />
      <Container section>
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <FormatHtml content={post.html} />
        <ShareTool title={shareTitle} description={postFields.description} url={location.href} />
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
