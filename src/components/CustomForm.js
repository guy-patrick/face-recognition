import { FormInput } from "./FormInput";
import { CustomButton } from "./CustomButton";

export const CustomForm = ({
  handleChange,
  handleSubmit,
  inputs,
  submitTitle,
}) => (
  <form onSubmit={handleSubmit} className="form">
    {inputs.map(({ label, name, value }) => (
      <FormInput
        key={name}
        label={label}
        name={name}
        value={value}
        handleChange={handleChange}
      />
    ))}

    <CustomButton title={submitTitle} classes="form-btn" />
  </form>
);
