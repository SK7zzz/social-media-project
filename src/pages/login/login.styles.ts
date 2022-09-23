import styled from "styled-components/";
import tw from "twin.macro";

export const LoginContainer = styled.div`
  ${tw`
    p-0
    m-0
    flex-col
    text-center
  `}
`;

export const LoginButton = styled.button`
  ${tw`
    w-52
    h-16
    rounded-full
    border-white
    border-2
    border-solid
    text-white
    bg-transparent
    text-base
    hover:cursor-pointer
    hover:bg-pink-700
    hover:border-none
    hover:text-gray-900
    hover:font-bold
  `}
`;

export const LoginText = styled.p`
  ${tw`
    text-3xl
    font-bold
  `}
`;
