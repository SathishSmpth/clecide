import React from 'react';
class PropsCard extends React.Component{
    render(){
        return (
            <div class="card" >
            <img src={this.props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={this.props.ProductLink} class="btn btn-primary" target="_blank">Buy</a>
            </div>
            </div>
        )
    }
}
export default PropsCard;