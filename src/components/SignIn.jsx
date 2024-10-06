import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext'; // Use default import
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { state, login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Used to navigate to HeroSection

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the navigate function as a callback for successful login
        login(email, password, () => {
            navigate('/'); // Redirect to the HeroSection on success
        });
    };

    return (
        <div className="flex justify-center items-center min-h-60 ml-10">
            <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Sign In</h2>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full mb-3 p-2 border rounded-md"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full mb-4 p-2 border rounded-md"
                    required
                />
                {state.loginError && <p className="text-red-500">{state.loginError.message}</p>}
                <button type="submit" className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md">
                    {state.isLoginPending ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    );
};

export default SignIn;
