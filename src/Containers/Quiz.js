import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Question from '../Components/Question';

const API_FILM = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const API_MUSIC = "https://opentdb.com/api.php?amount=10&category=12&type=multiple";
const API_TELEVISION = "https://opentdb.com/api.php?amount=10&category=14&type=multiple";
const API_GENERAL_KNOWLEDGE = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

const Quiz = () => {

    const [apis, setApis] = useState({
        Film: "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
        Music: "https://opentdb.com/api.php?amount=10&category=12&type=multiple",
        Television: "https://opentdb.com/api.php?amount=10&category=14&type=multiple",
        'General Knowledge':  "https://opentdb.com/api.php?amount=10&category=9&type=multiple",
    })

    const [questions, setQuestions] = useState([]);
    const topic = useSelector(state => state.topic);
    const [questionNumber, setQuestionNumber] = useState(0);

    useEffect(() => {
        axios.get(`${apis[`${topic}`]}`)
        .then(res => {
            console.log(res.data.results);
            setQuestions(res.data.results);
        }).catch(error => alert(error));
    }, []);

    const nextQuestion = () => {
        setQuestionNumber(prevState => prevState + 1);
    }


    return (
        <div className='questionsDiv'>
            <h1>Quiz</h1>
            {
                questions.map((q, index) => {
                    return <Question key={index} q={q} 
                    nextQuestion={nextQuestion} 
                    questionNumber={questionNumber}
                    index={index}/>
                })
            }
        </div>

    
    )
};

export default Quiz;

