import React from 'react';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    RedditShareButton,
    RedditIcon,
    EmailShareButton,
    EmailIcon
  } from "react-share";

const ShareTool = ({ title, description, url }) => {

    const subject = `Share a post from hawjeh.com.  ${title}`;
    const body = `${description}`;

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem', fontSize: '.7rem' }}>
        <h6 style={{ fontWeight: 'bold', paddingTop: '.5rem', borderTop: '1px solid rgba(0,0,0,.2)'}}>Share this:</h6>
        <FacebookShareButton quote={title} url={url}><FacebookIcon size={32} round={true} /></FacebookShareButton>
        <TwitterShareButton title={title} url={url}><TwitterIcon size={32} round={true} /></TwitterShareButton>
        <LinkedinShareButton title={title} url={url} description={description} source="HawJeh.com"><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
        <WhatsappShareButton title={title} url={url}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
        <TelegramShareButton title={title} url={url}><TelegramIcon size={32} round={true} /></TelegramShareButton>
        <RedditShareButton title={title} url={url}><RedditIcon size={32} round={true} /></RedditShareButton>
        <EmailShareButton subject={subject} body={body} url={url}><EmailIcon size={32} round={true} /></EmailShareButton>
    </div>
  );
};

ShareTool.defaultProps = {
  url: ``,
  title: ``,
  description: ``
};

ShareTool.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ShareTool;
