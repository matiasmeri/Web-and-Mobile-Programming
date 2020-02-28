import React from 'react';
import ReactDOM, { render } from 'react-dom';

const Display = ({ counter }) =>  <div>{counter}</div>

const Feedback = () =>{
    return(
        <div>
            <h1>Give feedback!</h1>
        </div>
    )
}

const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({counter1, counter2, counter3}) => {
    return(
        <div>
            <p> Good {counter1}</p>
            <p> Ok {counter2}</p>
            <p> Bad {counter3}</p>
            <p> Average {((counter1 - counter3)/(counter1 + counter2+ counter3)).toFixed(1)} </p>
            <p> Positive {((counter1/(counter1 + counter2 + counter2))*100).toFixed(1)}% </p>
        </div>
    )
}


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            counter1: 0,
            counter2: 0,
            counter3: 0
        }
        this.increasesGood = this.increasesGood.bind(this)
        this.increasesOk = this.increasesOk.bind(this)
        this.increasesBad = this.increasesBad.bind(this)
    }
    increasesGood() {
        this.setState({ counter1: this.state.counter1 + 1 })
    }
    increasesOk() {
        this.setState({ counter2: this.state.counter2 + 1 })
    }
    increasesBad() {
        this.setState({ counter3: this.state.counter3 + 1 })
    }

    showFeedback = () => {
        if (this.state.counter1 === 0 && this.state.counter2 === 0 && this.state.counter3 === 0) {
            return (<p>No feedback</p>)
        }
        else {
            return ( 
                <div>
                    <Statistics
                        counter1={this.state.counter1}
                        counter2={this.state.counter2}
                        counter3={this.state.counter3}                    
                    />
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <Feedback/>
                <div>
                    <Display counter = {this.state.counter}/>
                    <Button handleClick = {this.increasesGood} text = "Good" />
                    <Button handleClick = {this.increasesOk} text = "Ok" />
                    <Button handleClick = {this.increasesBad} text = "Bad" />

                    <h3> Statistics </h3>
                    {this.showFeedback()}
                

                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
     document.getElementById('root')
   )