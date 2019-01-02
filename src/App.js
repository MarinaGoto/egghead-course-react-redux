import React, {Component} from 'react';
import './App.css';



class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            eventCount : 0,
            username : ''
        }
    }

    increment = () => {
        console.log(this.state.eventCount + 1);
        this.setState({
            eventCount: this.state.eventCount + 1,
        })
    }

    updateUsername = (event) => {
        console.log(event.target.value);
        this.setState({
            username: event.target.value,
        })
    }


    render(){
        return (
            <div>
                <p>
                    There have been {this.state.eventCount} events
                </p>
                <p>
                    <button onClick={this.increment}>
                        PRESS
                    </button>
                </p>
                <p>
                    You typed: {this.state.username}
                </p>
                <p>
                    <input
                        onChange={this.updateUsername}
                    />
                </p>
            </div>
        )
    }

}


export default App;