import React from 'react'
import learners from "../data/learners";

 function Score() {
    const learnersScore = learners.map((learners, idx) => (
        <div key={idx}>
            {learners.scores.map((score, index) => (
              <div key={index} className="scoreDisplay">
                <h3 >
                <strong>Date:</strong> {score.date}
                 <br />
                  <strong>Score:</strong> {score.score}
                  </h3> 
              </div>
            )
            )}
        </div>
    ))
  return (
    <div>{learnersScore}</div>
  )
}
console.log(learners);


export default Score;
