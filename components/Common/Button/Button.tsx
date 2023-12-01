import React from "react";

interface ButtonProps {
  label?: string;
  size?: "small" | "normal" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline" | "icon-only" | "text-icon" | "default";
  state?: "default" | "hover" | "active" | "disabled";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "default",
  variant = "",
  state = "default",
  icon,
  fullWidth = false,
  onClick,
}) => {
  const getButtonClasses = () => {
    let classes = "";

    switch (variant) {
      case "primary":
        classes = "bg-btnWarning text-primaryWhite rounded-[0.5rem] font-semibold";
        break;
      case "secondary":
        classes = "bg-primaryGreen text-secondaryOffWhite rounded-[0.5rem]";
        break;
      case "outline":
        classes = "border-btnWarning border-2 text-primaryBlack rounded-[0.5rem]";
        break;
      case "icon-only":
        classes = "bg-btnWarning text-primaryBlack rounded-full";
        break;
      case "icon-only-secondary":
        classes = "border-primary border-2  text-primaryBlack rounded-full";
        break;
      case "icon-only-outline":
        classes = "border-btnWarning border-2  text-primaryBlack rounded-full";
        break;
      default:
        classes = "bg-secondaryOffWhite text-primaryBlack rounded-[0.5rem]";
        break;
    }

    switch (state) {
      case "hover":
        classes += " hover:bg-secondaryGreen";
        break;
      case "active":
        classes += " active:bg-secondaryOffWhite";
        break;
      case "disabled":
        classes += " opacity-50 pointer-events-none";
        break;
      default:
        break;
    }

    switch (size) {
      case "small":
        classes += " px-2 py-1 text-small";
        break;
      case "normal":
        classes += " px-4 py-2 text-base";
        break;
      case "medium":
        classes += " px-6 py-3 text-base";
        break;
      case "large":
        classes += " px-8 py-4 text-large";
        break;
      default:
        classes += " p-1 text-small";
        break;
    }

    if (fullWidth) {
      classes += " w-full flex items-center justify-center";
    } else {
      classes += " inline-block flex items-center justify-center";
    }

    return classes;
  };

  return (
    <button className={getButtonClasses()} disabled={state === "disabled"} onClick={onClick}>
      {label}
      {variant === "icon-only" && icon}
      {variant !== "text-icon" && label && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export default Button;
