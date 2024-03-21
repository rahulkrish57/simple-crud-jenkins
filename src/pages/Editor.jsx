import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Styles for the editor

const Editor = () => {
  const [text, setText] = useState("");
  console.log("text", text);
  const maxLength = 500; // Change this to your desired text limit

  useEffect(() => {
    // Listen for paste events and handle them
    const handlePaste = (event) => {
      const pastedText = event.clipboardData.getData("text/plain");
      const newText = text + pastedText;
      if (newText.length > maxLength) {
        const truncatedText = newText.slice(0, maxLength);
        setText(truncatedText);
        event.preventDefault();
      }
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [text]);

  const handleTextChange = (content, _, __, editor) => {
    if (editor.getLength() <= maxLength) {
      setText(content);
    }
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ color: [] }, { background: [] }],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "list",
          "bullet",
          "color",
          "background",
        ]}
      />
      <p>
        Characters: {text.length}/{maxLength}
      </p>
    </div>
  );
};

export default Editor;
