export default function Button({ children, className, ...props }) {
  let classes =
    "rounded-md my-8 py-2 px-3  bg-gray-500 w-fit capitalize hover:bg-gray-600 ";
  if (className) {
    classes += className;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
