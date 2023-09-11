import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Restaurant />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}   

export default App;
