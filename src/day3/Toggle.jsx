import React, { useState } from "react";

const Toogle = () => {
  const [currentState, setState] = useState("Kaioken");
  return (
    <div>
      <input
        type="checkbox"
        onChange={currentState === "Kaioken" ? "Super Saiyon" : "Kaioken"}
      ></input>
    </div>
  );
};

export default Toogle;
