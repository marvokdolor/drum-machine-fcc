(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),d=n.n(o),r=(n(8),n(2)),u=n(3),c=n(5),s=n(4),l=n(6),p=n(1),m=[{innerText:"Q",id:"Cymbal-Crash",unicode:81,audioLink:"http://www.percussionclinic.com/sounds/instrumentclips/chinacymbal.mp3"},{innerText:"W",id:"Hi-Hat",unicode:87,audioLink:"http://www.denhaku.com/r_box/sr16/sr16hat/sweethat.wav"},{innerText:"E",id:"Cymbal-Ride",unicode:69,audioLink:"http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Ride%2003-5850-Free-Loops.com.mp3"},{innerText:"A",id:"Rimshot",unicode:65,audioLink:"http://www.randomthink.net/labs/html5drums/drumkit/Rimshot.mp3"},{innerText:"S",id:"Snare-1",unicode:83,audioLink:"http://www.footdrumplus.ca/uploads/3/4/8/6/34866267/fl6_snarex-.wav"},{innerText:"D",id:"Snare-2",unicode:68,audioLink:"http://www.denhaku.com/r_box/sr16/sr16sd/batterrm.wav"},{innerText:"Z",id:"Tom-Tom-1",unicode:90,audioLink:"http://www.denhaku.com/r_box/sr16/sr16tom/locan%20hl.wav"},{innerText:"X",id:"Tom-Tom-2",unicode:88,audioLink:"http://tipiwiki.free.fr/snd/Tamtam2.wav"},{innerText:"C",id:"Bass Drum",unicode:67,audioLink:"http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bass%20Drum%20Free%20002-1659-Free-Loops.com.mp3"}],h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={displayText:"Click a button or Press a key"},n.updateDisplay=n.updateDisplay.bind(Object(p.a)(Object(p.a)(n))),n.clearDisplay=n.clearDisplay.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"updateDisplay",value:function(e,t){var n=this;this.setState({displayText:e}),setTimeout(function(){return n.clearDisplay()},t)}},{key:"clearDisplay",value:function(){this.setState({displayText:" "})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"container-fluid"},i.a.createElement("div",{id:"drum-machine"},i.a.createElement("h1",null,"Drum Machine"),i.a.createElement("h2",null,"Living the Dream"),i.a.createElement(w,{displayText:this.state.displayText}),m.map(function(t){return i.a.createElement(y,{key:t.id,drumpad:t,updateDisplay:e.updateDisplay})})))}}]),t}(i.a.Component),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleClick=function(){n.audio.play(),n.audio.currentTime=0,n.props.updateDisplay(n.props.drumpad.id,2e3)},n.handleKeyDown=function(e){e.keyCode===n.props.drumpad.unicode&&(n.audio.play(),n.audio.currentTime=0,n.props.updateDisplay(n.props.drumpad.id,2e3))},n.handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handelKeyDown=n.handleKeyDown.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),window.focus()}},{key:"componentWillUnMount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return i.a.createElement("button",{id:this.props.drumpad.id,className:"button drum-pad",onClick:this.handleClick,onKeyDown:this.handleKeyDown},this.props.drumpad.innerText,i.a.createElement("audio",{ref:function(t){return e.audio=t},id:this.props.drumpad.innerText,className:"clip",src:this.props.drumpad.audioLink}))}}]),t}(i.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"display",className:"well"},i.a.createElement("h2",null,this.props.displayText))}}]),t}(i.a.Component),b=h;d.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.820e00b8.chunk.js.map