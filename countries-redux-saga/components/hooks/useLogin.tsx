import * as React from "react";

const useLogin = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

  const onChange = (formKey: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prevState) => {
        return { ...prevState, [formKey]: e.target.value };
      });
    };
  };

  const setFormError = (errorKey: string, errorMessage: string) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        errors: { ...prevState.errors, [errorKey]: errorMessage },
      };
    });
  };

  const validateEmail = (email: string) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
      setFormError("email", "Email is required");
      return false;
    }
    if (!mailFormat.test(email)) {
      setFormError("email", "Invalid email address");
      return false;
    }
    setFormError("email", "");
    return true;
  };

  const validatePassword = (password: string) => {
    const symbols = "!?#@$%^*";

    if (!password) {
      setFormError("password", "Password is required");
      return false;
    }
    if (password.length < 6) {
      setFormError("password", "Password must have min. 6 characters");
      return false;
    }
    if (!password.split("").some((char) => symbols.includes(char))) {
      setFormError("password", "Password must include one symbol");
      return false;
    }
    setFormError("password", "");
    return true;
  };
  return { formState, onChange, validateEmail, validatePassword };
};
export default useLogin;
