import React from 'react'

const Person =({person, handleDelete}) => {
  return(
    <table>
      <td>{person.name}</td>
      <td> {person.number} </td>
    <td><button id={person.id} onClick={() => handleDelete(person.id)}>Poista</button></td>
    </table>
  )
}

export default Person
