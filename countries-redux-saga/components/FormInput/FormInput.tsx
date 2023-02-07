import React from "react";

export type OnChangeFn = (
  formKey: string
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

interface FormInputProps {
  inputValue: string;
  onChange: OnChangeFn;
  formKey: string;
  inputError: string;
}

const FormInput = (props: FormInputProps) => {
  const { inputValue, onChange, formKey, inputError } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor="email">Email </label>
      <input
        className="py-2 text-black rounded-sm"
        type="text"
        name="email"
        id="email"
        value={inputValue}
        onChange={onChange(formKey)}
      />
      <div className="email-error">{inputError}</div>
    </div>
  );
};

export default FormInput;
