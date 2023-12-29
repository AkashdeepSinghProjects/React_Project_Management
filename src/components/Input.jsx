export default function Input({ name, textarea, ...props }) {
  function handleFocus(event) {
    console.log(event.target.rows);
    event.target.rows = 5;
  }

  return (
    <>
      <label className=" capitalize font-semibold text-2xl my-4">{name}</label>
      {textarea ? (
        <textarea
          className="rounded min-h-10 text-black p-3"
          onFocus={handleFocus}
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
