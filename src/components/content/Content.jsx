import React from 'react';
import "./Content.scss";
import { ContentCard } from '../contentcard/ContentCard'
import { Post } from '../post/Post'


export const Content = () => {
  return (
    <div className='content'>
      <Post />
      <div className='content__container'>   
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />        
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>   
    </div>
  );
};
