import React from "react";
import { Link } from 'react-router-dom'
const Posts_Cards = ({ posts }) => {
  return (
    <div className="posts col-lg-6 col-md-6 col-sm-12 " key={posts.header}>
      <Link to="#">
        <div className="postsheader text-center">
          <h4>{posts.header}</h4>
        </div>
        <hr />
        <div>{posts.postImage}
        </div>

        <h6 className="ml-2 mt-2">{posts.title}</h6>
      </Link>
      <div className="postparagraph ml-2">
        <span>{posts.paragraph}</span>
      </div>
    </div>
  );


};

export default Posts_Cards;
