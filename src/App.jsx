import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Modal from "./components/Modal";

export default function App() {
  let modalRef = useRef();
  const [projectData, setProjectData] = useState([]);
  const projectNames = projectData.map((object) => object.name);
  function handleModal() {
    modalRef.current.open();
  }
  function handleValues(name, description) {
    console.log("name :", name, " descritpton : ", description);
    setProjectData((previousDate) => [
      { name: name, description: description },
      ...previousDate,
    ]);
  }
  return (
    <div className="h-screen flex ">
      <Modal ref={modalRef} getValues={handleValues} />
      <Sidebar
        topic="your projects"
        handleModal={handleModal}
        projectNames={projectNames}
      ></Sidebar>
      <Main />
    </div>
  );
}
