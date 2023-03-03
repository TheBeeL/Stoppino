import Link from "next/link";
import { type ComponentProps } from "react";

export type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export const ButtonOrLink = ({ href, ...props }: ButtonOrLinkProps) => {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "a" : "button";

  const content = <ButtonOrLink {...props} />;

  if (isLink) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
};
