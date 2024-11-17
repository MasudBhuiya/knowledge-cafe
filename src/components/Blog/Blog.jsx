// import React from 'react';

import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleBookMark, handleReadingTime}) => {
    // console.log(blog);
    return (
        <div className="mb-5">
            <img className="w-full" src={blog?.cover} alt="" />
            
            <div className="flex justify-between items-center my-5">
                <div className="flex gap-3 ">
                <img className="w-14" src={blog?.author_img} alt="" />
                <div>
                        <h1 className="text-2xl">{blog?.author}</h1>
                        <h1>{blog?.posted_date}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-xl">{blog?.reading_time} min read </h1>
                    <button onClick={()=>handleBookMark(blog)}><IoBookmarkOutline className="text-2xl" /></button>
                </div>
            </div>
            <h1 className="text-4xl">{blog?.title}</h1>
            <div>
                {
                    blog?.hashtags.map((singleTag, index) => <span key={index}><a href="" className="text-xl ms-2 text-blue-500">#{singleTag}</a></span>)
                }
            </div>
            <button className="btn text-blue-500 underline" onClick={() => handleReadingTime(blog?.reading_time, blog?.id)}>Marks as read</button>
        </div>
    );
};

export default Blog;