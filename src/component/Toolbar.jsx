    import { useState } from "react";
    
    function Toolbar({
  
    onBold,
    onItalic,
    onColorChange,
    onSizeChange,
    onUnderline,
    onHilight,
    onSuperscript,
    onSubscript,
    onJustifyLeft,
    onJustifyCenter,
    onJustifyRight,
    onJustifyFull,
    onInsertUnorderedList,
    onInsertOrderedList
    }) {
    // State for each button
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isHighlight, setIsHighlight] = useState(false);
    const [isSuper, setIsSuper] = useState(false);
    const [isSub, setIsSub] = useState(false);
    const [isLeft, setIsLeft] = useState(false);
    const [isCenter, setIsCenter] = useState(false);
    const [isRight, setIsRight] = useState(false);
    const [isJustify, setIsJustify] = useState(false);
    const [isBullet, setIsBullet] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isStrike, setIsStrike] = useState(false);
    

    // Handlers
    function handleBoldClick() {
        setIsBold((prev) => !prev);
        onBold();
    }

    function handleItalicClick() {
        setIsItalic((prev) => !prev);
        onItalic();
    }

    function handleUnderlineClick() {
        setIsUnderline((prev) => !prev);
        onUnderline();
    }

    function handleHighlightClick() {
        setIsHighlight((prev) => !prev);
        onHilight();
    }

    function handleSuperClick() {
        setIsSuper((prev) => !prev);
        onSuperscript();
    }

    function handleSubClick() {
        setIsSub((prev) => !prev);
        onSubscript();
    }

    function handleStrikeClick() {
        setIsStrike((prev) => !prev);
        document.execCommand("strikeThrough", false, null);
    }

    function handleAlign(type) {
        setIsLeft(type === "left");
        setIsCenter(type === "center");
        setIsRight(type === "right");
        setIsJustify(type === "justify");

        if (type === "left") onJustifyLeft();
        if (type === "center") onJustifyCenter();
        if (type === "right") onJustifyRight();
        if (type === "justify") onJustifyFull();
    }

    function handleList(type) {
        if (type === "bullet") {
        setIsBullet((prev) => !prev);
        onInsertUnorderedList();
        } else {
        setIsNumber((prev) => !prev);
        onInsertOrderedList();
        }
    }

    function handleImageInsert() {
        const imgUrl = prompt("Enter Image URL:");
        if (imgUrl) document.execCommand("insertImage", false, imgUrl);
    }

    function handleClearFormatting() {
        document.execCommand("removeFormat", false, null);
    }

    function handleLinkInsert() {
        const url = prompt("Enter URL:");
        if (url) document.execCommand("createLink", false, url);
    }

    function handleUnlink() {
        document.execCommand("unlink", false, null);
    }

    // 🔄 Undo / Redo
    function handleUndo() {
        document.execCommand("undo", false, null);
    }

    function handleRedo() {
        document.execCommand("redo", false, null);
    }

    // 🎨 Font Family
    function handleFontChange(fontName) {
        document.execCommand("fontName", false, fontName);
    }
    

    return (
        <>
        {/* Undo / Redo */}
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>

        {/* Font Family Selector */}
        <select onChange={(e) => handleFontChange(e.target.value)}>
            <option value="">Font Family</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Roboto">Roboto</option>
        </select>

        <button style={{ backgroundColor: isBold ? "blue" : "" }} onClick={handleBoldClick}>B</button>
        <button style={{ backgroundColor: isItalic ? "blue" : "" }} onClick={handleItalicClick}>𝐼</button>

        {/* Color selection */}
        <select onChange={(e) => onColorChange(e.target.value)}>
            <option value="">Font Color</option>
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
        </select>

        {/* Font size */}
        <select onChange={(event) => onSizeChange(event.target.value)}>
            <option value="">Font Size</option>
            <option value="1">1 (Small)</option>
            <option value="2">2</option>
            <option value="3">3 (Default)</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7 (Large)</option>
        </select>

        <button style={{ backgroundColor: isUnderline ? "blue" : "" }} onClick={handleUnderlineClick}>U</button>
        <button style={{ backgroundColor: isStrike ? "blue" : "" }} onClick={handleStrikeClick}>S</button>
        <button style={{ backgroundColor: isHighlight ? "blue" : "" }} onClick={handleHighlightClick}>Highlight</button>
        <button style={{ backgroundColor: isSuper ? "blue" : "" }} onClick={handleSuperClick}>X²</button>
        <button style={{ backgroundColor: isSub ? "blue" : "" }} onClick={handleSubClick}>X₂</button>

        <button style={{ backgroundColor: isLeft ? "blue" : "" }} onClick={() => handleAlign("left")}>Left</button>
        <button style={{ backgroundColor: isCenter ? "blue" : "" }} onClick={() => handleAlign("center")}>Center</button>
        <button style={{ backgroundColor: isRight ? "blue" : "" }} onClick={() => handleAlign("right")}>Right</button>
        <button style={{ backgroundColor: isJustify ? "blue" : "" }} onClick={() => handleAlign("justify")}>Justify</button>

        <button style={{ backgroundColor: isBullet ? "blue" : "" }} onClick={() => handleList("bullet")}>• List</button>
        <button style={{ backgroundColor: isNumber ? "blue" : "" }} onClick={() => handleList("number")}>1. List</button>

        {/* New Buttons */}
        <button onClick={handleImageInsert}>Image</button>
        <button onClick={handleLinkInsert}>Link</button>
        <button onClick={handleUnlink}>Unlink</button>
        <button onClick={handleClearFormatting}>Clear</button>
        
        </>
    );
    }

    export default Toolbar;
