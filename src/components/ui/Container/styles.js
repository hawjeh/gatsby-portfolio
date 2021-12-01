import styled from 'styled-components';
import tw from "twin.macro"

export const Container = styled.div`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-0`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;
