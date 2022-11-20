import React from 'react';
class FilmsItem extends React.Component{
    render(){
        return(
            <li>
                {this.props.url}
            </li>
        )
    }
}
class StarWars extends React.Component{
    constructor() {
        super()
        this.state = {
            loadedCharacter: false,
            name:null,
            height:null,
            wiki:null,
            homeWorld:null,
            image:null,
            affiliations:[],
        }
    }
    getNewCharacter(){
        const randomNumber = Math.round(Math.random(1)*88)
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    loadedCharacter:true,
                    name: data.name,
                    height: data.height,
                    wiki: data.wiki,
                    homeWorld: data.homeworld,
                    image:data.image,
                    affiliations:data.affiliations,
                })
            })
    }
    render(){
        const affiliations = this.state.affiliations.map((affiliations,i)=>{
            return <FilmsItem key={i} url={affiliations}/>
        })
        return(
            <div>
                {
                this.state.loadedCharacter &&
                    <div>
                        <h1>{this.state.name}</h1>
                        <img src={this.state.image} width="800px" height="400px" alt="Not Found"></img>
                        <h3>
                            <a href={this.state.wiki} target="_blank" rel="noreferrer">Wiki : {this.state.wiki}</a>
                        </h3>
                        <h4>Height {this.state.height}</h4>
                        <h4>
                            <span>Home World :</span> {this.state.homeWorld}
                        </h4>
                        <ul>
                            <h3>
                                Affiliations
                            </h3>
                            {affiliations}
                        </ul>
                    </div>
                }
                <button type='button' onClick={() => this.getNewCharacter()} className='randomize-button'>
                    Randomize Character
                </button>
                
            </div>
        )
    }
}
export default StarWars;