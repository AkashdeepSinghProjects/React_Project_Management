import { useContext } from "react";

import Button from "./Button";
import {ProjectDataContext} from "../data/ProjectDataContext"

export default function Sidebar({
  topic = "topic Name",
  handleModal,
}) {

  const {data, selectedProject, setSelectedProject} = useContext(ProjectDataContext);
  const projectNames = data.map((object) => object.name);

  return (
    <>
      <div className="bg-gradient-to-b sm:pb-5 from-black  to-[#36454F] mt-0 sm:mt-[10vh] rounded-tr-2xl sm:w-[35vw] sm:min-h-[90vh] flex flex-col px-2 pb-3  sm:px-8 gap-3 text-slate-50 h-fit ">
        <h2 className=" mt-[10vh] text-3xl uppercase font-bold">{topic}</h2>
        <Button onClick={handleModal} green={true} className="my-8">
          + add project
        </Button>

        {projectNames.map((name, index) => (
          <div
            key={index}
            className={
              selectedProject === index
                ? "bg-slate-500 rounded-md py-2 "
                : undefined
            }
          >
            <button
              id={index}
              className=" capitalize self-start ps-2"
              onClick={(e) => setSelectedProject(parseInt(e.target.id))}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
