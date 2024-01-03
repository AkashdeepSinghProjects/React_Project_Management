import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import Input from "./Input";

const modalForwardRef = forwardRef(function Modal({ getValues }, ref) {
  let dialogRef = useRef();
  let name = useRef();
  let desciptionValue = useRef();
  const [isValid, setIsValid] = useState([false, false]);

  function saveValues() {
    if (name.current.value === "") {
      setIsValid([true, false]);
    } else if (desciptionValue.current.value === "") {
      setIsValid([false, true]);
    } else {
      setIsValid([false, false]);
      getValues(name.current.value, desciptionValue.current.value);
      name.current.value = "";
      desciptionValue.current.value = "";
      dialogRef.current.close();
    }
  }
  function handelCancel() {
    setIsValid([false, false]);
    name.current.value = "";
    desciptionValue.current.value = "";
    dialogRef.current.close();
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        // backdrop will only work if showModal method is used
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef}>
      <div className="min-h-fit w-[40vw]  flex flex-col p-5  text-white bg-gradient-to-b from-black  to-[#36454F]">
        <Input
          name="Project Name"
          textarea={false}
          isInvalid={isValid[0]}
          ref={name}
        />
        <Input
          name="Discription"
          textarea={true}
          isInvalid={isValid[1]}
          ref={desciptionValue}
        />
        <div className="flex justify-between mt-5">
          <Button className="my-auto " red={true} onClick={handelCancel}>
            Cancel
          </Button>
          <Button className="my-auto" green={true} onClick={saveValues}>
            Save
          </Button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modalForwardRef;
