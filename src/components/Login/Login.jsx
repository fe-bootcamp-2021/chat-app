import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import { TelegramLogo } from "../Icons/icons";
import classes from "./Login.module.css";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Username is required")
        .min(4, "Username must contain at least 4 characters"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    }),

    onSubmit: (values) => {},
  });

  return (
    <div className={classes.formContainer}>
      <div className={classes.logo}>
        <TelegramLogo />
      </div>
      <h1 className={classes.loginFormTitle}>Sign In to Telegram</h1>
      <Link to="/register">Create Account</Link>
      <p>Please confirm your username and enter your password.</p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          label="Username"
          autoFocus
        />
        {formik.touched.username && formik.errors.username ? (
          <div className={classes.errorMessage}>{formik.errors.username}</div>
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

        <button type="submit" className={classes.loginBtn}>
          Confirm
        </button>
      </form>
    </div>
  );
}
