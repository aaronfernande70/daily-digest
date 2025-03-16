import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  type?: 'span'| 'p' | 'div';
}