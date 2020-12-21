import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(9);
    const [h1ClassName, setClassName] = useState('h1timer');


    useEffect(() => {
        if(!timeLeft) {
            props.checkAnswer();   
            props.changeClassName();
            setTimeout(() => {
                props.nextQuestion();
                props.checkFinish();
            }, 1000);
            return;
        }
        const timer = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
                changeClassName();
        }, 1000)

        // returned function will be called on component unmount 
        return () => {
            clearInterval(timer);
            
        }
    }, [timeLeft, h1ClassName]);

    const changeClassName = () => {
        h1ClassName === 'h1timer' ? setClassName('h1timerRed') : setClassName('h1timer');
    }


    return (
        <div className="timerDiv">
            <p className={h1ClassName}>{timeLeft}</p>
        </div>
        
    )
}

export default Timer;