import * as React from "react";
import FormInput, { OnChangeFn } from "../FormInput/FormInput";

interface PasswordFieldProps {
  inputValue: string;
  onChange: OnChangeFn;
  formKey: string;
  inputError: string;
}

const PasswordField = (props: PasswordFieldProps) => {
  const { inputValue, onChange, formKey, inputError } = props;
  return (
    <FormInput
      inputValue={inputValue}
      onChange={onChange}
      formKey={formKey}
      inputError={inputError}
    />
  );
};

export default PasswordField;
