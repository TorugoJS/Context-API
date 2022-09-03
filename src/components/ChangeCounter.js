// 3 - alterando context

import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext);


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>
                Adicionar
            </button>

            <button onClick={() => setCounter(counter - 1)}>
                Remover
            </button>

        </>
    )
}

export default ChangeCounter;