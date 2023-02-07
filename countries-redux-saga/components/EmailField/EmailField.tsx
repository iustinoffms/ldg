import * as React from "react";
import FormInput, { OnChangeFn } from "../FormInput/FormInput";

interface EmailFieldProps {
  inputValue: string;
  onChange: OnChangeFn;
  formKey: string;
  inputError: string;
}
const EmailField = (props: EmailFieldProps) => {
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

export default EmailField;
