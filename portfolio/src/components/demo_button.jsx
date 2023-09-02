import React from "react"
function DemoButton(props) {
    const url = props.url
  return (
    <button className=" text-black bg-white w-fit font-extrabold rounded-md p-2 m-2" onClick={()=>{window.open(url)}}>
      {props.text}
    </button>
  )
}
export default DemoButton