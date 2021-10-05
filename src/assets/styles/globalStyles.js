import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }

  .format-html {
    h1, h2, h3, h4, h5, h6, h7 {
      font-weight: bold;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.25rem;
    }
    p {
      line-height: 1.5rem;
    }
    blockquote {
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      margin-left: 0px;
      border-left: 0.15rem solid;
    }
    ol,ul{
      list-style: auto;
      margin: 1rem auto;
      padding-inline-start: 40px;
    }
    code { 
      font-size: 0.9rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: .8em 1em;
      display: block;
      overflow-wrap: break-word;
      white-space: pre-wrap;
    }
    table {
      ${tw`table-auto`};
      margin-bottom: 3rem;
    }
    table td, table th {
      border: 1px solid;
      padding: 1rem;
    }
    table tr th {
      text-align: left;
    }
  }
`;
