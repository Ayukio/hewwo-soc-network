import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.redd.it/c7j2mr2r31r31.png" alt=""/>

            <div className={s.post}>

                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.likes}>
                    <span>likes  </span>
                    {props.likesCount}
                </div>
            </div>

        </div>
    )
}
export default Post;