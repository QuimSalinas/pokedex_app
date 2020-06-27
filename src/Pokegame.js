import React, {Component} from "react";
import "./Pokegame.css";
import Pokedex from "./Pokedex"

class Pokegame extends Component{
    static defaultProps = {
        pokemonsList: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ],
    };    
    minimumWinExperience(array){
        let totalExp=array.reduce((acc,pokemon)=> acc+pokemon.base_experience,0);
        return totalExp/2;
    }
    makeTeams(array){
        const team1 = [];
        const team2=[];
        let team1Set= new Set();
        while(team1Set.size<Math.floor(array.length/2)){
            team1Set.add(Math.floor(Math.random()*array.length+1))
        };
        for(let i=0;i<array.length;i++){
            if(team1Set.has(i)) team1.push(array[i]);
            else team2.push(array[i]);
        }
        return [...team1, ...team2];
    }
    render(){
        let minimumExp=this.minimumWinExperience(this.props.pokemonsList);
        const teams = this.makeTeams(this.props.pokemonsList);
        const team1 = teams.slice(0,4);
        const team2 = teams.slice(4);
        return(
            <div className="Pokegame">
                <Pokedex pokemonsList={team1} minimumExp={minimumExp} teamNumber={1} />
                <Pokedex pokemonsList={team2} minimumExp={minimumExp} teamNumber={2} />
            </div>
        )
    }
}

export default Pokegame;