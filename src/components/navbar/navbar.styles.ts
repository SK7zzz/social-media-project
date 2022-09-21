import styled from "styled-components/";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const NavbarContainer = styled.div`
  ${tw`
    m-0
    p-0
    flex
    justify-between
    items-center
    bg-gray-900
    px-16
    h-12
  `}
`;

export const LinksContainer = styled.div`
  ${tw`
    m-0
    p-0
    h-full
    w-1/2
    flex
    justify-around
    items-center
  `}
`;

export const CustomLink = styled(Link)`
  ${tw`
    text-white
    text-sm
    no-underline
    font-bold
    hover:underline
    hover:text-pink-500
  `}
`;

export const UserContainer = styled.div`
  ${tw`
    m-0
    p-0
    h-full
    w-1/2
    flex
    justify-end
    items-center
  `}
`;

export const UserPic = styled.img`
  ${tw`
    h-8
    w-8
    rounded-full
    ml-4
  `}
`;

export const LogoutButton = styled(Button)`
  ${tw`
    h-8
  `}
`;
