import React from 'react';
import './style.css';


function Drum(props){
    return (
        <button
        className="drum" onClick={props.onClick}>
        {props.value}
        </button>

    )
}

class DrumKit extends React.Component{
    renderDrum(i) {
        return (
            <Drum
                // value={this.props.drums(i)}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.renderDrum(0)}
                    {this.renderDrum(1)}
                    {this.renderDrum(2)}
                    {this.renderDrum(3)}
                </div>
                <div className="row">
                    {this.renderDrum(4)}
                    {this.renderDrum(5)}
                    {this.renderDrum(6)}
                    {this.renderDrum(7)}
                </div>
                <div className="row">
                    {this.renderDrum(8)}
                </div>
            </div>
        )
    }
}

function
class DisplayComponent extends React.Component{
    renderDisplay(){
        return (
            <Display />
        )
    }
    render(){
        return (
            <div>
                <div id="display">
                    {this.renderDisplay()}
                </div>
            </div>
        )
    }
}
class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: " "
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleClick(i) {
        this.setState({})

    }

    render() {
        return (
            <div>
                <DrumKit />
                <Display />
            </div>
        );
    }
}


export default App
