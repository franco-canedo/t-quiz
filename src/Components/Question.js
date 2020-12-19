import React, { useState, useEffect } from 'react';

const Question = (props) => {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const array = [];
        props.q.incorrect_answers.forEach(element => {
            array.push(element);
        });
        array.push(props.q.correct_answer);
        setAnswers(shuffle(array));
    }, []);

    const shuffle = (array) => {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);

            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        console.log(array);
        return array;
    }

    return (
        <div className="question">
            <h2>{props.q.question}</h2>
            <ul>
                {
                    answers.map(answer => {
                        return <li>{answer}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Question;