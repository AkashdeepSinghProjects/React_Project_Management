export default function Sidebar({
  children,
  topic = "topic Name",
  topMargin = 0,
}) {
  let classes = `bg-gradient-to-b from-black  to-[#36454F] mt-[${topMargin}vh] rounded-tr-2xl w-[35vw] h-[${
    100 - topMargin
  }vh] flex flex-col  px-8 gap-3 text-slate-50`;

  return (
    <div className={classes}>
      <h2 className=" mt-[10vh] text-3xl uppercase font-bold">{topic}</h2>
      {children}
    </div>
  );
}
