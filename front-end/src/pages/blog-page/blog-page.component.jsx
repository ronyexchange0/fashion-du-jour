import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import Post from '../../components/post/post.component';
import { getPostsAction } from '../../redux/blog/blog.actions';

import "./blog-page.style.scss";

const BlogPage = () => {
    
    const postsList  = useSelector(state => state.blog)
    const {error, posts, loading } = postsList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsAction()) 
    }, [dispatch])

    return (
        <main className="about-page">
            <div className="container">
                <h1>Blog</h1>
                <div className="row mx-0">
                    {
                        posts.map(({title, createdAt, thumbnail, _id}) => (
                            <Post key={_id} id={_id} title={title} date={createdAt} thumbnail={thumbnail}/>
                        ))
                    }                       
                </div>  
            </div>
        </main>
    )
}

export default BlogPage
