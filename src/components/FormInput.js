function FormInput({ label, name, value, handleChange }) {
  return (
    <div className="form-input-bloc">
      <label htmlFor={name} className="form-label">
        {label}
        <span>*</span>
      </label>
      <input
        onChange={handleChange}
        type={name}
        name={name}
        value={value}
        className="form-input"
      />
    </div>
  );
}

export default FormInput;
