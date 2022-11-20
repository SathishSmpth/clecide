import React from 'react';
class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            click: 0,
            totalRemaining:100
        }
    }
    clickMe(){
        this.setState({
            click:this.state.click + 1,
            totalRemaining:this.state.totalRemaining - 1
        })
    }
    render(){
        return(
            <div>
                <h1 onClick={() => this.clickMe()}>
                    Hello to everyone he is {this.props.name}
                </h1>
                <span>
                    {this.state.click} clicks.remaining clicks is {this.state.totalRemaining}
                </span>
            </div>
        )
    }
}
export default Item;