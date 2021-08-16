export const types = {
  input: {
    password: {
      name: 'password',
      type: 'password',
      id: 'password',
      label: 'Password',
      error: {
        passRequired: 'Password is required',
        passMinLength: 'Password should be of minimum 8 characters length',
      },
    },

    repeatPassword: {
      name: 'repeatPassword',
      type: 'password',
      id: 'repeatPassword',
      label: 'Repeat password',
      error: {
        repeatPassRequired: 'Repeat password is required',
        passMustMatch: 'Passwords must match',
      },
    },

    email: {
      name: 'email',
      type: 'email',
      id: 'email',
      label: 'Email',
      error: {
        validEmail: 'Enter a valid email',
        emailRequired: 'Email is required',
      },
    },

    name: {
      name: 'name',
      type: 'text',
      id: 'name',
      label: 'Name',
      error: {
        nameRequired: 'Name is required',
        nameMinLength: 'Name must contain at least 2 characters',
        nameMaxLength: 'Name must contain at least 30 characters',
      },
    },

    surname: {
      name: 'surname',
      type: 'text',
      id: 'surname',
      label: 'Surname',
      error: {
        surnameRequired: 'Surname is required',
        surMinLength: 'Surname must contain at least 2 characters',
        surnameMaxLength: 'Surname must contain at least 30 characters',
      },
    },
  },
  button: {
    type: 'submit',
    name: 'Confirm',
  }
};
