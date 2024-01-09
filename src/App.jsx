import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import ProjectDataContextProvider from "./data/ProjectDataContext";

export default function App() {

  const [isModalOpen,setIsModalOpen] = useState(false);
  // sidebar will execute this function to add a new project
  function handleModal() {
   setIsModalOpen(true);
  }

  return (
    <ProjectDataContextProvider>
    <div className="sm:h-screen  sm:flex">
      <Modal  open= {isModalOpen} handleModalClose={()=>setIsModalOpen(false)} />
      <Sidebar topic="your projects" handleModal={handleModal}>
      </Sidebar>
      <Main key="main"/>
    </div>
    </ProjectDataContextProvider>
  );
}
