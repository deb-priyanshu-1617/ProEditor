import { useState,useRef} from "react";
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
  document.execCommand("hiliteColor", false, "green");
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
  
  const editorRef = useRef(null);
  function handleChange(newValue) {
    setContent(newValue);
  }

  function handleDownload(){

    const editorContent = editorRef.current.innerText;  // Get live content
    const element = document.createElement("a");
    const file =new Blob([editorContent],{type: "text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = "document.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
      <button onClick={handleDownload} style={{ margin: "10px 0" }}>
        Download as TXT
      </button>
      <EditorWindow ref={editorRef} text={content} onChange={handleChange} />

    </div>
  );
}
