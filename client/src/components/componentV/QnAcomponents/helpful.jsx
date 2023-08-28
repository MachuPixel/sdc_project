import React, {useState, useEffect} from "react";
import axios from "axios"

const Helpful = (props) => {
  const [helpNum, updateNum] = useState(props.helpfulness);
  const [clickedQuestion, updateQuestion] = useState(false);
  const [clickedAnswer, updateAnswer] = useState(false);

useEffect(() => {
  updateNum(props.helpfulness)
},[props])

const handleAnswer = () => {
  return axios.put('/helpful/'+ props.id + '/answer').then((result) => {
    return console.log(result)
  })
}

const handleQuestion = () => {
  return axios.put('/helpful/'+ props.id).then((result) => {
    return console.log(result)
  })
}

  return (
      <p data-testid="test-span" className="hover:text-stone-50" onClick={(e) => {

        if (!clickedQuestion) {
          if(props.type === "questions") {
            console.log('props.type', props.type)
            handleQuestion()
            updateQuestion(true)
            updateNum(helpNum + 1)
          }
        }
        if(!clickedAnswer) {
          if(props.type === "answer"){
            console.log('here')
            handleAnswer()
            updateAnswer(true)
            updateNum(helpNum + 1)
          }
        }
      }}>Helpful? <u> Yes</u> ({helpNum}) </p>
  )
}

export default Helpful;