import { auth, provider } from "../../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { LoginButton, LoginContainer, LoginText } from "./login.styles"

const Login = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        navigate("/")
    }

    return (
        <LoginContainer>
            <LoginText>Sign In With Google to Continue</LoginText>
            <LoginButton onClick={signInWithGoogle}>Sign In With Google</LoginButton>
        </LoginContainer>
    )
}

export default Login