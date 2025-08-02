import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const Loggedinuser = result.user;
                console.log("Logged in user:", Loggedinuser);
                const user = { email };

                
                axios.post('https://fixolyserver.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log("JWT response:", res.data);
                        

                    //    save ls 
                        if (res.data?.token) {
                            localStorage.setItem('token', res.data.token);
                            console.log("JWT Token saved to localStorage:", res.data.token);
                        }

                        navigate(location?.state ? location?.state : '/')
                    })
                    .catch(err => console.error("JWT Error:", err));
            })
            .catch(error => console.log("Login error:", error.message));
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name="email" placeholder="Email" required />

                                    <label className="label">Password</label>
                                    <input type="password" className="input" name="password" placeholder="Password" required />

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-primary">Login</button>
                                </fieldset>
                            </form>

                            <p className='my-4 text-center'>
                                New to Fixoly? <Link className='text-red-600' to='/signup'>Sign Up</Link>
                            </p>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <p className="py-6 mx-auto w-1/2">
                            <img src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_items_boosted&w=740" alt="" />
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;