import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Timer from './Timer';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint } from '../actions';
import AlertDismissible from './AlertDismissible';


const Question = (props) => {

    const [answers, setAnswers] = useState([]);
    const [oneAnswerCheck, setOneCheck] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });
    const [questionClassName, setClassName] = useState('questionSlideIn');
    const [questionNumber, setQuestionNumber] = useState(0);
    const dispatch = useDispatch();
    const selection = useSelector(state => state.selection);
    
    useEffect(() => {
        const array = [];
        props.q.incorrect_answers.forEach(element => {
            array.push(element);
        });
        array.push(props.q.correct_answer);
        setAnswers(shuffle(array));
        setQuestionNumber(props.index);
    }, []);

    const shuffle = (array) => {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);

            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    const changeClassName = () => {
        setClassName('questionSlideOut');
    }

    const regEx = (q) => {
        let replace = /&quot;|&#039;/
        let re = new RegExp(replace, "g");
        let newStr = q.replace(re, "'");
        return newStr;
    }

    const checkAnswer = () => {
        if (selection === props.q.correct_answer) {
            dispatch(addPoint());
        }
    }

    const checkFinish = () => {
        if (props.questionNumber === 8) {
            props.finish();
        }
    }

    const onlyOneAnswer = (index) => {
        setOneCheck(prevState => {
            return {...prevState, [index]: !prevState[index]}
        });
    }

    const showAlert = () => {
        let i = 0;
        for (const key in oneAnswerCheck) {
            if (oneAnswerCheck[key] === true) {
                i = i + 1;
            }
        }

        if (i >= 2) {
           return <AlertDismissible/>
            // alert('wrong');
        }
    }



    const show = () => {
        if (props.questionNumber === props.index) {
            return <div className={questionClassName}>
                <div className="questionText">
                    {/* <h2>{props.q.question}</h2> */}
                    <p className="h2Question">{regEx(props.q.question)}</p>
                    <Timer changeClassName={changeClassName}
                    nextQuestion={props.nextQuestion}
                    checkAnswer={checkAnswer}
                    checkFinish={checkFinish}/>
                </div>

                <div className="answerContainerDiv">
                    {
                        answers.map((answer, index) => {
                            return <Answer key={index} 
                            answer={answer}
                            index={index}
                            onlyOneAnswer={onlyOneAnswer}
                            showAlert={showAlert}/>
                        })
                    }
                </div>
                {showAlert()}
                {/* <Button onClick={() => {
                    checkAnswer();
                    changeClassName();
                    setTimeout(() => {
                        props.nextQuestion();
                        checkFinish();
                    }, 1000);
                }} variant="outline-primary" size="lg" block>Submit</Button> */}
                <Button variant="outline-primary" size="lg" block disabled></Button>
            </div>
        }
    }

    return (
        <>
            {show()}
            
        </>

    )
}

export default Question;