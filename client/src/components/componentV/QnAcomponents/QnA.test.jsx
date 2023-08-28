import { render , fireEvent, screen} from "@testing-library/react"
import React from "react"
import AddQuestions from "./addQuestion.jsx"
import AnswerItem from "./answerList.jsx"
import Helpful from "./helpful.jsx"
import IndividualAnswer from "./indvAnswer.jsx"
import Report from "./report.jsx"
import SearchBar from "./searchbar.jsx"
import UserInfo from "./userInfo.jsx"
import QuestionsAndAnswers from "../Q&A.jsx"

describe(Report, () => {
  it("should change to reported when clicked once", () => {
    render(<Report />);
      const loaded = screen.getByText("report")
      expect(loaded).toHaveTextContent("report")
      fireEvent.click(loaded);
      expect(screen.getByText("Reported")).toHaveTextContent("Reported")
  })
  it("should not change back to report when clicked once", () => {
    render(<Report />);
    const loaded = screen.getByText("report");
    expect(loaded).toHaveTextContent("report");
    fireEvent.click(loaded);
    expect(screen.getByText("Reported")).toHaveTextContent("Reported");
    fireEvent.click(loaded);
    expect(screen.getByText("Reported")).not.toHaveTextContent("reported");
  })
})

describe(Helpful, () => {
  it("should increment helpfulness only once", () => {
    const {getByTestId} = render(<Helpful helpfulness={25} type="questions"/>);
    const pValue = getByTestId("test-span")
    expect(pValue).toHaveTextContent("Helpful? Yes (25)")
    fireEvent.click(getByTestId("test-span"));
    expect(getByTestId("test-span")).toHaveTextContent("Helpful? Yes (26)")
    fireEvent.click(getByTestId("test-span"));
    expect(getByTestId("test-span")).not.toHaveTextContent("Helpful? Yes (27)")

  })
})

describe(AddQuestions, () => {
  it("should render addQuestion button", () => {
    render(<AddQuestions />)
  })
})

describe(AnswerItem, () => {
  it("should Render each answer in list", () => {
    var mock = {
      "body" : "this is mock data",
      "photos" : []
    }
    render(<AnswerItem answer={mock}/>)
  })
})

describe(IndividualAnswer, () => {
  it("should render IndividualAnswer component", () => {
    var mockAnswer = [{"photos":["test"]}]
    var mockQuestion = {"question_body": "test"}
    render(<IndividualAnswer answers={mockAnswer} questions={mockQuestion}/>)
  })
})

describe(SearchBar, () => {
  it("should render searchbar component", () => {
    render(<SearchBar />)
  })
})

describe(UserInfo, () => {
  it("should render UserInfo component", () => {
    var mockUserInfo = {"answer": {"date" : "2019-06-28T00:00:00.000Z"}}
    render(<UserInfo userInfo={mockUserInfo}/>)
  })
})

describe(QuestionsAndAnswers, () => {
  it("should render QuestionsAndAnswers component", () => {

    render(<QuestionsAndAnswers />)
  })
})