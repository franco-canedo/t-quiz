import React, { useState, useEffect } from 'react';

import StartButton from './StartButton';
import TopicList from './TopicList';

const Topic = () => {

    const [topicMenu, setTopicMenu] = useState(false);
    const [topic, setTopic] = useState("");

   

    const enableTopicMenu = () => {
        setTopicMenu(true);
    }

    return (
        <div>
              {
                topicMenu ? <TopicList/> : 
                <StartButton 
                enableTopicMenu={enableTopicMenu}/>
            }
           
          

        </div>

    );
}

export default Topic;