import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return <h2>It's my first component</h2>;
}

export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>);