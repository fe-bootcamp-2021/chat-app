import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { TelegramLogo } from "../Icons/icons";
import signUpWithEmailAndPassword from "../../services/signUpWithEmailAndPassword";
import { types } from "../../constants/types";
import { routes } from "../../constants/routes";
import classes from "./Register.module.css";

function Register() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, types.input.name.error.nameMaxLength)
        .required(types.input.name.error.nameRequired)
        .min(2, types.input.name.error.nameMinLength),
      surname: Yup.string()
        .max(30, types.input.surname.error.surnameMaxLength)
        .required(types.input.surname.error.surnameRequired)
        .min(2, types.input.surname.error.surMinLength),
      email: Yup.string()
        .email(types.input.email.error.validEmail)
        .required(types.input.email.error.emailRequired),
      password: Yup.string()
        .required(types.input.password.error.passRequired)
        .min(8, types.input.password.error.passMinLength),
      repeatPassword: Yup.string()
        .required(types.input.repeatPassword.error.repeatPassRequired)
        .oneOf(
          [Yup.ref(types.input.password.id), null],
          types.input.repeatPassword.error.passMustMatch
        ),
    }),

    onSubmit: (values) => {
      history.push(routes.login.url);
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
      <Link to={routes.login.url}>Log in</Link>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id={types.input.name.id}
          name={types.input.name.name}
          type={types.input.name.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          label={types.input.name.label}
          className={classes.loginBtn}
          autoFocus
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={classes.errorMessage}>{formik.errors.name}</div>
        ) : null}
        <Input
          id={types.input.surname.id}
          name={types.input.surname.name}
          type={types.input.surname.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          label={types.input.surname.label}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className={classes.errorMessage}>{formik.errors.surname}</div>
        ) : null}
        <Input
          id={types.input.email.id}
          name={types.input.email.name}
          type={types.input.email.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label={types.input.email.label}
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
        <Input
          id={types.input.repeatPassword.id}
          name={types.input.repeatPassword.name}
          type={types.input.repeatPassword.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          label={types.input.repeatPassword.label}
          autocomplete=""
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className={classes.errorMessage}>
            {formik.errors.repeatPassword}
          </div>
        ) : null}

        <Button
          type={types.button.type}
          onClick={handleClick}
          btnName={types.button.name}
          className={classes.loginBtn}
        />
      </form>
    </div>
  );
}

export default Register;
