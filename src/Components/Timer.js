import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(10);
    const [h1ClassName, setClassName] = useState('h1timer');


    useEffect(() => {
        if(!timeLeft) {
            // restart makes the modal appear
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
            <h1 className={h1ClassName}>{timeLeft}</h1>
        </div>
        
    )
}

export default Timer;