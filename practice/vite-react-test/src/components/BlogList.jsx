import React from 'react'
import BlogPost from './BlogPost'
import data from './data'

export default function BlogList() {
    const newBlog = data.map(blog => {
        return <BlogPost 
                    key={blog.id}
                    item={blog}
                    // title={blog.title}
                    // subTitle={blog.subTitle}
                    // author={blog.author}
                    // date={blog.date}

                />
    })
    return (
        <div className='main'>
            {newBlog}
        </div>
    )
}