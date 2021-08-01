import React from 'react'; 

class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            text:'Welcome'
        }
    }


    changeText() {
        this.setState({text:'Hi'})
    }

    render() {
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={()=> this.changeText()}>Next</button>
            </div>
        )
    }
}

export default Text;