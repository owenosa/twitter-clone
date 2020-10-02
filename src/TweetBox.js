import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase'
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState ("");
    const [tweetImage, setTweetImage] = useState ("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Owen Osagide",
            username: "owenosa",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://i.gifer.com/4j.gif'
        })
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="img/earth.jpg"></Avatar>
                    <input onChange = {e => setTweetMessage (e.target.value)} value = {tweetMessage} placeholder="Whats happening" />
                </div>
                <input onChange = {e => setTweetImage (e.target.value)} value = {tweetImage} className="tweetBox_imageInput" placeholder="Optional: Enter Image Url" type="text" />
                
                <Button onClick = {sendTweet} className="tweetBox__tweetButton"> Tweet </Button>
            </form>
        </div>
    );
}

export default TweetBox;