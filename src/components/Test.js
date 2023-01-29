import React from 'react'

const Test = () => {
    const nums = [1, 2, 3, 4, 5]
    const squares = nums.map(num => num * num)

    const pets = ['dog', 'cat', 'bunny']
    const pet = pets.map((pet) => {
      return pet
    })
  return (
    <div>
      <h3>{pet}</h3>
      <p>{squares}</p>
    </div>
  );
}

export default Test