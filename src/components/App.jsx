import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';
import { useDispatch } from 'react-redux';
import { getCurrentUserAsync } from '../redux/auth/authOperations';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Recommended = lazy(() => import('../pages/Recommended'));
const Library = lazy(() => import('../pages/Library'));

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUserAsync())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/" element={<PrivateRoute><SharedLayout/></PrivateRoute>}>
        <Route index element={<Navigate to="recommended"/>}/>
        <Route path="recommended" element={<Recommended />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  );
}

export default App;
