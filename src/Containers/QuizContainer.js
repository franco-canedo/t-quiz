import React, { useState } from 'react';

import Topic from '../Components/Topic';

const QuizContainer = () => {


    return (
        <div>
           <div className="header">
              
               <div className="title">
               <h1>T.Quiz</h1>
               </div>
               <div className="profileButton">
                    <h2>Profile</h2>
               </div>
                
           </div>
           <div>
               <Topic/>
           </div>

        </div>
        
    );
}

export default QuizContainer;