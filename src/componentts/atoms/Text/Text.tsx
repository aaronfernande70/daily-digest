import { TextProps } from "./index.types";
import "./index.css";

const Text = ({ children, type = "p", ...props}: TextProps) => {
  const Primitive = type;

  return <Primitive {...props}>{children}</Primitive>;
};

export default Text;