import React from 'react';
import Form from './components/Form'
import List from './components/List'

import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [      ],
      newName: '',
      newNumber: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
      console.log('did mount')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          this.setState({ persons: response.data })
        })
    }

  addName =(event) => {
    event.preventDefault()
    console.log('button pressed')
    console.log(event.target)



    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
      if(!this.state.persons.some( person => person.name === nameObject.name )){

        axios
          .post('http://localhost:3001/persons', nameObject)
          .then(response => {
            this.setState({
              persons: this.state.persons.concat(response.data),
              newName: '',
              newNumber:'',
            })
            console.log(response)
          })
    }
  else{
    alert("A person with the same exact name already exists. Try changing your name.")
    }
  }

handleDelete = id =>{
  if(window.confirm('Are you sure about that?')){
  axios
  .delete('http://localhost:3001/persons/' + id);
  this.setState({
    persons: this.state.persons.filter(person => person.id !== id)
  })
  console.log('deleted')
}
}


  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value})
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value})
  }


  render() {
    console.log('render')
    const handlers = {
      name: this.handleNameChange,
      number: this.handleNumberChange,
      submit: this.addName
    }
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Form handlers ={handlers} name={this.state.newName} number={this.state.newNumber}/>
        <h2>Numerot</h2>
        <List persons = {this.state.persons} handleDelete={this.handleDelete} />
      </div>
    )
  }
}



export default App
