import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    const [tweetMessage] = useState("");
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://pbs.twimg.com/profile_images/753092433278341120/sJdStorh_bigger.jpg" />
                    <input
                        value = {tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"
                        />
                </div>
                <input className="tweetBox_imageInput" placeholder="Optional: Enter Image URL" type="text"/>
                <Button type="submit" className="tweetBox_tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
