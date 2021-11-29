import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import JsToExcel from 'components/SampleTool/JsToExcel';

const JsToExcelPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="HTML to Excel Sample Page" />
      <JsToExcel />
      <hr />
    </Layout>
  );
};

export default JsToExcelPage;
