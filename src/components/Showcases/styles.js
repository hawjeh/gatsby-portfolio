import styled from 'styled-components';
import tw from "twin.macro"

export const Showcases = styled.div`
  ${tw`max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4`};
`;

export const Showcase = styled.div`
  ${tw`flex flex-col items-center text-center mt-4`};
`;

export const Image = styled.figure`
  ${tw`mx-auto border border-purple-500`};

  img {
    ${tw`border-4 border-white`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;