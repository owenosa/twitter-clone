import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets(){
    return(
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>


                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "snapgoal"
                    options = {{ height: 700 }} 
                    />

                <TwitterShareButton 
                    url={"https://facebook.com/espn"}
                    options={{ text: "manchester united is brilliant", via: "espn"}} 
                    />
            </div>
        </div>
    )
}

export default Widgets