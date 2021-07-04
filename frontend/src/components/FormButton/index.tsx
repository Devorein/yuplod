import { Button } from "@material-ui/core";
import "./style.scss";

interface FormButtonProps {
  disabled: boolean,
  label: string
  className?: string
}

export default function FormButton(props: FormButtonProps) {
  const { disabled, label, className = '' } = props;
  return <Button disabled={disabled} type="submit" variant="contained" color="primary" className={`FormButton fs-20 fw-700 mt-10 ${className}`}>{label}</Button>
}