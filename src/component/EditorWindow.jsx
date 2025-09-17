import React, { forwardRef } from "react";

const EditorWindow = forwardRef(({ text, onChange }, ref) => {
  return (
    <div
      ref={ref}
      className="window"
      contentEditable={true}
      suppressContentEditableWarning={true}
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        padding: "10px",
        minHeight: "500px",
        backgroundColor: "#f9f9f9",
        color: "black",
        width: "1110px",
        textAlign: "left",
        verticalAlign: "top",
        display: "block",
        whiteSpace: "pre-wrap"
      }}
      onInput={(e) => {
        if (onChange) {
          onChange(e.target.innerHTML);
        }
      }}
    >
      {text}
    </div>
  );
});

export default EditorWindow;
