/* eslint-disable react/prop-types */
import { useRef } from "react";
import Tasks from "./Tasks";
import DeleteModal from "./DeleteModal";

export default function Main({
  id,
  selectedProject,
  handleTask,
  handleDeleteClick,
  handleDeleteTask,
}) {
  let modalDeleteRef = useRef();

  // open is a custom method added using useImperativeHandle() method of react in deleteModal component
  function handleDeleteModal() {
    modalDeleteRef.current.open();
  }
  // handle delete if user replied true to deleteModal
  function handleDeleteModalReply(reply) {
    if (reply) {
      handleDeleteClick(id);
    }
  }

  return (
    <main className="mt-[20vh] ps-12 pe-32 w-screen h-fit min-h-[80vh]">
      {selectedProject ? (
        <>
          <div className=" flex justify-between">
            <h1 className=" text-5xl capitalize font-semibold text-zinc-600">
              {selectedProject.name}
            </h1>
            <DeleteModal
              ref={modalDeleteRef}
              response={(reply) => handleDeleteModalReply(reply)}
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
            getTasks={(task) => handleTask(id, task)}
            handleDeleteTask={(taskId) => handleDeleteTask(id, taskId)}
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
