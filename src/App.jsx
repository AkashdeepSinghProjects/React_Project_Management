import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import formattedDate from "./util/DateFormat";

export default function App() {
  let modalRef = useRef();
  const [projectData, setProjectData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  const projectNames = projectData.map((object) => object.name);

  function handleModal() {
    modalRef.current.open();
  }
  function handleNewValues(name, description) {
    const date = formattedDate();
    setProjectData((previousDate) => [
      { name: name, description: description, date: date, tasks: [] },
      ...previousDate,
    ]);
    setSelectedProjectId(0);
  }
  function handleNewTasks(projectId, inputTask) {
    setProjectData((previousData) =>
      previousData.map((project, index) =>
        index === projectId
          ? {
              ...project,
              tasks: [inputTask, ...project.tasks],
            }
          : project
      )
    );
  }
  function handleDeleteClick(id) {
    setSelectedProjectId(() => (id === 0 ? id + 1 : id - 1));
    setProjectData((previousData) => {
      previousData.splice(id, 1);
      return previousData;
    });
    if (id === 0) {
      setTimeout(() => setSelectedProjectId(0), 1);
    }
  }

  function updateSelectedProject(id) {
    setSelectedProjectId(id);
  }
  return (
    <div className="h-screen flex ">
      <Modal ref={modalRef} getValues={handleNewValues} />
      <Sidebar
        topic="your projects"
        handleModal={handleModal}
        projectNames={projectNames}
        onSelectedProject={updateSelectedProject}
        selectedProject={selectedProjectId}
      ></Sidebar>
      <Main
        id={selectedProjectId}
        selectedProject={projectData[selectedProjectId]}
        handleTask={handleNewTasks}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}
