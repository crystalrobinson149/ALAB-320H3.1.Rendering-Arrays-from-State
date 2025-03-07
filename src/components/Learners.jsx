

import learners from "../data/learners";

console.log(learners.data);

function Learner() {   
    const learnersList = learners.map((learners, idx) => (
       <div key={idx}>

        <div className="card">
            <h2>{learners.name}</h2>
        <h3>Student id: {learners.id}</h3>
        <p><b>Bio:</b> {learners.bio}</p>
            <hr />

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
     </div> 
       
       
    ))
    return(
        <div>
            <ul>{learnersList}</ul>
        </div>
    )
}

export default Learner;
