import { createContext,useRef, useState } from "react";
import formattedDate from "../util/DateFormat";

export const ProjectDataContext = createContext({ data : [],addNewProject:()=>{},addNewTask:()=>{},deleteProject:()=>{},
deleteTask:()=>{},selectedProject:0,setSelectedProject:()=>{}
})

export default function ProjectDataContextProvider({children}){

  // in this state we will store all our data in array of objects
  const [projectData, setProjectData] = useState([]);
    // this will keep keep track which project is selected
    const [selectedProjectId, setSelectedProjectId] = useState(0);
  // project name and description will be added into projectData Array from modal input
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
  function handleDeleteTask(projectId, taskId) {
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


  const context = {
    data:projectData,
    addNewProject:handleNewValues,
    addNewTask: handleNewTasks,
    deleteProject:handleDeleteClick,
    deleteTask:handleDeleteTask,
    selectedProject:selectedProjectId,
    setSelectedProject:(id)=>setSelectedProjectId(id),
    
  }



  return(
    <ProjectDataContext.Provider value={context}>
        {children}
    </ProjectDataContext.Provider>)
}