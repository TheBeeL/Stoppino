import { cva, type VariantProps } from "class-variance-authority";
import {
  ButtonOrLink,
  type ButtonOrLinkProps,
} from "~/components/ui/ButtonOrLink";

const buttonStyle = cva("btn", {
  variants: {
    intent: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      warning: "btn-warning",
      danger: "btn-error",
    },
    outline: {
      true: "btn-outline",
    },
    size: {
      lg: "btn-lg",
      sm: "btn-sm",
      xs: "btn-xs",
    },
  },
  defaultVariants: { intent: "primary" },
});

interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyle> {}

export function Button({
  className,
  intent,
  outline,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      className={buttonStyle({ className, intent, outline, size })}
      {...props}
    />
  );
}
