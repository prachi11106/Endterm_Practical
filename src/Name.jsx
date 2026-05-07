import React, { useState } from "react";
function NameDisplay() {
const [name, setName] = useState ("") ;
return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Enter your name:</h2>
        <input  type="text" value={name} placeholder = "Write your name"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Your name is: <strong>{name}</strong>
      </p>
    </div>
    );
}
export default NameDisplay;