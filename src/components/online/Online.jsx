import './online.css'


export default function Online({ user }) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContaioner">
                    <img
                        src={user.profilePicture}
                        alt=""
                        className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightUsername">{user.username}</span>
            </li>
        </div>
    )
}
