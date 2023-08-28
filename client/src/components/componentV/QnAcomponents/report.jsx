import React, { useState } from "react";
import axios from "axios"


const Report = (props) => {


  const [reported, updateReport] = useState(false);
  // const [aReport, updateAReport] = useState(false);
  const handleReport = (type) => {
    if(!reported){
      if(type === 'questions') {
        axios.put("/reportQuestion/" + props.id ).then((result) => console.log(result));
      } else if (type === "answer") {
        axios.put("/reportAnswer/" + props.id ).then((result) => console.log(result));
      }
    }
  }

  return (
    <p className="hover:text-stone-50" onClick={ (e) => {
      handleReport(props.type);
      updateReport(true);
    }}> {reported && 'Reported'}  {!reported && "report"} </p>
  )
}



export default Report;