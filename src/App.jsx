import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import Update from './pages/Update';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';

  
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Restaurant />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/update/:restaurantId' element={<Update />}></Route>
          <Route path='/Signin' element={<Signin />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Logout' element={<Logout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}   

export default App;
