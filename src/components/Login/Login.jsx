import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import { TelegramLogo } from "../Icons/icons";
import classes from "./Login.module.css";
import signInWithEmailAndPassword from "../../services/signInWithEmailAndPassword";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password should be of minimum 8 characters length"),
    }),

    onSubmit: (values) => {},
  });

  const handleClick = () => {
    signInWithEmailAndPassword(formik.values);
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.logo}>
        <TelegramLogo />
      </div>
      <h1 className={classes.loginFormTitle}>Sign In to Telegram</h1>
      <Link to="/register">Create Account</Link>
      <p>Please confirm your email and enter your password.</p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label="Email"
          autoFocus
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={classes.errorMessage}>{formik.errors.email}</div>
        ) : null}
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label="Password"
          autocomplete=""
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={classes.errorMessage}>{formik.errors.password}</div>
        ) : null}

        <button
          type="submit"
          onClick={handleClick}
          className={classes.loginBtn}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
