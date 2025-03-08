import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Replace this with your actual user data and authentication logic
        const users = [
            { username: 'user1', password: 'password1' },
            { username: 'user2', password: 'password2' },
        ];

        const authenticatedUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (authenticatedUser) {
            setUser(authenticatedUser);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


 