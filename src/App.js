import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import CounterPage from './pages/CounterPage/CounterPage';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import UseEffectPage from './pages/UseEffectPage/UseEffectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/to-do' element={<ToDoPage />} />
        <Route path='/use-effect' element={<UseEffectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
