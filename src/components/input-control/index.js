// External dependencies
import clsx from "clsx";
import { useId } from "react";

// Internal dependencies
import css from "./style.module.css";

export default function InputControl({
  label,
  hideLabelFromVision = false,
  type = "text",
  name,
  value = "",
  onChange = () => null,
  ...props
}) {
  const instanceId = useId();
  const htmlId = `input-control-${instanceId}`;

  const labelClassName = clsx({ "sr-only": hideLabelFromVision });

  return (
    <div className={css.container}>
      <label className={labelClassName} htmlFor={htmlId}>
        {label}
      </label>
      <input
        type={type}
        id={htmlId}
        name={name}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        {...props}
      />
    </div>
  );
}
