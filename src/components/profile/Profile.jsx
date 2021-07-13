import classes from '../componentsForCSS/Profile.module.css';

function Profile() {
    return(
        <div className={classes.profile}>
            <div><img src={'https://i.pinimg.com/originals/e5/8a/e5/e58ae5ca3f368c6e490602a511c05ed2.jpg'}/></div>
            <div>ava + description<img src={'https://lh3.googleusercontent.com/K1WoYsiKcdNCz_WQ4uiVd6B8Jocb--iVYnlgxahEHPgFu1ucDybfI57RQ_lwRb7IyisjpB92ZsQBmCb8meGnQeQGz2YNhNxMuF2rwRxDi28HMRxcknww_CUXNU5fqBpjpb7f0d71jmQ-o2bXf5GjevObAt0cF4YMMxSIuVIz8RZRd-bXzfeC6CgcYTH2D51dPTljTUCaPZWrG_lfLhvaLD68J_gvPx1mIVfK-_TEkWshnKwqXpvvu9_z6TlOVYSJQTUeHtVtFQGUBJ3_KphFAI_KRe6rganvoZubzxhj3HHW0yPDX9juz1n6ClnCTXm8bn6ij7lqjMovEoMO7KVtxW5XQsNaToSmLm72LmKQRNuQ7orIuO_IQpQ7H6W5HBCjbvIcn13P_yJPHm-qKvZM4auj-JHCtVbIFPBl3yz7qhLoR8kUBfPHfznLejv3oZpMWS2ZATv8kQSCtqeysSbQov0e16uhfXnRpTCPu_FXCMYygcxfPTiaBJRHrZmFzq0BPoIV9h5SZnDxRLAISh5E-Jg8AyYQWTmjx4dUDohRUADRCjU9D9JDACJG6rULtjKOt6fVfBPuz2nKZPeXdgabJrsYDJpdYz1sWmg9V4uDalCMyVft7Yrxxl_UhLymR4cHBk6E-JRqODaYG9xWwE5KDasUGQKcAnOaItifGoEHIDt8IqgoUoF431I-pTeAiwskem_SG9wt2Fsvu1fEBtnT7zG0=w497-h939-no?authuser=0'}/> </div>
            <div>My post
                <div>New post</div>
                <div className={classes.allOldestPost}>
                <div className={classes.postItem}>post 1</div>
                <div className={classes.postItem}>>post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;