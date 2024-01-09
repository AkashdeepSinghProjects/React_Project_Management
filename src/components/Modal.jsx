import { useRef, useEffect, useState,useContext } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";
import Input from "./Input";
import {ProjectDataContext} from "../data/ProjectDataContext"

export default  function Modal({ open ,handleModalClose }) {
  let dialogRef = useRef();
  let name = useRef();
  let desciptionValue = useRef();
  const [isValid, setIsValid] = useState([false, false]);

  const {addNewProject} = useContext(ProjectDataContext);

  useEffect(()=>{
    if(open){
      dialogRef.current.showModal();
    }
  },[open])
  

  function saveValues() {
    if (name.current.value === "") {
      setIsValid([true, false]);
    } else if (desciptionValue.current.value === "") {
      setIsValid([false, true]);
    } else {
      setIsValid([false, false]);
      addNewProject(name.current.value, desciptionValue.current.value);
      name.current.value = "";
      desciptionValue.current.value = "";
      dialogRef.current.close();
      handleModalClose();
     
    }
  }
  function handelCancel() {
    setIsValid([false, false]);
    name.current.value = "";
    desciptionValue.current.value = "";
    dialogRef.current.close();
    handleModalClose();
    

  }

  return createPortal(
    <dialog ref={dialogRef}>
      <div className="min-h-fit sm:w-[40vw] w-96  flex flex-col p-5  text-white bg-gradient-to-b from-black  to-[#36454F]">
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
}


