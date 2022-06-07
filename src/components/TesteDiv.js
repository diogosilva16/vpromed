import React, { forwardRef } from "react";

const TesteDiv = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="teste">
        <h1>espaço com informação</h1>
    </div>
  );
});

export default TesteDiv;
