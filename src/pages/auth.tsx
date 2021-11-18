import React, { useState, useEffect } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const ContactPage: React.FC = ({ location }) => {

  const [callbackValue, setCallbackValue] = useState<string>('');

  useEffect(() => {
    const search = location.search.substring(1);
    const newVal = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });
    setCallbackValue(JSON.stringify(newVal, null, 2));
  }, []);

  return (
    <Layout>
      <SEO title="Auth" />
      <Container section>
        <TitleSection title="Auth" subtitle="Testing" center />
        <div style={{ width: '100%' }}>
          <p>Auth Callback Value: </p>
          <pre>
            {callbackValue}
          </pre>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
