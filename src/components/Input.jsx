export default function Input({ name, textarea, ...props }) {
  return (
    <>
      <label className=" capitalize font-semibold text-2xl my-4">{name}</label>
      {textarea ? (
        <textarea
          className="rounded min-h-10 text-black p-3"
          onFocus={(e) => (e.target.rows = 5)}
          onBlur={(e) => (e.target.rows = 1)}
          rows={1}
          {...props}
        ></textarea>
      ) : (
        <input
          className="rounded text-black p-3"
          type="text"
          required
          {...props}
        ></input>
      )}
    </>
  );
}
