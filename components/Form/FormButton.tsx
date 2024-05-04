
import { Loader2 } from "lucide-react";
import { ComponentProps, FC, ReactNode } from "react";
import { Button } from "../UI/Button";

interface ButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  loading?: boolean;
  suffix?: ReactNode;
  preffix?: ReactNode;
}

const FormButton: FC<ButtonProps> = ({
  loading,
  children,
  suffix,
  preffix,
  ...rest
}) => {
  return (
    <Button className="gap-x-1" {...rest}>
      {preffix ? preffix : undefined}
      {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : undefined}
      {loading ? <span className="mt-1">Please wait</span> : children}
      {suffix ? suffix : undefined}
    </Button>
  );
};

export default FormButton;
