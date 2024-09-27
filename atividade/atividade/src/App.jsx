import { useState } from "react";
import File from "./components/file";
import "./components/file.css";

function App() {
  const [file, setFile] = useState("");
  return (
    <>
      <div className="main">
        <File file={file} />
      </div>
    </>
  );
}

export default App;
