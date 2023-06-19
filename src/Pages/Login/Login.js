import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { getAuthUser, setAuthUser } from '../../localStrorage/Strorage';


const Login = () => {
  return (
    <div className='login-form'>
      <Form>
        <Form.Group className="mb-3 email-group" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 password-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Button variant="primary" className="submit-btn" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;