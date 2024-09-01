
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
    // Check if admin is logged in
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');

    // If not logged in, redirect to admin login page
    if (!isAdminLoggedIn) {
        return <Navigate to="/admin" />;
    }

    // If logged in, render the protected route
    return children;
};

export default AdminPrivateRoute;
