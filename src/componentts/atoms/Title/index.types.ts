import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode ;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
}