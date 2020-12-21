import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Question from '../Components/Question';
import Button from 'react-bootstrap/Button';

const API_FILM = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const API_MUSIC = "https://opentdb.com/api.php?amount=10&category=12&type=multiple";
const API_TELEVISION = "https://opentdb.com/api.php?amount=10&category=14&type=multiple";
const API_GENERAL_KNOWLEDGE = "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

const Quiz = () => {

    const [apis, setApis] = useState({
        Film: "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
        Music: "https://opentdb.com/api.php?amount=10&category=12&type=multiple",
        Television: "https://opentdb.com/api.php?amount=10&category=14&type=multiple",
        'General Knowledge': "https://opentdb.com/api.php?amount=10&category=9&type=multiple",
    })

    const [questions, setQuestions] = useState([]);
    const topic = useSelector(state => state.topic);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [finish, setFinish] = useState(false);
    const score = useSelector(state => state.score);

    useEffect(() => {
        axios.get(`${apis[`${topic}`]}`)
            .then(res => {
                console.log(res.data.results);
                setQuestions(res.data.results);
            }).catch(error => alert(error));
    }, []);

    const nextQuestion = () => {
        console.log(questionNumber);
        setQuestionNumber(questionNumber => questionNumber + 1);
    }

    const finishFunc = () => {
        setFinish(true);
    }

    const refresh = () => {
        window.location.reload();
    }


    return (
        <>
            {
                finish ?
                    <div className='finish'>
                        <h1>You got {score}/10!</h1>
                        <div className="backHomeDiv">
                            <Button 
                            variant="outline-primary" 
                            size="lg" block
                            onClick={refresh}>Back to Home</Button>
                        </div>

                    </div>
                    :
                    <div className='questionsDiv'>
                        {
                            questions.map((q, index) => {
                                return <Question key={index} q={q}
                                    nextQuestion={nextQuestion}
                                    questionNumber={questionNumber}
                                    index={index}
                                    finish={finishFunc} />
                            })
                        }
                    </div>

            }
        </>



    )
};

export default Quiz;

