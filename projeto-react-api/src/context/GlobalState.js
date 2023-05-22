import { useState, useEffect } from "react";
import ice from '../assets/ice.svg'
import grass from '../assets/grass.svg'
import bug from '../assets/bug.svg'
import dark from '../assets/dark.svg'
import dragon from '../assets/dragon.svg'
import eletric from '../assets/eletric.svg'
import fairy from '../assets/fairy.svg'
import fighting from '../assets/fighting.svg'
import fire from '../assets/fire.svg'
import flying from '../assets/flying.svg'
import ghost from '../assets/ghost.svg'
import ground from '../assets/ground.svg'
import normal from '../assets/normal.svg'
import poison from '../assets/poison.svg'
import psychic from '../assets/psychic.svg'
import rock from '../assets/rock.svg'
import steel from '../assets/steel.svg'
import water from '../assets/water.svg'
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";




export function GlobalState(props) {
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setPokelist(response.data.results);

        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error.response);
        }
    };

    const filteredPokelist = () =>
        pokelist.filter(
            (pokemonInList) =>
                !pokedex.find(
                    (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
                )
        );

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );

        setPokedex(newPokedex);
    };

    const backgroundColor = (pokemonType) => {
        switch (pokemonType) {
            case "bug":
                return "#76A866";
            case "dark":
                return "#5C5365";
            case "dragon":
                return "#0A6CBF";
            case "electric":
                return "#F4D23B";
            case "fairy":
                return "#EC8FE6";
            case "fighting":
                return "#CE4069";
            case "fire":
                return "#EAAB7D";
            case "flying":
                return "#6892B0";
            case "ghost":
                return "#5269AC";
            case "ground":
                return "#D97745";
            case "grass":
                return "#729F92";
            case "ice":
                return "#74CEC0";
            case "normal":
                return "#BF9762";
            case "poison":
                return "#AD61AE";
            case "psychic":
                return "#F67176";
            case "rock":
                return "#C7B78B";
            case "steel":
                return "#BBBBBB";
            case "water":
                return "#71C3FF";
            default:
                return "#FFFFFF"
        }
    }
    
    const imageByType = (imagebyTypeOfPokemon) => {
        switch (imagebyTypeOfPokemon) {
            case "bug":
                return bug;
            case "dark":
                return dark;
            case "dragon":
                return dragon;
            case "electric":
                return eletric;
            case "fairy":
                return fairy;
            case "fighting":
                return fighting;
            case "fire":
                return fire;
            case "flying":
                return flying;
            case "ghost":
                return ghost;
            case "grass":
                return grass;
            case "ground":
                return ground;
            case "ice":
                return ice;
            case "normal":
                return normal;
            case "poison":
                return poison;
            case "psychic":
                return psychic;
            case "rock":
                return rock;
            case "steel":
                return steel;
            case "water":
                return water;
            default:
                break;
        }
    }

    const statsColor = (statName) => {
        switch (statName) {
            case "hp":
                return "#ff7c2e"
            case "attack":
                return "#ff7c2e"
            case "defense":
                return "#ff7c2e"
            case "special-attack":
                return "#ffdd69"
            case "special-defense":
                return "#d9bc59"
            case "speed":
                return "#e06926"
            default:
                return "yellow"
        }
    }

    const typeColor = (typeColor) => {
        switch (typeColor) {
            case "bug":
                return "#316520";
            case "dark":
                return "#5C5365";
            case "dragon":
                return "#0A6CBF";
            case "electric":
                return "#F4D23B";
            case "fairy":
                return "#EC8FE6";
            case "fighting":
                return "#CE4069";
            case "fire":
                return "#F44900";
            case "flying":
                return "#6892B0";
            case "ghost":
                return "#5269AC";
            case "grass":
                return "#70B873";
            case "ground":
                return "#D97745";
            case "ice":
                return '#74CEC0';
            case "normal":
                return "#8A8A8A";
            case "poison":
                return "#AD61AE";
            case "psychic":
                return "#F67176";
            case "rock":
                return "#C7B78B";
            case "steel":
                return "#BBBBBB";
            case "water":
                return "#33A4F5";
            default:
                return "#ffffff"
        }
    }

    const data = {
        pokedex,
        pokelist,
        addToPokedex,
        removeFromPokedex,
        filteredPokelist,
        typeColor,
        backgroundColor,
        statsColor,
        imageByType
    }

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}