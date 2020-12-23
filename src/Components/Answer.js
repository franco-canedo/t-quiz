import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selection } from '../actions';

const Answer = (props) => {
    const [selected, setSelected] = useState(false);
    const [className, setClassName] = useState("answerDiv");
    const dispatch = useDispatch();

    const classNameChange = () => {
        dispatch(selection(props.answer));
        props.onlyOneAnswer(props.index);
        // props.showAlert();
        setSelected(prevState => !prevState);
        if (className === "answerDiv" || className === "answerDivDeselect") {
            setClassName("answerDivSelected");
        } else {
            setClassName("answerDivDeselect");
        }
    }

    const regEx = (answer) => {
        let replace = /&quot;|&#039;/
        let re = new RegExp(replace, "g");
        let newStr = answer.replace(re, "'");
        return newStr;
    }

    return (
        <div className={className} 
        onClick={classNameChange}> 
            <p className="h2Question">{regEx(props.answer)}</p>
        </div>
    )
}

export default Answer;
