import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type="text"></input>
            </div>

            <div className="widgets_widgetContainer">
                <h2>Whats going on?</h2>

                <TwitterTweetEmbed tweetId={"1125816749952249859"} />
                
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="hvsawal"
                    options={{height:400}}
                />

                <TwitterShareButton
                    url={"https://www.linkedin.com/in/harshvardhansawal"}
                    options={{text:"Well this worked out!", via:"hvsawal"}}
                />

            </div>
            <h2>Widgets</h2>
        </div>
    )
}

export default Widgets;