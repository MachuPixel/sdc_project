import React, { useState, useEffect } from "react";
import AnswerItem from "./answerList.jsx"
import Report from "./report.jsx"
import Helpful from "./helpful.jsx"
import AnswerModal from "./modal/answermodal.jsx"

const IdividualAnswer = (props) => {

  const [collapse, updateCollapse] = useState(props.answers.length > 2)
  var loopAnswers = props.answers
  useEffect(() => {
    loopAnswers.sort((a, b) => {
      return b.helpfulness - a.helpfulness
    })
    if (loopAnswers.length < 2) {
      updateCollapse(false)
    }
    var twoAnswers = loopAnswers.slice(0, 2)
    updateAnswers([...twoAnswers])
    updateTwo([...twoAnswers])
  }, [props.answers, answers])

  const [showModal, updateShow] = useState(false)
  const [two, updateTwo] = useState(0);
  const [answers, updateAnswers] = useState(props.answers)

const handleLoad = () => {
    if (answers.length <= 2) {
      updateAnswers(loopAnswers)
    } else {
      updateAnswers(two)
      updateCollapse(false)
    }
}

  return (
    <div>
      <div className="flex w-full justify-between ">
        <div className="text-xl">
          Q: {props.questions.question_body}
          {showModal && <AnswerModal updateShow={updateShow} questionID={props.questions.question_id}/>}
        </div> <span className="flex text-xs text-zinc-900 pr-2.5" ><Helpful id={props.questions.question_id} helpfulness={props.questions.question_helpfulness} type="questions"/>&nbsp;| &nbsp;<p className="hover:text-stone-50" onClick={(e) => {
          updateShow(!showModal)
        }}> {showModal && 'Cancel'} {!showModal && 'Add Answer'}</p> &nbsp; | &nbsp; <Report id={props.questions.question_id} helpfulness={props.questions.question_helpfulness} type="questions"/> </span>
      </div>
      <div className="indAnswer">
        <div className="outer" >
          <div className="text-xl max-w-xl">
            {answers.map((answer, index) => {
              return <AnswerItem answer={answer} key={index}/>
            })}
          </div>
          {props.answers.length > 2 && <button onClick={(e)=> handleLoad()} className="rounded bg-[#27272A] p-2 text-white text-sm mt-2 hover:bg-zinc-900">{answers.length <= 2 ? 'Load More Answers' : "Collapse Answers"}</button>}
        </div>
      </div>
    </div>
  )
}

export default IdividualAnswer;
