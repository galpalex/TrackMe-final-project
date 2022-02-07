const InputField = ({ placeholder, ...attr }) => {
  return (
    <>
      <label>{placeholder}</label>
      <input {...attr} />
    </>
  );
};

export default InputField;
