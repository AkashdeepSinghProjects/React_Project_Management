/* eslint-disable react/prop-types */
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Sidebar({
  topic = "topic Name",
  handleModal,
  projectNames,
}) {
  return (
    <>
      <div className="bg-gradient-to-b from-black  to-[#36454F] mt-[10vh] rounded-tr-2xl w-[35vw] h-[90vh] flex flex-col  px-8 gap-3 text-slate-50">
        <h2 className=" mt-[10vh] text-3xl uppercase font-bold">{topic}</h2>
        <Button
          onClick={handleModal}
          className=" bg-emerald-600 hover:bg-emerald-800 "
        >
          + add project
        </Button>

        {projectNames.map((name, index) => (
          <div key={index} className=" bg-slate-500 rounded-md p-2">
            <button className=" capitalize self-start">{name}</button>
          </div>
        ))}
      </div>
    </>
  );
}
