// src/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { account } from './Appwrite';

const FarmerProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
               const res = await account.get(); // This will throw an error if the user is not authenticated
               console.log(res)
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Optional: Show a loading spinner while checking authentication
    }

    return isAuthenticated ? children : <Navigate to="/company/login" />;
};

export default FarmerProtectedRoute;
