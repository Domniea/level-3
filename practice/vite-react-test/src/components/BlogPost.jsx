import React from "react";

export default function BlogPost(props) {
    return (
        <div className="blog">
           <h2>{props.item.title}</h2>
           <h3>{props.item.subTitle}</h3>
           {/* <p>{`posted by ${props.item.author} on ${props.item.date}`}</p> */}
           <p>posted by <a href="post.html">{props.item.author}</a> on {props.item.date}</p>
        </div>
    )
}