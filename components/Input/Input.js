import styles from "./Input.module.scss";

const Input = ({ ...props }) => {
  const { fullWidth } = props;
  delete props.fullWidth;

  return <input {...props} type="text" />;
};

export default Input;
