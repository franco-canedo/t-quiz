import React, { useState, useEffect } from 'react';

const Answer = ({answer}) => {
    const [selected, setSelected] = useState(false);
    const [className, setClassName] = useState("answerDiv");

    const classNameChange = () => {
        setSelected(prevState => !prevState);
        if (className === "answerDiv" || className === "answerDivDeselect") {
            setClassName("answerDivSelected");
        } else {
            setClassName("answerDivDeselect");
        }
        

    }

    return (
        <div className={className} onClick={classNameChange}>
            <p className="h2Question">{answer}</p>
        </div>
    )
}

export default Answer;
