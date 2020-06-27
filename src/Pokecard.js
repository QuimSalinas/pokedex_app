import React, {Component} from "react";
import "./Pokecard.css";

class Pokecard extends Component{
    render(){
        const {id,name,type,experience}=this.props;
        let filledId=this.fillZeroes(id);
        return(
            <div className="pokecard">
                <div className="pokecard-image-background">
                    <img className="pokecard-image" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${filledId}.png`} alt={`${name}`}/>
                </div>
                <div className="pokecard-text-container">
                    <h4 className="pokecard-title">{name}</h4>
                    <p className="pokecard-text">Type: {type}</p>
                    <p className="pokecard-text">EXP: {experience}</p>
                </div>
            </div>  
        )
    }
    fillZeroes(num){
        if(String(num).length===1){
            return "00"+num;
        }
        if(String(num).length===2){
            return "0"+num;
        }
        return num;
    }
}

export default Pokecard;