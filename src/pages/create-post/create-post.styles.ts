import styled from "styled-components/";
import tw from "twin.macro";

export const CreatePostContainer = styled.div`
  ${tw`
    m-0
    p-0
    w-full
    h-full
    flex
    text-center
    items-center
    justify-center    
  `}
`;

export const FormContainer = styled.form`
  ${tw`
    h-3/4
    w-1/2
    bg-gray-900
    flex-col
    items-center
    justify-around
    m-auto
  `}
`;

export const InputContainer = styled.div`
  ${tw`
   my-24
  `}
`;

export const Input = styled.input`
  ${tw`
    p-0
    bg-transparent
    text-white
    h-12
    w-72
    border-0
    border-b-2
    border-white
    text-xl
    focus:outline-none
  `}
`;

export const TextArea = styled.textarea`
  ${tw`
    p-0
    bg-transparent
    text-white
    h-24
    w-72
    border-0
    border-b-2
    border-white
    text-xl
    resize-none
    font-mono
    focus:outline-none
    placeholder:font-medium
  `}
`;

export const SubmitInput = styled.input`
  ${tw`
    p-0
    bg-transparent
    text-white
    h-12
    w-72
    border-0
    border-b-2
    border-white
    text-xl
    focus:outline-none
    hover:cursor-pointer
    hover:border-pink-700
  `}
`;
