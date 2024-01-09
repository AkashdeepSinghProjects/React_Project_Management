import { useRef ,useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default  function DeleteModal({ response,open }) {

  const dialogRef = useRef();

  useEffect(()=>{
    if(open){
      dialogRef.current.showModal();
    }
  },[open])

  function handleResponse(reply) {
    response(reply);
    dialogRef.current.close();
  }

  return createPortal(
    <dialog ref={dialogRef}>
      <div className=" backdrop-blur-md min-h-fit sm:w-[30vw] w-96  flex flex-col p-5  text-white bg-gradient-to-b from-black  to-[#36454F]">
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
}


