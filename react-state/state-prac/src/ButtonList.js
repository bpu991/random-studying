import React, { Component } from 'react';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['#FF0000', '#000000']
    }
    constructor(props) {
        super(props);

        this.state = {
            color: "cyan"
        }
    }
    changeColor = (newColor) => {
        this.setState({ color: newColor})
    }
    render() {
        return (
            <div className='ButtonList' style={{backgroundColor: this.state.color}}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c};
                    return <button style={colorObj} onClick={this.changeColor.bind(this, c)}>Click on Me</button>
                })}
            </div>
        )
    }
}

export default ButtonList