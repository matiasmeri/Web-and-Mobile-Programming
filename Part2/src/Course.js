import React from 'react'

const Course =({course})=>{ //tehtävä 2.1
  const sum = course.parts.reduce((accumulator,part) => //tehtävä 2.2
  accumulator + part.exercises, 0)
  return (
    <div>
      <Header course ={course}/>
      <Contents course = {course}/>
      <p> Total of {sum} exercises</p>
    </div>
)}

const Header = (props) => {
  return(
    <div>
    <h1>{props.course.name}</h1>
    </div>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Part part={props.course.parts[0]}  />
      <Part part={props.course.parts[1]}  />
      <Part part={props.course.parts[2]}  />
    </div>
  )
}


const Part = (props) => {
  return(
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

export default Course
