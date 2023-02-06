import * as React from "react";

const Login = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

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

  const onChange = (formKey: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prevState) => {
        return { ...prevState, [formKey]: e.target.value };
      });
    };
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validEmail = validateEmail(formState.email);
    const validPassword = validatePassword(formState.password);

    if (validEmail && validPassword) {
      console.log(formState);
    }
  };

  return (
    <div className="border-2 bg-cyan-900 px-12 py-6 w-[400px] flex flex-col gap-14 text-red-50">
      <h2 className="border-3 text-3xl">LOGIN</h2>

      <form className="flex flex-col gap-8" onSubmit={formSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">Email </label>
          <input
            className="py-2 text-black rounded-sm"
            type="text"
            name="email"
            id="email"
            value={formState.email}
            onChange={onChange("email")}
          />
          <div className="email-error">{formState.errors.email}</div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="py-2 text-black rounded-sm"
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={onChange("password")}
          />
          <div className="password-error">{formState.errors.password}</div>
        </div>
        <input
          type="submit"
          name="register"
          value="Register"
          className="border-1 py-3 bg-sky-400 w-full cursor-pointer text-slate-900"
        />
      </form>
    </div>
  );
};

export default Login;
