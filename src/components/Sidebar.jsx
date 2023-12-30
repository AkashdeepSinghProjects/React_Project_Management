import { useRef } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function Sidebar({ topic = "topic Name", topMargin = 10 }) {
  let classes = `bg-gradient-to-b from-black  to-[#36454F] mt-[${topMargin}vh] rounded-tr-2xl w-[35vw] h-[${
    100 - topMargin
  }vh] flex flex-col  px-8 gap-3 text-slate-50`;

  let modalRef = useRef();

  function handleModal() {
    modalRef.current.open();
  }

  return (
    <>
      <Modal ref={modalRef} />
      <div className={classes}>
        <h2 className=" mt-[10vh] text-3xl uppercase font-bold">{topic}</h2>
        <Button
          onClick={handleModal}
          className=" bg-emerald-600 hover:bg-emerald-800 "
        >
          + add project
        </Button>
        <h2>Lerning React</h2>
      </div>
    </>
  );
}
