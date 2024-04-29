
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import ViewSubmissions from './components/ViewSubmissions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/submissions' element={<ViewSubmissions/>}/>
      </Routes>
    </div>
  );
}

export default App;
