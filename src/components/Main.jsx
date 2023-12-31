import { useContext, useState } from "react";
import Tasks from "./Tasks";
import DeleteModal from "./DeleteModal";
import { ProjectDataContext } from "../data/ProjectDataContext";

export default function Main({}) {
  const {selectedProject:id,data,addNewTask,deleteTask,deleteProject} = useContext(ProjectDataContext);
  const [isModelOpen,setIsModalOpen]= useState(false);
  const selectedProject = data[id];

  // open is a custom method added using useImperativeHandle() method of react in deleteModal component
  function handleDeleteModal() {
   setIsModalOpen(true);
  }
  // handle delete if user replied true to deleteModal
  function handleDeleteModalReply(reply) {
    setIsModalOpen(false);
    if (reply) {
      deleteProject(id);
    }
  }

  return (
    <main className="sm:mt-[20vh] sm:ps-12 px-2 mt-2 pb-10 ps-2 sm:pe-32 w-screen min-h-fit sm:min-h-[80vh]">
      {selectedProject ? (
        <>
          <div className=" flex justify-between">
            <h1 className=" text-5xl capitalize font-semibold text-zinc-600">
              {selectedProject.name}
            </h1>
            <DeleteModal
              response={(reply) => handleDeleteModalReply(reply)}
              open={isModelOpen}
            />
            <button className=" text-gray-600" onClick={handleDeleteModal}>
              Delete
            </button>
          </div>
          <p className=" text-lg text text-stone-500 py-2 ">
            {selectedProject.date}
          </p>
          <p className="text-justify  w-3/4 text-stone-600">
            {selectedProject.description}
          </p>
          <hr className=" my-3 border-2" />
          <Tasks
            key={`project-${id}`}
            tasksList={selectedProject.tasks}
            getTasks={(task) => addNewTask(id, task)}
            handleDeleteTask={(taskId) => deleteTask(id, taskId)}
          />
        </>
      ) : (
        <p className=" text-4xl capitalize font-semibold text-zinc-600">
          Please add new projects
        </p>
      )}
    </main>
  );
}
