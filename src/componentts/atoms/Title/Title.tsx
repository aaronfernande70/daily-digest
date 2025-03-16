import { TitleProps } from "./index.types";
import "./index.css";

const Title = ({ children, type = "h1", ...props }: TitleProps) => {
  const Heading = type;

  return <Heading {...props}>{children}</Heading>;
};

export default Title;