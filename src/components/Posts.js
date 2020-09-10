import React from "react";
import PotsCards from './Cards/Posts_Cards '
import UpComing from '../images/UpComing.png'
import RecentlyHappened from '../images/Recently Happend.jpg'

const width = "100%"
const height = "auto"
const Plans = () => {
    const Posts = [
        {
            postImage: <img src={RecentlyHappened} width={width}
                style={{ border: '2px solid #3E597E', height: '235px' }}
                className="postImage"
            />,
            header: 'Recently Happened',
            title: 'Faculty of arts and design \"Now Open"',
            paragraph: 'if you have the talent, The BUE Faculty of Arts and Design will guide you in more than one Direction'
        },
        {
            postImage: <img src={UpComing} width={width} height={height}
                style={{ border: '2px solid #3E597E' }}
            />,
            header: 'UpComing',
            title: 'COVID-19 and Online Teaching:BUE\'s Staff Perspectives',
            paragraph: 'Acknowledgement To The great man who loves his country passionately To the Icon of the Egyptian industry To The Pioneer'
        },
    ]

    const allPosts = Posts.map((post) => {
        return <PotsCards posts={post} />;
    });
    return (
        <div className="allPosts pt-5">
            <div className="container">
                <div className="row">{allPosts}</div>
            </div>
        </div>
    );
}


export default Plans;
