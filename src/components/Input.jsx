import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const InputRef = forwardRef(function Input(
  { name, textarea, isInvalid, ...props },
  ref
) {
  let styles = "rounded text-black p-2 ";
  if (isInvalid) {
    styles += " outline-red-700 bg-rose-300";
  }
  return (
    <>
      <label className=" capitalize font-semibold text-2xl mt-3">{name}</label>
      {isInvalid && (
        <small className="flex justify-end text-xs text-red-300">
          *{name} field must be filled
        </small>
      )}
      {textarea ? (
        <textarea
          ref={ref}
          className={styles}
          onFocus={(e) => (e.target.rows = 3)}
          onBlur={(e) => (e.target.rows = 1)}
          rows={1}
          {...props}
        ></textarea>
      ) : (
        <input
          ref={ref}
          className={styles}
          type="text"
          required
          {...props}
        ></input>
      )}
    </>
  );
});

export default InputRef;
