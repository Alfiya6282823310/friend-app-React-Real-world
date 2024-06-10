import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Search from './Components/Search';
import Viewall from './Components/Viewall';
import logo from './logo.svg';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/view' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
