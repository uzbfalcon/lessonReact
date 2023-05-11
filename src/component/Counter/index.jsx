import React, { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const plus = () => {
        setCounter(counter + 1);
    };
    const minus = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    )
}
export default Counter