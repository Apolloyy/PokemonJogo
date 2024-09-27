import React, { useState } from "react";
import "./file.css";

export default function File() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const fileURL = URL.createObjectURL(file);
    setFileUrl(fileURL);
  };

  return (
    <div className="file-upload-container">
      {selectedFile && (
        <a
          href={fileUrl}
          download={selectedFile.name}
          className="download-button"
        >
          <input type="button" value={"Download"} />
        </a>
      )}
      <input
        className="file-input"
        type="file"
        id="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file" className="custom-file-label">
        Escolher arquivo
      </label>
      <p>Feito por Lucas Vilarinho e Francisco Pedro</p>
    </div>
  );
}
