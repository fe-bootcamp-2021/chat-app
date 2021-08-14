import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import { TelegramLogo } from '../Icons/icons';
import classes from './Register.module.css';
import signUpWithEmailAndPassword from '../../services/signUpWithEmailAndPassword';

function Register() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(9, 'Must be 9 characters or less')
        .required('Name is required')
        .min(3, 'Name must contain at least 3 characters'),
      surname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Surname is required')
        .min(9, 'Surname must contain at least 9 characters'),
      email: Yup.string().email('Enter a valid email').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
      repeatPassword: Yup.string()
        .required('Repeat password is required')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
    }),

    onSubmit: (values) => {
      history.push('/');
    },
  });

  const handleClick = () => {
    signUpWithEmailAndPassword(formik.values);
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.logo}>
        <TelegramLogo />
      </div>
      <h1 className={classes.loginFormTitle}>Sign Up to Telegram</h1>
      <Link to='/'>Log in</Link>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          label='Name'
          autoFocus
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={classes.errorMessage}>{formik.errors.name}</div>
        ) : null}
        <Input
          id='surname'
          name='surname'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          label='Surname'
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className={classes.errorMessage}>{formik.errors.surname}</div>
        ) : null}
        <Input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label='Email'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={classes.errorMessage}>{formik.errors.email}</div>
        ) : null}
        <Input
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label='Password'
          autocomplete=''
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={classes.errorMessage}>{formik.errors.password}</div>
        ) : null}
        <Input
          id='repeatPassword'
          name='repeatPassword'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          label='Repeat password'
          autocomplete=''
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className={classes.errorMessage}>{formik.errors.repeatPassword}</div>
        ) : null}
        <button type='submit' onClick={handleClick} className={classes.loginBtn}>
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Register;
