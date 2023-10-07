import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const GuardRoute = () => {
  const [user, _] = useState(true);

  const location = useLocation();

  if (user) {
    return <Outlet />;
  } else {
    return (
      <Navigate to="/" state={{ from: location.pathname }} replace />
    );
  }
};

export default GuardRoute;
