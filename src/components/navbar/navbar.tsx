import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { CustomLink, LinksContainer, NavbarContainer, UserContainer, UserPic, LogoutButton } from './navbar.styles'
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <NavbarContainer>
            <LinksContainer>
                <CustomLink to="/"> Home </CustomLink>
                {!user ? (
                    <CustomLink to="/login"> Login </CustomLink>
                ) : (
                    <CustomLink to="/createpost"> Create Post </CustomLink>
                )}
            </LinksContainer>

            <UserContainer>
                {user && (
                    <>
                        <LogoutButton size="large" color="secondary" variant="contained" endIcon={<LogoutIcon />} onClick={signUserOut}>Log Out</LogoutButton>
                        <UserPic src={user?.photoURL || ""} width="100" height="100" />
                    </>
                )}
            </UserContainer>
        </NavbarContainer>
    )
}

export default Navbar