import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isliked, setIsliked] = useState(false)

    const likeHandler = () => {
        setLike(isliked ? like - 1 : like + 1)
        setIsliked(!isliked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img alt="" className="postProfileImg"
                            src={Users.filter(u => u.id === post.userId)[0].profilePicture} />
                        <span className="postUsername">
                            {Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" onClick={likeHandler} className='likeIcon' />
                        <img src="/assets/heart.png" alt="" className='likeIcon' />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
