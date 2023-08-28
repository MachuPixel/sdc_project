import React, {useState} from "react";
import QuestionModal from "./modal/questionmodal.jsx"

const AddQuestions = (props) => {
  const [questionModal, updateQModal] = useState(false)

  return (
    <div>
    {questionModal && <QuestionModal updateQModal={updateQModal} questionModal={questionModal}/>}
    {!questionModal && <button className="rounded bg-[#27272A] p-3 text-white hover:bg-zinc-900" onClick={(e) => {
    updateQModal(!questionModal)
  }}>Add A Question</button>}
  </div>
)
}
export default AddQuestions