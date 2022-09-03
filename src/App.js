
import './App.css';
import ChangeCounter from './components/ChangeCounter';

import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      
      <Home />
      <About />
      <Products />
      {/* 3 - alterando o valor do context */}
      <ChangeCounter />
    </div>
  );
}

export default App;
