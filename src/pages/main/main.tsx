import { getDocs, collection, } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from '../../config/firebase'
import { MainPageContainer } from "./main.styles"
import Post from "./post"

export interface Post {
    id: string,
    userId: string,
    title: string,
    username: string,
    description: string,
}

const Main = () => {

    const [postsList, setPostsList] = useState<Post[] | null>(null)
    const postsRef = collection(db, 'posts')

    const getposts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    }

    useEffect(() => { getposts() }, [])

    return (
        <MainPageContainer className="mainpagecontainer">
            {postsList?.map((post) => <Post key={post.id} post={post} />)}
        </MainPageContainer>
    )
}

export default Main