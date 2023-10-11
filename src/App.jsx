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
import Layout from './components/Layout';
import ProtectedRoute from './pages/ProtectedRoute';
import NotAllow from './pages/NotAllow';
import AdminRoute from './pages/AdminRoute';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Restaurant />}></Route>
          <Route
            path="/add"
            element={
              <AdminRoute>
                <Add />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/update/:restaurantId" element={<Update />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/NotAllow" element={<NotAllow />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}   

export default App;
