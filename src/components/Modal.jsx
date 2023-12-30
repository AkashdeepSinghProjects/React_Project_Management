import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Input from "./Input";
const modalForwardRef = forwardRef(function Modal({}, ref) {
  let dialogRef = useRef();
  let name = useRef();
  function handleName(e) {
    console.log(e);
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef}>
      <div className="min-h-fit w-[40vw]  flex flex-col p-5 rounded-lg text-white bg-gradient-to-b from-black  to-[#36454F]">
        <Input name="Project Name" required ref={name} onChange={handleName} />
        <Input name="introduction" textarea={true} />
        <form method="dialog" className="flex justify-between mt-4">
          <Button className="my-auto bg-rose-800 hover:bg-rose-900">
            Cancel
          </Button>
          <Button
            className="my-auto bg-emerald-600 hover:bg-emerald-800 "
            onClick={(e) => console.log(e)}
          >
            Save
          </Button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modalForwardRef;
