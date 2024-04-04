import React from 'react';
import './Post.scss';

export const Post = () => {
  return (
    <div className="post">
        <div className='post__container'>
            <h2>What's happening?</h2>
            <textarea placeholder="Write something exciting..." className="post__textarea"></textarea>
            <div className="post__actions">
                <button className="post__button">+ Image</button>
                <button className="post__button">+ URL</button>
                <button className="post__submit">Post</button>
            </div>
        </div>      
    </div>
  );
};
