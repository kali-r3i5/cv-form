import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function Doc({  }) {
  return (
    <>
      <SwaggerUI url="/api/doc" />
    </>
  );
}
