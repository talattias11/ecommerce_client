import { useState } from "react";

export default function InfoToggle(props) {
    const [isHidden, setIsHidden] = useState(true);

    function toggleIsHidden() {
        setIsHidden(!isHidden);
    }

    const info = props.info;

    return <div className="info-toggle">
        <h3>{info.title}</h3>
        <button onClick={toggleIsHidden}>
            {isHidden ? 'show' : 'hide'}
        </button>
        {!isHidden && <p>{info.content}</p>}
    </div>;
}