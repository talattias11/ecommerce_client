import { useState } from "react";

export default function ColorForm() {
    const [bgColor, setBgColor] = useState('black');
    const [inputVal, setInputVal] = useState('');

    const formStyle = { backgroundColor: bgColor };

    function handleBtnClick() {
        setBgColor(inputVal);
    }

    return <div className="color-form" style={formStyle}>
        <input type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="insert color" />
        <button onClick={handleBtnClick}>
            change background
        </button>
    </div>;
}