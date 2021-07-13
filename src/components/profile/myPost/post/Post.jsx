import classes from './Posts.module.css';
function Posts() {
    return (
        <div className={classes.allOldestPost}>
            <div className={classes.tittleOfPosts}>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Deleted post</button>
            <div className={classes.postItem}>
                <img src={'https://www.amsj.com.au/wp-content/uploads/2020/05/AdobeStock_327556002-990x594.png'}/>

                post 1</div>
            <div className={classes.postItem}>>post 2</div>
        </div>

)
}
export default Posts;