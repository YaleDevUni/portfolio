import React from "react";
function StackButton(props) {
  return (
    <div className=" bg-white mx-2  text-black w-fit rounded-md ">
      <div className=" m-1 font-bold">{props.text}</div>
    </div>
  );
}
export default StackButton;