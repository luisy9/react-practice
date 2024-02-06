import { useState } from 'react';
import './Comptador.css';

const Comptador = () => {

    const [count, setCount] = useState(0);

    const conlorText = count%2==0 ? "green" : "red";
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p className={{color: conlorText}}>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Comptador
