import styled from 'styled-components';
import tw from "twin.macro"
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-2 mr-2 px-8 rounded-full border border-purple-500 text-white`};

  ${({ primary }) => (primary ? tw`bg-purple-500` : tw`text-purple-500`)};

  ${({ block }) => block && tw`w-full`};
`);
