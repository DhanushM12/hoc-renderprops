import React from 'react';

const Counter = ({count, update}) => {
    return (
    <div>
        <button onClick={() => update("Inc")}>Increment</button>
        <p>{count}</p>
        <button onClick={() => update("Dec")}>Decrement</button>
    </div>
    );
}
export default Counter;