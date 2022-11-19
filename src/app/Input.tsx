import { forwardRef } from "react";

type Props = JSX.IntrinsicElements["input"];

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  props,
  ref
) {
  return (
    <input
      ref={ref}
      {...props}
      className="w-full rounded border border-gray-400 p-3"
    />
  );
});
