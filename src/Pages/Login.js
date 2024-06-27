import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
//import axios from 'axios';

const Login = () => {
  const  navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
           // Check if the user exists in local storage
      let users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.email === values.email && user.password === values.password);
      
      if (user) {
        // Save the user data to local storage to simulate login session
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    },
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div  className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Login</button>
      If you don't have account Create Here!<Link to="/signup">Signup Please!</Link>
      </form>
    </div>
  );
};

export default Login;
