import React from 'react'

class DrumKit extends React.Component {
    constructor(props){
        super(props);
        // It didn't work to have this here
        // this.state = {
        //     displayText: 'What is really up?'
        // }
    }

    render(){
        return(
            <div>
                <div className="btn-group" role="group">
                    <div className="row">
                        <button type="button" id="cymbal1" className="btn btn-default drum-pad">
                            <audio id="Q" className="clip"
                                src="./VintageDrumboxKit/Vintage_Cymbal_01.wav">
                            </audio>
                        Q</button>
                        <button type="button" id="cymbal2" className="btn btn-default drum-pad">
                            <audio id="W" className="clip"
                                src="./VintageDrumboxKit/Vintage_Cymbal_02.wav">
                            </audio>
                        W</button>
                        <button type="button" id="cymbal3" className="btn btn-default drum-pad">
                            <audio id="E" className="clip" src="./VintageDrumboxKit/Vintage_Cymbal_03.wav">
                            </audio>
                        E</button>
                    </div>
                    <div className="row">
                        <button type="button" id="kick-hat" className="btn btn-default drum-pad">
                            <audio id="A" className="clip" src="./VintageDrumboxKit/Vintage_Closed_Hat_01.wav">
                            </audio>
                        A</button>
                        <button type="button" id="hi-hat" className="btn btn-default drum-pad">
                            <audio id="S" className="clip" src="./VintageDrumboxKit/Vintage_Open_Hat_02.wav">
                            </audio>
                        S</button>
                        <button type="button" id="snare" className="btn btn-default drum-pad">
                            <audio id="D" className="clip" src="./VintageDrumboxKit/Vintage_Snare_04.wav">
                            </audio>
                        D</button>
                    </div>
                    <div className="row">
                        <button type="button" id="tom-tom1" className="btn btn-default drum-pad">
                            <audio id="Z" className="clip" src="./VintageDrumboxKit/Vintage_Tom_01.wav">
                            </audio>
                        Z</button>
                        <button type="button" id="tom-tom2" className="btn btn-default drum-pad">
                            <audio id="X" className="clip" src="./VintageDrumboxKit/Vintage_Tom_02.wav">
                            </audio>
                        X</button>
                        <button type="button" id="bass" className="btn btn-default drum-pad">
                            <audio id="C" className="clip" src="./VintageDrumboxKit/Vintage_Kick_01.wav">
                            </audio>
                        C</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumKit
