import React from "react"
import Helpful from "./helpful.jsx"
import UserInfo from "./userInfo.jsx"
import Report from "./report.jsx"

const AnswerItem = (props) => {

  return (
    <div className="test pt-4">
    <p>A: {props.answer.body}</p>
    <div className="flex py-4">
    {props.answer.photos.length > 0 &&
      props.answer.photos.map((photo, index) => {
        return <img src={photo} className="max-h-36 px-2" loading="lazy" key={index}/>
      })
    }
    </div>
    <div className="flex text-xs text-zinc-900"> <UserInfo  userInfo={props}/> &nbsp;| &nbsp;<Helpful id={props.answer.id} helpfulness={props.answer.helpfulness} type="answer"/> &nbsp;| &nbsp;<Report id={props.answer.id} helpfulness={props.answer.helpfulness} type="answer"/> &nbsp;</div>
    </div>
  )

}

export default AnswerItem;
