import React from 'react';
import './LogIn.css';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { AuthContext } from '../../context/AuthContext';

const LogIn = () => {
const location = useLocation();
const { loading, isAuthenticated, error, signIn } = useContext(AuthContext);
const defaultValues = {
    email: '',
    password: ''
    };
    const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({ defaultValues });

const onSubmit = async data => await signIn(data);

    if (isAuthenticated)
    return (
        <Redirect
        to={{
            pathname: location.state ? location.state.next : '/',
            from: location.pathname
        }}
        />
    );
    if (loading) return <Spinner animation='border' variant='primary' />;
    return (
        <Col md={4}>
            <Row>
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <Form.Group action="#">
                            <Form.Label>Create Account</Form.Label>
                            <Form.Control class="signup-container" controlId='email'>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button>Sign Up</button>
                                {errors.email && <Alert variant='danger'>{errors.email.message}</Alert>}
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div class="form-container sign-in-container">
                        <Form.Group action="#">
                            <Form.Label>Sign in</Form.Label>
                            <Form.Control class="login-container" controlId='email'>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <a href="#">Forgot your password?</a>
                                <button>Sign In</button>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Col>
    );
};

export default LogIn;