/* References:
- https://codepen.io/StudentOfJS/pen/dzjPwP/
*/
import React from "react"
import "./style.css"
import drumpadData from "./drumpadData"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayText: ''
        }
    }
    render() {
        const drumpadComponent = drumpadData.map( item => <Drumpad key={item.id} drumpad={item}/> )

        return (
            <div id="drum-machine">
            {drumpadComponent}
            </div>
        )
    }
}

class Drumpad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayText: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            displayText: this.props.drumpad.id
        })
    }
    render() {
        // const displayComponent =

        return (
            <div>
            <button key={this.props.drumpad.id}
                    id={this.props.drumpad.id}
                    className="button drum-pad"
                    onClick={this.handleClick}>
                    {this.props.drumpad.innerText}
                <audio
                id={this.props.drumpad.innerText}
                className="clip"
                src={this.props.drumpad.audioLink}>
                </audio>
            </button>
            <Display displayText={this.state.displayText} />
            </div>
        )
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <h2>{this.props.displayText}</h2>
            </div>
        )
    }
}

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//
//         }
//     }
//
//     render() {
//         // const drumpadComponent = drumpadData.map( item => <Drumpad key={item.id} drumpad={item}/> )
//
//         return (
//             <div id="drum-machine">
//                 <h1>My baby drum machine</h1>
//                 <Drumpad />
//                 <Display />
//             </div>
//         )
//     }
// }
//
// class Drumpad extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             displayText: '',
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(id) {
//         this.setState({
//             count: this.state.count + 1,
//             displayText: "Getting there? " + this.state.count
//         })
//         // console.log()
//     }
//     render() {
//         // const displayComponent =
//         const drumpadComponent = drumpadData.map( drumpad =>
//             <button key={drumpad.id}
//                     id={drumpad.id}
//                     className="button drum-pad"
//                     onClick={this.handleClick}>
//                     {drumpad.innerText}
//                 <audio
//                 id={drumpad.innerText}
//                 className="clip"
//                 src={drumpad.audioLink}>
//                 </audio>
//             </button> )
//
//         return (
//             <div>
//                 {drumpadComponent}
//                 <Display displayText={this.state.displayText} />
//             </div>
//         )
//     }
// }
//
// class Display extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//
//         return (
//             <div>
//                 <h2>{this.props.displayText}</h2>
//             </div>
//         )
//     }
// }



export default App
