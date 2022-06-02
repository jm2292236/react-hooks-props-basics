import React from "react";
import Comment from "./Comment";

function BlogContent(props) {
    if (!props.isPublished) {
        return <h1>Unpublished blog! Try it later.</h1>;
    } else {
        return (
            <div id="blog-content">
                {props.articleText}
                <Comment commentText="I agree with this statement. - Angela Merkel" />
                <Comment commentText="A universal truth. - Noam Chomsky" />
                <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
            </div>
        )
    }
}

export default BlogContent;
