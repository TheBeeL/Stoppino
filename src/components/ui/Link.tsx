import { cva, type VariantProps } from "class-variance-authority";
import {
  ButtonOrLink,
  type ButtonOrLinkProps,
} from "~/components/ui/ButtonOrLink";

const linkStyle = cva("link", {
  variants: {
    intent: {
      primary: "link-primary",
      secondary: "link-secondary",
      info: "link-info",
    },
  },
});

interface LinkProps extends ButtonOrLinkProps, VariantProps<typeof linkStyle> {}

export function Link({ className, intent, ...props }: LinkProps) {
  return (
    <ButtonOrLink className={linkStyle({ className, intent })} {...props} />
  );
}
