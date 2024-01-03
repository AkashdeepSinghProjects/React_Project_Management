import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const deleteRef = forwardRef(function DeleteModal({ response }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        // backdrop will only work if showModal method is used
        dialogRef.current.showModal();
      },
    };
  });

  function handleResponse(reply) {
    response(reply);
    dialogRef.current.close();
  }

  return createPortal(
    <dialog ref={dialogRef}>
      <div className=" backdrop-blur-md min-h-fit w-[30vw]  flex flex-col p-5  text-white bg-gradient-to-b from-black  to-[#36454F]">
        <p>Are you sure you want to delete the project?</p>
        <div className="flex justify-between mt-5">
          <Button red={true} onClick={() => handleResponse(true)}>
            Yes
          </Button>
          <Button green={true} onClick={() => handleResponse(false)}>
            No
          </Button>
        </div>
      </div>
    </dialog>,
    document.getElementById("deleteModal")
  );
});

export default deleteRef;
