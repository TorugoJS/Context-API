// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {

    // const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext();

  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Home