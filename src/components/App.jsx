import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

const Register = lazy(() => import('../../src/pages/Register'));
const Login = lazy(() => import('../../src/pages/Login'));
const Recommended = lazy(() => import('../../src/pages/Recommended'));
const Library = lazy(() => import('../../src/pages/Library'));

function App() {
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
