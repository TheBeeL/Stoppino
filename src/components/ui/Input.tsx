import { cva, cx, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps } from "react";

const inputStyle = cva("input input-bordered");

interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputStyle> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    if (label) {
      return (
        <div className={cx([className, "form-control"])}>
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          <input ref={ref} type="text" className={inputStyle({})} {...props} />
          {error && (
            <label className="label">
              <span className="label-text-alt text-error">{error}</span>
            </label>
          )}
        </div>
      );
    }
    return (
      <input
        ref={ref}
        type="text"
        className={inputStyle({ className })}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
