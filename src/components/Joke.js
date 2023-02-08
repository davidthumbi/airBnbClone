import React from 'react'

const Joke = ({setup, punchline,  upVotes}) => {
  return (
    <div>
        {setup && <h3>Setup: {setup}</h3>}
        <p>Punchline: {punchline}</p>
        <p>UpVotes: {upVotes}</p>
        <hr />
    </div>
  )
}

export default Joke