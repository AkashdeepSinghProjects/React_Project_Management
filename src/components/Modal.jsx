import Button from "./Button";
import Input from "./Input";
export default function Modal() {
  return (
    <dialog
      className=" mt-10  max-h-3/5 min-h-fit w-2/5 flex flex-col p-5 rounded-lg text-white bg-gradient-to-b from-black  to-[#36454F]"
      open
    >
      <Input name="Project Name" />
      <Input name="introduction" textarea={true} />
      <form method="dialog" className="flex justify-end mt-4">
        <Button className="my-auto ">Save</Button>
      </form>
    </dialog>
  );
}
