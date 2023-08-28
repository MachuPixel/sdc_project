import React, {useState} from "react";
import axios from "axios";

const QuestionModal = (props) => {

return (
  <div>
  <div className="w-100vw h-100vh top-0 left-0 right-0 bottom-0 fixed bg-neutral-600 opacity-70 z-10 "></div>
  <div className="fixed top-1/4 right-1/4 z-40">
      <form className="grid grid-col-4 gap-2 mr-4 bg-neutral-200 p-2" onSubmit={(e) => {
        e.preventDefault()
      var options = {
        "body":e.target[0].value,
        "name": e.target[1].value,
        "email": e.target[2].value,
      }
        axios.post("/addQuestion/37323", options).then((result) => {
          return
        })
        props.updateQModal(false);
      }}>
      <textarea
        id={'questionTextAreaID'}
        name={"question conent"}
        placeholder="Add Question Here"
        rows={10}
        cols={40}
        maxLength="1000"
        className="col-span-4 text-base rounded-sm text-black"
      />
        <input placeholder="Example: jackson11!" maxLength="60" className="rounded-sm text-base p-1 col-span-2 text-black"/>
        <input placeholder="Email" type="email" maxLength="60" className="rounded-sm text-base p-1 col-span-2 text-black"/>
        <p className="text-xs text-neutral-400 max-w break-words col-span-2">For privacy reasons, do not use your full name or email address</p>
        <p className="text-xs text-neutral-400 max-w break-words col-span-2">For authentication reasons, you will not be emailed</p>
        <input type="Submit" value="Submit" className="rounded bg-[#27272A] p-1 text-white hover:bg-zinc-900 col-span-3" readOnly={true}/>
        <button className="rounded bg-[#27272A] p-1 text-white hover:bg-zinc-900" onClick={(e) => {
          e.preventDefault();
          props.updateQModal(!props.questionModal)
      }}>cancel</button>
      </form>
  </div>
  </div>
)
}

export default QuestionModal;