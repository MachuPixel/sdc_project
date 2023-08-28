import React, {useState} from 'react';

const SearchBar = (props) => {

const [search, updateSearch] = useState(false)


const handleSearch = (value) => {
  var filtered = props.perma.filter((question) => {
    if (question.question_body.toLowerCase().includes(value.toLowerCase())) {
      return question
    }
  })
  updateSearch(true)
  props.updateStatic(filtered)
  props.updateQuestions(filtered)
}

  return (
    <form className="">
      <input type={'text'} placeholder={'Have a Question? search for answers...'} className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  dark:border-gray-600 dark:placeholder-gray-400" onChange={(e) => {
        if (e.target.value.length >= 3) {
          handleSearch(e.target.value);
        } else if (search) {
          props.updateStatic(props.perma)
          props.updateQuestions(props.perma)
        }
      }} />
    </form>
  )
}


export default SearchBar;