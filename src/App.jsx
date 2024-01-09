import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import formattedDate from "./util/DateFormat";

export default function App() {
  let modalRef = useRef();
  // in this state we will store all our data in array of objects
  const [projectData, setProjectData] = useState([]);
  // this will keep keep track which project is selected
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  // sidebar componenet will receive project names only
  const projectNames = projectData.map((object) => object.name);

  // sidebar will execute this function to add a new project
  function handleModal() {
    modalRef.current.open();
  }

  // project name and description will be added into projectData Array from modal input
  function handleNewValues(name, description) {
    const date = formattedDate();
    setProjectData((previousDate) => [
      { name: name, description: description, date: date, tasks: [] },
      ...previousDate,
    ]);
    setSelectedProjectId(0);
  }

  // new tasks will be added using tasks component and App receives it through main component
  // it is added in projectData Array with projectId identification
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

  // this will handle delete of project component received through main component
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

  // update seleted project when it is clicked on sidebar
  function updateSelectedProject(id) {
    setSelectedProjectId(id);
  }

  // handle delete task on projectData Array with projectId and taskId identification received through task component
  function deleteTask(projectId, taskId) {
    setProjectData((previousData) =>
      previousData.map((projectObject, index) => {
        if (projectId === index) {
          return {
            ...projectObject,
            tasks: projectObject.tasks.filter((task, ind) => {
              if (ind != taskId) {
                return task;
              }
            }),
          };
        } else {
          return projectObject;
        }
      })
    );
  }

  return (
    <div className="sm:h-screen  sm:flex">
      <Modal ref={modalRef} getValues={handleNewValues} />
      <Sidebar
        topic="your projects"
        handleModal={handleModal}
        projectNames={projectNames}
        onSelectedProject={updateSelectedProject}
        selectedProject={selectedProjectId}
      ></Sidebar>
      <Main
        key="main"
        id={selectedProjectId}
        selectedProject={projectData[selectedProjectId]}
        handleTask={handleNewTasks}
        handleDeleteClick={handleDeleteClick}
        handleDeleteTask={deleteTask}
      />
    </div>
  );
}
