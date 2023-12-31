export default function Button({ children, className, ...props }) {
  let classes = "rounded-md my-8 py-2 px-3   w-fit capitalize  ";
  if (className) {
    classes += className;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
