import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import News from "./News/News";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
    return(
        <main>
            <ProfileInfo/>
                    <MyPosts posts={props.state.posts}/>
                          <News/>
        </main>
    )
}
export default Profile;