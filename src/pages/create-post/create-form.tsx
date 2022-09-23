import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { FormContainer, Input, InputContainer, SubmitInput, TextArea } from './create-post.styles'



interface CreateFormData {
    title: string,
    description: string,
}

const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description"),

    })


    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        })

        navigate("/")
    }

    return (
        <FormContainer onSubmit={handleSubmit(onCreatePost)}>
            <InputContainer>
                <Input placeholder='Title...' {...register("title")} />
                <p style={{ color: "red" }}>{errors.title?.message}</p>
            </InputContainer>
            <InputContainer>
                <TextArea placeholder='What is happening...' {...register("description")} />
                <p style={{ color: "red" }}>{errors.description?.message}</p>
            </InputContainer>
            <SubmitInput type="submit" />
        </FormContainer>
    )
}

export default CreateForm