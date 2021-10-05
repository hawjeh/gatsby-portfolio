import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Certificates from 'components/Certificates';
import Skills from 'components/Skills';
import Showcases from 'components/Showcases';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Certificates />
    <hr />
    <Skills />
    <hr />
    <Showcases />
  </Layout>
);

export default ResumePage;
