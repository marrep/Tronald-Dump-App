import React from "react";
import donald from "./img/donald.png";

export default function Welcome() {
  return (
    <div>
      <img style={{ height: "200px" }} src={donald} alt="" />
      <h1>Welcome to the Tronald Dump App!</h1>
    </div>
  );
}
