import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Library from '../pages/Library';
import Recommended from '../pages/Recommended';
import Login from '../pages/Login';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

function App() {
  return (
    <Routes>
      <Route path="/read-journey/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/read-journey/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/" element={<PrivateRoute><SharedLayout/></PrivateRoute>}>
        <Route index element={<Navigate to="/recommended"/>}/>
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/library" element={<Library />} />
      </Route>
    </Routes>
  );
}

export default App;
