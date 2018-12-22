import React from 'react'

const Joke = (props) => {
  return (
    <div>
      <p>Question: {props.question}</p>
      <p>Answer: {props.punchLine}</p>
    </div>
  )
}
export default Joke
