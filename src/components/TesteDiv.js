import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
const TesteDiv = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="teste">
        <Link to="/teste"><h1>espaço com informação</h1></Link>
    </div>
  );
});

export default TesteDiv;
