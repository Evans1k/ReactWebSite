import classes from './Post.module.css';
function Post(props) {
    return (
        <div className={classes.postItem}>
                <img src={'https://www.amsj.com.au/wp-content/uploads/2020/05/AdobeStock_327556002-990x594.png'}/>
            {props.message}
            {props.likesCount}<span>like </span>
        </div>
)
}
export default Post;