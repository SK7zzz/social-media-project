import styled from "styled-components/";
import tw from "twin.macro";

export const MainPageContainer = styled.div`
  ${tw`
    w-full
    h-full
    text-center
  `}
`;

export const PostContainer = styled.div`
  ${tw`
    p-0
    m-auto
    bg-gray-900
    my-16
    w-1/2
    h-60
  `}

  p {
    ${tw`p-0 m-0`}
  }

  h1 {
    ${tw`p-0 m-0`}
  }
`;

export const TitleContainer = styled.div`
  ${tw`
    p-0
    m-0
    h-2/6
    flex
    items-center
    justify-center
    text-xl
  `}
`;
export const DescriptionContainer = styled.div`
  ${tw`
    p-0
    m-0
    h-2/6
    flex
    items-center
    justify-center
    text-xl
  `}
`;

export const UsernameContainer = styled.div`
  ${tw`
    p-0
    m-0
    h-1/6
    flex
    items-center
    justify-center
  `}
`;

export const LikesContainer = styled.div`
  ${tw`
    p-0
    m-0
    flex
    text-center
    items-center
    justify-center
    h-1/6
  `}

  p {
    ${tw`
      text-base
      ml-1
      font-bold
    `}
  }
`;

export const LikeButton = styled.button`
  ${tw`
    p-0
    m-0
    bg-transparent
    border-0
    hover:cursor-pointer
    hover:text-red-600
    text-white
  `}
`;
