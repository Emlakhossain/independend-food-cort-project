import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import icon from '../../images/login-logo.png';
import Loading from '../SharePage/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    if (loading || loading1) {
        return <Loading></Loading>;
    }
    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (error1) {
        return (
            <div>
                <p>Error: {error1.message}</p>
            </div>
        );
    }

    if (user1) {
        navigate('/home')
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleLoginPageSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <>
            <div className='container w-50 border mt-4 p-3'>
                <h2 className='text-center text-primary my-5'>Please Login</h2>
                <Form onSubmit={handleLoginPageSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to Our Site? <span className='register text-danger' onClick={handleRegister}>Register</span></p>
                <div className=' '>
                    <p>{error}</p>

                </div>

            </div>
            <div className='text-center mt-2'>
                <p>------------Or-------------</p>
            </div>
            <div className='sign-btn'>
                <span><img height={30} src={icon} alt="" /><Button className='' onClick={() => signInWithGoogle()}>Google Sign In</Button></span>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;