import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import './Counter.css';


const Counter = () =>{

    const [count,setCount]=useState(0)

    const incrementCounter = (c) =>{
        setCount(count+c)
    }

    const decrementCounter = (c) =>{
        setCount(count-c)
    }

    const resetCounter = () =>{
        setCount(0)
    }

    return(
        <div>
            <div>
                <span className="count">{count}</span>
            </div>
            <CounterButton by={1} f1={incrementCounter} f2={decrementCounter}/>
            <CounterButton by={2} f1={incrementCounter} f2={decrementCounter}/>
            <CounterButton by={5} f1={incrementCounter} f2={decrementCounter}/>
            <button className="counterButton counterButtonReset" onClick={resetCounter}>Reset</button>
        </div>
    )
    
}


const CounterButton = (props) => {

    const c=props.by

    // const [count,setCount]=useState(0)

    // const incrementCounter = () =>{
    //     props.f1(c)
    // }
    // const decrementCounter = () =>{
    //     props.f2(c)
    // }

    return(
        <div className="counter">
            
            <div>
                <button   className="counterButton counterButtonInc" onClick={() => props.f1(c)}>+{c}</button>
                <button   className="counterButton counterButtonDec" onClick={() => props.f2(c)}>-{c}</button>
            </div>
        </div>
    )
}

export default Counter