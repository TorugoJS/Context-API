// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {

// const {counter} = useContext(CounterContext)

const {counter} = useCounterContext()

// 5 - context mais complexo
const { color} = useTitleColorContext();

// 6 - alterando context complexo

  return (
    <div>
        <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>

    </div>
  )
}

export default About;