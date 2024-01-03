export default function Button({ children, className, green, red, ...props }) {
  let classes = "rounded-md  py-2 px-3   w-fit capitalize  ";
  if (className) {
    classes += className;
  }
  if (green) {
    classes += " bg-emerald-600 hover:bg-emerald-800 ";
  } else if (red) {
    classes += " bg-rose-800 hover:bg-rose-900 ";
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
