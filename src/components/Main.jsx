/* eslint-disable react/prop-types */
import Tasks from "./Tasks";
export default function Main({
  id,
  selectedProject,
  handleTask,
  handleDeleteClick,
}) {
  return (
    <main className="mt-[20vh] ps-12 pe-32 w-screen h-fit min-h-[80vh]">
      {selectedProject ? (
        <>
          <div className=" flex justify-between">
            <h1 className=" text-5xl capitalize font-semibold text-zinc-600">
              {selectedProject.name}
            </h1>
            <button
              className=" text-gray-600"
              onClick={() => handleDeleteClick(id)}
            >
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
            tasksList={selectedProject.tasks}
            getTasks={(task) => handleTask(id, task)}
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
