export default function ClicksDemo() {
    return <div className="demo">
        <button onClick={shaharHandler}>
            click me!
        </button>
    </div>;
}

function shaharHandler() {
    alert('this is shahar handler');
}