export interface IPrimaryBtn {
  disabled?: boolean;
  type?: "unset" | "invert" | "transparent" | "frameless";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: boolean;
  state?: (e: string) => void;
  size?: "large" | "medium" | "small";
}
