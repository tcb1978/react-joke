import React from 'react'

const Joke = (props) => {
  return (
    <div>
      <h3 style={{
        display: !props.question && "none" }}>Question: <span style={{
          color: "blue"
        }}>{props.question}</span></h3>
      <h3 style={{
        display: !props.punchLine && "none" }}>Answer: <span style={{
          color: "orange"
        }}>{props.punchLine}</span></h3>
    </div>
  )
}
export default Joke
