import React, { useState, useEffect } from 'react';

const Question = (props) => {

    const [answers, setAnswers] = useState([]);
    const [questionClassName, setClassName] = useState('questionSlideIn');
    const [questionNumber, setQuestionNumber] = useState(0);

    useEffect(() => {
        const array = [];
        props.q.incorrect_answers.forEach(element => {
            array.push(element);
        });
        array.push(props.q.correct_answer);
        setAnswers(shuffle(array));
        console.log(props.questionNumber, props.index);
        setQuestionNumber(props.index);
        // if (props.questionNumber === props.index) {
        //     setClassName('questionSlideIn');
        // }
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

    const propsChangeClassName = () => {
        if (props.questionNumber === questionNumber) {
            setClassName('questionSlideIn');
        }
    }

    const changeClassName = () => {
        setClassName('questionSlideOut');
    }

    const show = () => {
        if (props.questionNumber === props.index) {
            return <div className={questionClassName}>
                <h2>{props.q.question}</h2>
                <ul>
                    {
                        answers.map(answer => {
                            return <li>{answer}</li>
                        })
                    }
                </ul>
                <button onClick={() => {
                    changeClassName();
                    setTimeout(() => {
                        props.nextQuestion();
                    }, 1000);
                }}>sumbit</button>
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