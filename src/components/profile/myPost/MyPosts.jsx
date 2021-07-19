import classes from './MyPosts.module.css';
import Post from "./post/Post";
function MyPosts(props) {
/*    let myPostsData= [
        {uniquePostId: 1, postMessage: "Hello, new post", likesCounter: 1},
        {uniquePostId: 2, postMessage: "Post 2", likesCounter: 1},
        {uniquePostId: 3, postMessage: "Post 3", likesCounter: 1},
        {uniquePostId: 4, postMessage: "Post 4", likesCounter: 1},
        {uniquePostId: 5, postMessage: "Post 5", likesCounter: 1}
    ]*/
    debugger;
    let myPostsElements = props.state.posts
        .map(mpElement => <Post uniquPostId={mpElement.uniquePostId} message={mpElement.postMessage} likesCount = {mpElement.likesCounter}/>)
    return (
        <div className={classes.allOldestPost}>
            <div className={classes.tittleOfPosts}>
                My posts
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            <button>Deleted post</button>
            </div>
            <div className={classes.separatePosts}>
                {myPostsElements}
            {/*<Post uniquePostId={myPostsData[0].uniquePostId} message={myPostsData[0].postMessage} likesCount={myPostsData[0].likesCounter}/>*/}
            </div>

        </div>

    )
}

export default MyPosts;