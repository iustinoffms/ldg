import * as React from "react";
import EmailField from "../EmailField/EmailField";
import FormInput from "../FormInput/FormInput";
import useLogin from "../hooks/useLogin";
import PasswordField from "../PasswordField/PasswordField";

const Login = () => {
  const { formState, onChange, validateEmail, validatePassword } = useLogin();

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
        <EmailField
          inputValue={formState.email}
          onChange={onChange}
          formKey="email"
          inputError={formState.errors.email}
        />
        <PasswordField
          inputValue={formState.password}
          onChange={onChange}
          formKey="password"
          inputError={formState.errors.password}
        />
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
