import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const InputRef = forwardRef(function Input({ name, textarea, ...props }, ref) {
  return (
    <>
      <label className=" capitalize font-semibold text-2xl my-4">{name}</label>
      {textarea ? (
        <textarea
          ref={ref}
          className="rounded min-h-10 text-black p-2"
          onFocus={(e) => (e.target.rows = 3)}
          onBlur={(e) => (e.target.rows = 1)}
          rows={1}
          {...props}
        ></textarea>
      ) : (
        <input
          ref={ref}
          className="rounded text-black p-2"
          type="text"
          required
          {...props}
        ></input>
      )}
    </>
  );
});

export default InputRef;
