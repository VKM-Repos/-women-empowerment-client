import React from "react";

const sizeClasses = {
  txtQuicksandRegular14Gray70001: "font-normal font-quicksand",
  txtQuicksandBold16: "font-bold font-quicksand",
  txtQuicksandRegular16Black900: "font-normal font-quicksand",
  txtQuicksandRegular14Black90099: "font-normal font-quicksand",
  txtQuicksandRegular14Gray90002: "font-normal font-quicksand",
  txtQuicksandRegular14: "font-normal font-quicksand",
  txtQuicksandSemiBold14: "font-quicksand font-semibold",
  txtQuicksandRegular12: "font-normal font-quicksand",
  txtSoraBold32: "font-bold font-sora",
  txtSoraRegular14: "font-normal font-sora",
  txtMontserratSemiBold10: "font-montserrat font-semibold",
  txtQuicksandRegular16Black900e5: "font-normal font-quicksand",
  txtSoraSemiBold24Black90001: "font-semibold font-sora",
  txtSoraSemiBold48WhiteA700: "font-semibold font-sora",
  txtSoraRegular20: "font-normal font-sora",
  txtQuicksandRegular16: "font-normal font-quicksand",
  txtSoraBold16: "font-bold font-sora",
  txtQuicksandRegular14Black900e5: "font-normal font-quicksand",
  txtPalatinoLinotypeBoldItalic48: "font-bold font-palatinolinotype italic",
  txtInterRegular14: "font-inter font-normal",
  txtPalatinoLinotypeRoman16: "font-normal font-palatinolinotype",
  txtSoraSemiBold24: "font-semibold font-sora",
  txtSoraSemiBold36: "font-semibold font-sora",
  txtSoraSemiBold48: "font-semibold font-sora",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
