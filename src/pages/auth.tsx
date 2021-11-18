import React, { useState } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const ContactPage: React.FC = ({ location }) => {

  const search = location.search.substring(1);
  const value = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });
  const [callbackValue] = useState(value);

  return (
    <Layout>
      <SEO title="Auth" />
      <Container section>
        <TitleSection title="Auth" subtitle="Testing" center />
        <div style={{ width: '100%' }}>
          <p>Auth Callback Value: </p>
          <pre>
            {JSON.stringify(callbackValue, null, 2)}
          </pre>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
