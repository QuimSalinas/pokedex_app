import React, {Component} from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard"

class Pokedex extends Component{
    render(){
        const pokemonList=this.props.pokemonsList;
        let minimumExp=this.props.minimumExp;
        let exp = this.props.pokemonsList.reduce((acc,pokemon)=>acc+pokemon.base_experience,0);
        let className, message;
        if(exp===minimumExp){
            className="pokedex-tie";
            message="That's a TIE"
        } else if(exp>minimumExp){
            className="pokedex-winner";
            message="YEAH YOU ARE THE WINNER";
        } else{
            className = "pokedex-loser"
            message = "Sorry, you are a LOSER";
        }
        return(
            <div className="pokedex">
                <h2 className={`pokedex-title ${className}`}>TEAM{this.props.teamNumber}</h2>
                <h3 className={`pokedex-subtitle ${className}`}>{message}</h3>
                <div className="pokedex-pokecards">
                    {pokemonList.map(pokecard => <div key={pokecard.id} className="pokedex-card"><Pokecard id={pokecard.id} name={pokecard.name} type={pokecard.type} experience={pokecard.base_experience}/></div>)}
                </div>
            </div>
        )
    }
}

export default Pokedex;