import React, {useState, useEffect} from "react";
import IndImg from "./indImg.jsx"
import axios from "axios";

const AnswerModal = (props) => {
  const [selectedFile, setSelectedFile] = useState()

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile([...e.target.files])
}
return (
    <div className="absolute right-10">
      <form className="grid grid-col-2 gap-2 mr-4 bg-neutral-200 p-2" onSubmit={(e) => {
        e.preventDefault()
      var options = {
        "body":e.target[0].value,
        "name": e.target[1].value,
        "email": e.target[2].value,
        "photos": ["https://cdn.drawception.com/images/panels/2017/9-19/nRhOhyGQkO-8.png"]
      }
        axios.post("/questions/" + props.questionID, options).then((result) => {
          return
        })
        props.updateShow(false);
      }} >
      <textarea
        id={'answerTextAreaID'}
        name={"answer conent"}
        placeholder="Add Answer Here"
        rows={5}
        cols={40}
        maxLength="1000"
        className="col-span-2 text-base rounded-sm text-black"
      />
        <input placeholder="Example: jack543!" maxLength="60" className="rounded-sm text-base p-1 text-black"/>
        <input placeholder="Email" type="email" className="rounded-sm text-base p-1 text-black"/>
        <p className="text-xs text-neutral-400 max-w break-words">For privacy reasons, do not use your full name or email address</p>
        <p className="text-xs text-neutral-400 max-w break-words">For authentication reasons, you will not be emailed</p>
        <input type="file" multiple="multiple" accept="image"  className="rounded bg-neutral-500	 p-1 col-span-2" onChange={onSelectFile}/>
        <IndImg selectedFile={selectedFile}/>
        <input type="Submit" value="Submit" className="rounded bg-neutral-500	 p-1 col-span-2" readOnly={true}/>
      </form>
    </div>
)
}

export default AnswerModal;