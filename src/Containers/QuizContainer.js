import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Topic from '../Components/Topic';
import Quiz from './Quiz';

const QuizContainer = () => {

    const selected = useSelector(state => state.selected);

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
                {
                    selected ? <Quiz /> : <Topic />
                }
            </div>

        </div>

    );
}

export default QuizContainer;