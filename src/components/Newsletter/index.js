import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Newsletter = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter = markdownRemark.frontmatter;

  const onSubmitClick = () => {
    window.location = "mailto:hawjeh@gmail.com?subject=Get In Touch&body=Hello I am <john>, nice to meet you!";
  }

  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        <Styled.Form>
          {/* <Styled.Input type="text" placeholder={newsletter.namePlaceholder} />
          <Styled.Input type="email" placeholder={newsletter.emailPlaceholder} /> */}
          <Button primary onSubmitClick={onSubmitClick}>
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
