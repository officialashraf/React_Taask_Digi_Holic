import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
      phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').required('Required'),
    }),
    onSubmit: values => {
            // Store the user information in local storage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(values);
            localStorage.setItem('users', JSON.stringify(users));
            navigate('/home');
      
    },
  });

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
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
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <button type="submit">Sign Up</button>
        If you have alredy account <Link to="/login">Login Please!</Link>
      </form>
    </div>
  );
};

export default Signup;
