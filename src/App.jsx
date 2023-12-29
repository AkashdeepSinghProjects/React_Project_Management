import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Button from "./components/Button";
import Modal from "./components/Modal";

export default function App() {
  return (
    <div className="h-screen flex ">
      <Sidebar topic="your projects" topMargin={10}>
        <Button>+ add project</Button>
        <h2>Lerning React</h2>
      </Sidebar>
      <Modal />
      <Main />
    </div>
  );
}
