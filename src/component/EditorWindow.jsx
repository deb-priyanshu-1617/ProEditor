import React, { forwardRef,useRef,useImperativeHandle,useEffect} from "react";

const EditorWindow = forwardRef(({ text, onChange }, ref) => {
  const internalRef = useRef(null);
   // Expose internalRef to parent via forwarded ref
  useImperativeHandle(ref, () => internalRef.current);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.innerHTML = text;
    }
  }, []);

  return (
    <div
      ref={internalRef}
      className="window"
      contentEditable={true}
      suppressContentEditableWarning={true}
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        padding: "10px",
        minHeight: "500px",
        backgroundColor: "#000000ff",
        color: "white",
        width: "1230px",
        textAlign: "left",
        verticalAlign: "top",
        display: "block",
        whiteSpace: "pre-wrap"
      }}
      onInput={(e) => {
        if (onChange) {
          onChange(e.currentTarget.innerHTML);
        }
      }}
    >
    </div>
  );
});

export default EditorWindow;
