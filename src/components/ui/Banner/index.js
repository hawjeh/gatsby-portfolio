import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

const Banner = ({ title, subtitle, content, linkTo, linkText, link2To, link2Text }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>
        <FormatHtml content={content} />
      </Styled.Content>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
      <Link to={link2To}>
        <Button primary>{link2Text}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link2To: PropTypes.string.isRequired,
  link2Text: PropTypes.string.isRequired
};

export default Banner;
