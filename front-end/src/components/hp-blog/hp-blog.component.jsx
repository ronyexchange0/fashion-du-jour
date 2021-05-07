import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";


import Button from "../button/button.component";
import Post from '../post/post.component';
import { getPostsAction } from '../../redux/blog/blog.actions';

import "./hp-blog.style.scss";

const HpBlog = () => {
    
    const postsList  = useSelector(state => state.blog)
    const {error, posts, loading } = postsList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsAction()) 
    }, [dispatch])
    
    return (
        <section className="hp-blog">
            <div className="container">
                <h2>Latest News</h2>
                <div className="row mx-0">

                    {
                        posts.slice(0,4).map(({title, createdAt, thumbnail, _id}) => (
                            <Post key={_id} id={_id} title={title} date={createdAt} thumbnail={thumbnail}/>
                        ))
                    }                        
                    <div className="btn-wrapper text-center w-100">
                        <Button text="View More" link="/blog"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HpBlog
