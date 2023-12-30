import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="h-screen flex ">
      <Sidebar topic="your projects"></Sidebar>
      <Main />
    </div>
  );
}
