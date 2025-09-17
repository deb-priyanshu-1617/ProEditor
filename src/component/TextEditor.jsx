import { useState } from "react";
import EditorWindow from "./EditorWindow";
import Toolbar from "./Toolbar";

// Existing handlers
function handleBold() {
  document.execCommand("bold");
}

function handleItalic() {
  document.execCommand("italic");
}

function handleColorChange(color) {
  document.execCommand("foreColor", false, color);
}

function handleSizeChange(levelSize) {
  document.execCommand("fontSize", false, levelSize);
}

function handleUnderline() {
  document.execCommand("underline", false, null);
}

// ✅ New handlers
function handleHighLight() {
  document.execCommand("hiliteColor", false, "yellow");
}

function handleSuperscript() {
  document.execCommand("superscript", false, null);
}

function handleSubscript() {
  document.execCommand("subscript", false, null);
}

function handleJustifyLeft() {
  document.execCommand("justifyLeft", false, null);
}

function handleJustifyCenter() {
  document.execCommand("justifyCenter", false, null);
}

function handleJustifyRight() {
  document.execCommand("justifyRight", false, null);
}

function handleJustifyFull() {
  document.execCommand("justifyFull", false, null);
}

function handleInsertUnorderedList() {
  document.execCommand("insertUnorderedList", false, null);
}

function handleInsertOrderedList() {
  document.execCommand("insertOrderedList", false, null);
}

export default function TextEditor() {
  const [content, setContent] = useState("Start Typing here...");

  function handleChange(newValue) {
    setContent(newValue);
  }

  return (
    <div>
      <Toolbar
        onBold={handleBold}
        onItalic={handleItalic}
        onColorChange={handleColorChange}
        onSizeChange={handleSizeChange}
        onUnderline={handleUnderline}
        onHilight={handleHighLight}
        onSuperscript={handleSuperscript}
        onSubscript={handleSubscript}
        onJustifyLeft={handleJustifyLeft}
        onJustifyCenter={handleJustifyCenter}
        onJustifyRight={handleJustifyRight}
        onJustifyFull={handleJustifyFull}
        onInsertUnorderedList={handleInsertUnorderedList}
        onInsertOrderedList={handleInsertOrderedList}
      />
      <EditorWindow text={content} onInput={handleChange} />

    </div>
  );
}
