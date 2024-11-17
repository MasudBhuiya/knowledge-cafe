// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>This is Blogs: {blogs.length}</h1>
            <div>
                {
                    blogs?.map(blog => <Blog key={blog.id} blog={blog} handleReadingTime={handleReadingTime} handleBookMark={handleBookMark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;