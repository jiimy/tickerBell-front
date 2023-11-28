import React, { forwardRef, HTMLProps } from "react";
type InputType = {
  children?: React.ReactNode;
  label?: string;
  className?: string;
} & HTMLProps<HTMLInputElement>;

const FRInput = forwardRef<HTMLInputElement, InputType>(
  ({ label, type, className, ...attr }, ref) => {
    return (
      <div>
        <label htmlFor={attr.id} className={className}>
          <span>{label}</span>
          <input type={type} ref={ref} {...attr} />
        </label>
      </div>
    );
  }
);

FRInput.displayName = "FRInput";
export default FRInput;
