import React from 'react'
import Person from './Person'


const List =({persons, handleDelete}) => {
  return(
  persons
  .map(person => <Person key={person.name} person={person} handleDelete={handleDelete}/>)
  )
}

export default List
