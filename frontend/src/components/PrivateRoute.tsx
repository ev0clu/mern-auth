import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface RootState {
  auth: {
    userInfo: {
      name: string;
      email: string;
      password: string;
    };
  };
}

const PrivateRoute = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
