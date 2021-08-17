import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { TelegramLogo } from "../Icons/icons";
import signInWithEmailAndPassword from "../../services/signInWithEmailAndPassword";
import { types } from "../../constants/types";
import { routes } from "../../constants/routes";
import NewChatMenu from "../NewChatMenu/NewChatMenu";
import classes from "./Login.module.css";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(types.input.email.error.validEmail)
        .required(types.input.email.error.emailRequired),
      password: Yup.string()
        .required(types.input.password.error.passRequired)
        .min(8, types.input.password.error.passMinLength),
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
      <NewChatMenu />
      <h1 className={classes.loginFormTitle}>Sign In to Telegram</h1>
      <Link to={routes.register.url}>Create Account</Link>
      <p>Please confirm your email and enter your password.</p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id={types.input.email.id}
          name={types.input.email.name}
          type={types.input.email.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label={types.input.email.label}
          className={classes.loginBtn}
          autoFocus
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={classes.errorMessage}>{formik.errors.email}</div>
        ) : null}
        <Input
          id={types.input.password.id}
          name={types.input.password.name}
          type={types.input.password.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label={types.input.password.label}
          autocomplete=""
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={classes.errorMessage}>{formik.errors.password}</div>
        ) : null}

        <Button
          type={types.button.type}
          btnName={types.button.name}
          onClick={handleClick}
          className={classes.loginBtn}
        />
      </form>
    </div>
  );
}
