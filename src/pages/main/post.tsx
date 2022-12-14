import { addDoc, collection, getDocs, deleteDoc, query, where, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { Post as IPost } from './main'
import { DescriptionContainer, LikeButton, LikesContainer, PostContainer, TitleContainer, UsernameContainer } from './main.styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
interface Props {
    post: IPost;
}

interface Like {
    likeId: string,
    userId: string
}


const Post = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);
    const [likes, setLikes] = useState<Like[] | null>(null)

    const likesRef = collection(db, "likes")

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
    }

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, { userId: user?.uid, postId: post.id })
            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user?.uid, likeId: newDoc.id }] : [{ userId: user?.uid, likeId: newDoc.id }])
            }
        } catch (err) {
            console.log(err)
        }

    }

    const removeLike = async () => {
        try {

            const likeToDeleteQuery = query(likesRef,
                where("postId", "==", post.id),
                where("userId", "==", user?.uid)
            );

            const likeToDeleteData = await getDocs(likeToDeleteQuery)
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, 'likes', likeId);

            await deleteDoc(likeToDelete);
            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId))
            }
        } catch (err) {
            console.log(err)
        }

    }

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

    useEffect(() => { getLikes() }, [])

    return (
        <PostContainer>
            <TitleContainer>
                <h1>
                    {post.title}
                </h1>
            </TitleContainer>

            <DescriptionContainer>
                <p>
                    {post.description}
                </p>
            </DescriptionContainer>

            <UsernameContainer>
                <p>
                    @{post.username}
                </p>
            </UsernameContainer>
            <LikesContainer>
                <LikeButton onClick={hasUserLiked ? removeLike : addLike}> {hasUserLiked ? <FavoriteIcon color='secondary' /> : <FavoriteIcon />} </LikeButton>
                {likes?.length !== 0 && <p>{likes?.length}</p>}
            </LikesContainer>


        </PostContainer>
    )
}

export default Post