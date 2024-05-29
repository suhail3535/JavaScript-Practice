// src/Counter.js
import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
