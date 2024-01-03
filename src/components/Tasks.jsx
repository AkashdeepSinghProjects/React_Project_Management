/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Fragment } from "react";
export default function Tasks({ tasksList, getTasks, handleDeleteTask }) {
  const inputTaskRef = useRef();

  // handle the input and pass the value if it's not empty
  function handleClick() {
    if (inputTaskRef.current.value != "") {
      getTasks(inputTaskRef.current.value);
      inputTaskRef.current.value = "";
    }
  }

  return (
    <>
      <h2 className=" text-4xl capitalize font-semibold text-zinc-600">
        Tasks
      </h2>
      <div className="flex gap-2 py-4">
        <input
          ref={inputTaskRef}
          className=" w-60 p-1 rounded-md bg-gray-200"
          onKeyDown={(e) => e.key && e.key === "Enter" && handleClick()}
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
      {tasksList.length < 1 ? (
        <p className=" text-xl text-slate-400 font-semibold">
          Add new tasks to view
        </p>
      ) : (
        <ul key="taskList-1" className=" w-2/5 min-w-fit list-inside list-disc">
          {tasksList.map((task, index) => (
            <Fragment key={index}>
              <li id={index} className=" text-lg flex justify-between">
                {task}
                <button
                  id={index}
                  onClick={(e) => e.target.id && handleDeleteTask(e.target.id)}
                  className="px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    id={index}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </button>
              </li>
              <hr />
            </Fragment>
          ))}
        </ul>
      )}
    </>
  );
}
