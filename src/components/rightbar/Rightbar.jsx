import './rightbar.css';

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt=""
                        className="birthdayImg" />
                    <span className="birthText">
                        <b>LIU Yi</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContaioner">
                            <img
                                src="/assets/person/3.jpeg"
                                alt=""
                                className="classbarProfileImg" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
