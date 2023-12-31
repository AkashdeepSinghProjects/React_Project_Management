import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Input from "./Input";

// eslint-disable-next-line no-empty-pattern
const modalForwardRef = forwardRef(function Modal({ getValues }, ref) {
  let dialogRef = useRef();
  let name = useRef();
  let desciptionValue = useRef();

  function saveValues() {
    getValues(name.current.value, desciptionValue.current.value);
    name.current.value = "";
    desciptionValue.current.value = "";
    dialogRef.current.close();
  }
  function handelCancel() {
    name.current.value = "";
    desciptionValue.current.value = "";
    dialogRef.current.close();
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
      <div className="min-h-fit w-[40vw]  flex flex-col p-5  text-white bg-gradient-to-b from-black  to-[#36454F]">
        <Input name="Project Name" required ref={name} />
        <Input name="Discription" textarea={true} ref={desciptionValue} />
        <div className="flex justify-between mt-5">
          <Button
            className="my-auto bg-rose-800 hover:bg-rose-900"
            onClick={handelCancel}
          >
            Cancel
          </Button>
          <Button
            className="my-auto bg-emerald-600 hover:bg-emerald-800 "
            onClick={saveValues}
          >
            Save
          </Button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modalForwardRef;
