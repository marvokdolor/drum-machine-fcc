import React from 'react';
import './style.css';
import DrumKit from './DrumKit'
import Display from './Display'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // value: ''
        }
    }

    render(){
        return (
            <div id="drum-machine">
                <h1>Hello drumkit!</h1>
                <DrumKit />
                <Display value={this.state.value}/>
            </div>
        )
    }
}


export default App
